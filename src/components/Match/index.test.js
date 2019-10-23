import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json'
import Match from './index';

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
  

});
