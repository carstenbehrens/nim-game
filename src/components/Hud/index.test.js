import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Hud from './index';
import { HudContainer, FinishTurn } from './style';

describe('Hud', () => {
	test('renders without crashing', () => {
		shallow(<Hud />);
	});

	test('matches snapshot', () => {
		const wrapper = mount(<Hud userIsCurrentPlayer={true} />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	test('handleFinishTurn gets called correctly', () => {
		FinishTurn.displayName = 'FinishTurn';

		const matches = [false, false];
		const handleFinishTurn = jest.fn();

		const wrapper = shallow(
			<Hud matches={matches} handleFinishTurn={handleFinishTurn} />
		);

		wrapper.find('FinishTurn').simulate('click');

		expect(handleFinishTurn).toHaveBeenCalledWith(matches);
	});

	test('Correct player gets shown', () => {
		HudContainer.displayName = 'HudContainer';

		const wrapper = shallow(
			<Hud isPlayer={true} />
    );
    
		expect(wrapper.find('HudContainer').html().includes('User')).toBe(true)
  });
});
