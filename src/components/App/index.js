import React, {useEffect, useReducer} from 'react';
import {GameContainer, MatchesContainer, GlobalStyle} from './style';
import Match from '../Match';
import Hud from '../Hud';
import {
	isLegalMove,
	isGameOver,
	getInitialState,
	selectMatches,
  getBestMove
} from '../../utils';

export const reducer = (state, action) => {
	switch (action.type) {
		case 'SWITCH_PLAYER':
			return {...state, isPlayer: !state.isPlayer};
		case 'SELECT_MATCH':
			const tmp = state.matches;
			tmp[action.number] = !tmp[action.number];
			return {...state, matches: tmp};
		case 'SET_MATCHES':
			return {...state, matches: action.newMatchesState}
		case 'REMOVE_SELECTED':
			return {...state, matches: state.matches.filter(match => match === false)}
		case 'SWITCH_IS_WAITING':
			return {...state, isWaiting: !state.isWaiting}
		case 'SET_IS_GAME_OVER':
			return {...state, isGameOver: true}
		case 'RESET_GAME':
			return {isPlayer: !state.isPlayer, matches: [...getInitialState()], isWaiting: false, isGameOver: false}
		default:
			throw new Error();
	}
};

const App = () => {
	const [state, dispatch] =
		useReducer(reducer,
			{
				isPlayer: true,
				matches: getInitialState(),
				isWaiting: false,
				isGameOver: false
			});

	useEffect(() => {
		// Computer move -> Select Matches
		if (isGameOver(state.matches)) {
			dispatch({type: 'SET_IS_GAME_OVER'})
		} else {
			if (!state.isPlayer && !state.matches.includes(true) && !state.isWaiting) {
				const newMatchesState = selectMatches(
					getBestMove(state.matches.length),
					state.matches
				);
				dispatch({type: 'SET_MATCHES', newMatchesState})
				dispatch({type: 'SWITCH_IS_WAITING'})
			}

			// Wait for 1 second before removing the matches for better UX
			if (!state.isPlayer && !state.isWaiting) {
				setTimeout(() => {
					handleFinishTurn(state.matches);
					dispatch({type: 'SWITCH_IS_WAITING'})
				}, 1000);
			}
		}
	}, [state.isPlayer, state.isWaiting, state.matches])

	useEffect(() => {
		if (state.isGameOver) {
			alert(`GAME OVER: ${state.isPlayer ? 'Computer' : 'Player'} Won.`)
			dispatch({type: 'RESET_GAME'})
		}
	}, [state.isGameOver, state.isPlayer])

	const handleClickMatch = number => {
    console.log(number)
		dispatch({type: 'SELECT_MATCH', number})
	};

	const handleFinishTurn = matches => {
		if (isLegalMove(matches)) {
			dispatch({type: 'REMOVE_SELECTED'});
			dispatch({type: 'SWITCH_PLAYER'});
		} else {
			alert('Please select more then 1 and less then 3 matches');
		}
	};

	return (
		<GameContainer>
			<GlobalStyle />
			<MatchesContainer>
				{state.matches.map((el, i) => (
					<Match
						visible={!el}
						key={i}
						number={i}
						onClick={handleClickMatch}
					/>
				))}
			</MatchesContainer>
			<Hud
				handleFinishTurn={handleFinishTurn}
				userIsCurrentPlayer={state.isPlayer}
				matches={state.matches}
			/>
		</GameContainer>
	);
};

export default App;
