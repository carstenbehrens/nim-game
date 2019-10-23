import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Match from './index';
import { MatchContainer, MatchStick } from './style';

describe('Match', () => {
	test('renders without crashing', () => {
		shallow(<Match />);
	});

	test('matches snapshot', () => {
		const wrapper = mount(
			<Match visible={true} key={0} matchNumber={1} onClick={() => null} />
		);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	test('onClick gets called with the correct number', () => {
		MatchContainer.displayName = 'MatchContainer';

		const handleClickMatch = jest.fn();

		const wrapper = shallow(<Match number={1} onClick={handleClickMatch} />);
		wrapper.find('MatchContainer').simulate('click');

		expect(handleClickMatch).toHaveBeenCalledWith(1);
	});

	test('visibility gets passed down', () => {
    MatchContainer.displayName = 'MatchContainer';
		MatchStick.displayName = 'MatchStick';

		const wrapper = shallow(<Match visible={false} />);

    expect(wrapper.find('MatchStick').props()).toEqual({ visible: false });
	});
});
