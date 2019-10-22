import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import App, { reducer } from './index';
import {getInitialState} from '../../utils'

describe('App', () => {
	it('renders without crashing', () => {
		shallow(<App />);
	});

	it('matches snapshot', () => {
		const wrapper = mount(<App />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	describe('Reducer', () => {
		it('should switch player', () => {
			const initialState = { isPlayer: false };
			const newState = reducer(initialState, { type: 'SWITCH_PLAYER' });
			expect(newState).toEqual({ isPlayer: true });
		});

		it('should select a match', () => {
			const initialState = { matches: [false] };
			const newState = reducer(initialState, {
				type: 'SELECT_MATCH',
				number: 0
			});
			expect(newState).toEqual({ matches: [true] });
		});

		it('should set a new array of matches', () => {
			const initialState = { matches: [false] };
			const newState = reducer(initialState, {
				type: 'SET_MATCHES',
				newMatchesState: [true]
			});
			expect(newState).toEqual({ matches: [true] });
		});

		it('Remove all array elements that are true', () => {
			const initialState = { matches: [false, false, true, true, false, true] };
			const newState = reducer(initialState, {
				type: 'REMOVE_SELECTED'
			});
			expect(newState).toEqual({ matches: [false, false, false] });
    });
    
		it('should switch isWaiting', () => {
			const initialState = { isWaiting: false } 
			const newState = reducer(initialState, {
				type: 'SWITCH_IS_WAITING'
			});
			expect(newState).toEqual({ isWaiting: true });
    });
    
		it('set is game over', () => {
			const initialState = { isGameOver: false } 
			const newState = reducer(initialState, {
				type: 'SET_IS_GAME_OVER'
			});
			expect(newState).toEqual({ isGameOver: true });
    });
    
		it('set is game over', () => {
      const initialState = { isPlayer: false } 
      const matches = getInitialState();
			const newState = reducer(initialState, {
				type: 'RESET_GAME'
			});
			expect(newState).toEqual({isPlayer: true, matches: matches, isWaiting: false, isGameOver: false});
    });
	});
});
