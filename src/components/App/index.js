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
  const [isWaiting, setIsWaiting] = useState(false);

	useEffect(() => {
		if (isGameOver(matchesSelectedState)) {
			// Restart Game
			alert(`Game Over! ${userIsCurrentPlayer ? 'Computer' : 'User'} Won`);
      resetGame()
		} else {
			// The computers turn, only select elements if we are not currently waiting for the move to finish
			if (!userIsCurrentPlayer && !isWaiting) {
				const max = getMaxNumberToSelect(matchesSelectedState);
				const newArr = selectNumberOfMatches(
					getRandomIntInclusive(1, max),
					matchesSelectedState
				);
				setMatchesState(() => [...newArr]);
			}

			// Finish the turn if computer has selected matches
			if (!userIsCurrentPlayer && matchesSelectedState.includes(true)) {
        setIsWaiting(true)
        if (isWaiting) {
          setTimeout(() => {
            handleFinishTurn(matchesSelectedState);
            setIsWaiting(false)
          }, 1000);
        }
			}
		}
  }, [isWaiting, matchesSelectedState, userIsCurrentPlayer]);
  
  const resetGame = () => {
    setMatchesState(() => [...getInitialState()]);
    setUserIsCurrentPlayer(true);
  }

	const handleClickMatch = matchNumber => {
    if (userIsCurrentPlayer) {
      setMatchesState(matchesSelectedState => {
        // Select and deselect the matches
        matchesSelectedState[matchNumber] = !matchesSelectedState[matchNumber];
        return [...matchesSelectedState];
      });
    }
	};

	const handleFinishTurn = matchesSelectedState => {
		if (!isGameOver(matchesSelectedState)) {
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
            onClick={handleClickMatch}
					/>
				))}
			</MatchesContainer>
			<Hud
				handleFinishTurn={userIsCurrentPlayer ? handleFinishTurn : () => null}
				userIsCurrentPlayer={userIsCurrentPlayer}
				matchesSelectedState={matchesSelectedState}
			/>
		</GameContainer>
	);
};

export default App;
