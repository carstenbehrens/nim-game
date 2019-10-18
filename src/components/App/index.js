import React, { useState, useEffect } from 'react';
import { GameContainer, MatchesContainer, GlobalStyle } from './style';
import Match from '../Match';
import Hud from '../Hud';
import {
	isLegalMove,
	isGameOver,
	getInitialState,
	getRandomIntInclusive,
  selectNumberOfMatches,
  getMaxNumberToSelect
} from '../../utils';

// 13 Matches are available at the beginning of the game
const initialMatchesSelectedArray = getInitialState();

const App = () => {
	const [matchesSelectedState, setMatchesState] = useState(
		initialMatchesSelectedArray
	);
	const [userIsCurrentPlayer, setUserIsCurrentPlayer] = useState(true);

	useEffect(() => {
		if (isGameOver(matchesSelectedState)) {
			alert(`Game Over! ${userIsCurrentPlayer ? 'Computer' : 'User'} Won`);
			// Restart Game
			setMatchesState(getInitialState());
    }

    // The computers turn
    if (!userIsCurrentPlayer) {
      const max = getMaxNumberToSelect(matchesSelectedState)
      const newArr = selectNumberOfMatches(getRandomIntInclusive(1, max), matchesSelectedState)
      setMatchesState(() => [...newArr])
    }
    
    // Finish the turn if computer has selected matches
    if (!userIsCurrentPlayer && matchesSelectedState.includes(true)) {
      handleFinishTurn(matchesSelectedState)
    }
	}, [matchesSelectedState, userIsCurrentPlayer]);
  
	const handleMatchesState = matchNumber => {
		setMatchesState(matchesSelectedState => {
			// Select and deselect the matches
			matchesSelectedState[matchNumber] = !matchesSelectedState[matchNumber];
			return [...matchesSelectedState];
		});
	};

	const handleFinishTurn = matchesSelectedState => {
		if (isLegalMove(matchesSelectedState)) {
			// Removes the matches that were selected from the game
			setMatchesState(matchesSelectedState =>
				matchesSelectedState.filter(match => match === false)
			);
			// Change Players
			setUserIsCurrentPlayer(userIsCurrentPlayer => !userIsCurrentPlayer);
		}

		if (!isLegalMove(matchesSelectedState)) {
			alert('Please select more then 1 and less then 3 matches');
		}
	};

	return (
		<GameContainer>
			<GlobalStyle />
			<MatchesContainer>
				{matchesSelectedState.map((el, i) => (
					<Match
						visible={!el}
						key={i}
						matchNumber={i}
						onClick={handleMatchesState}
					/>
				))}
			</MatchesContainer>
			<Hud
				handleFinishTurn={handleFinishTurn}
				userIsCurrentPlayer={userIsCurrentPlayer}
				matchesSelectedState={matchesSelectedState}
			/>
		</GameContainer>
	);
};

export default App;
