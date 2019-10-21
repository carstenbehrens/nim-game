import React, {useEffect, useReducer} from 'react';
import {GameContainer, MatchesContainer, GlobalStyle} from './style';
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

const gameStateReducer = (state, action) => {
	switch (action.type) {
		case 'SWITCH_PLAYER':
			return {...state, isPlayer: !state.isPlayer};
		case 'SELECT_MATCH':
			const tmp = state.matchesSelectedState;
			tmp[action.matchNumber] = !tmp[action.matchNumber];
			return {...state, matchesSelectedState: tmp};
		case 'SET_MATCHES':
			return {...state, matchesSelectedState: action.newMatchSelectedState}
		case 'REMOVE_SELECTED':
			return {...state, matchesSelectedState: state.matchesSelectedState.filter(match => match === false)}
		case 'SWITCH_IS_WAITING':
			return {...state, isWaiting: action.status}
		case 'SET_IS_GAME_OVER':
			return {...state, isGameOver: true}
		case 'RESET_GAME':
			return {isPlayer: !state.isPlayer, matchesSelectedState: [...getInitialState()], isWaiting: false}
		default:
			throw new Error();
	}
};

const App = () => {
	const [state, dispatch] =
		useReducer(gameStateReducer,
			{
				isPlayer: true,
				matchesSelectedState: getInitialState(),
				isWaiting: false,
				isGameOver: false
			});

	useEffect(() => {
		// Computer move -> Select Matches
		if (isGameOver(state.matchesSelectedState, state.isPlayer)) {
			dispatch({type: 'SET_IS_GAME_OVER'})
		} else {
			if (!state.isPlayer && !state.matchesSelectedState.includes(true) && !state.isWaiting) {
				const newMatchSelectedState = selectNumberOfMatches(
					getRandomIntInclusive(1, getMaxNumberToSelect(state.matchesSelectedState)),
					state.matchesSelectedState
				);
				dispatch({type: 'SET_MATCHES', newMatchSelectedState})
				dispatch({type: 'SWITCH_IS_WAITING', status: true})
			}

			// Wait for 1 second before removing the matches for better UX
			if (!state.isPlayer && !state.isWaiting) {
				setTimeout(() => {
					handleFinishTurn(state.matchesSelectedState);
					dispatch({type: 'SWITCH_IS_WAITING', status: false})
				}, 1000);
			}
		}
	}, [state.isPlayer, state.isWaiting, state.matchesSelectedState])

	useEffect(() => {
		if (state.isGameOver) {
			alert(`GAME OVER: ${state.isPlayer ? 'Computer' : 'Player'} Won.`)
			dispatch({type: 'RESET_GAME'})
		}
	}, [state.isGameOver, state.isPlayer])

	const handleClickMatch = matchNumber => {
		dispatch({type: 'SELECT_MATCH', matchNumber})
	};

	const handleFinishTurn = matchesSelectedState => {
		if (isLegalMove(matchesSelectedState)) {
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
				{state.matchesSelectedState.map((el, i) => (
					<Match
						visible={!el}
						key={i}
						matchNumber={i}
						onClick={handleClickMatch}
					/>
				))}
			</MatchesContainer>
			<Hud
				handleFinishTurn={handleFinishTurn}
				userIsCurrentPlayer={state.isPlayer}
				matchesSelectedState={state.matchesSelectedState}
			/>
		</GameContainer>
	);
};

export default App;
