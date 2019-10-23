import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json'
import Hud from './index';

describe('Hud', () => {
  test('renders without crashing', () => {
    shallow(<Hud />);
  });

  test('matches snapshot', () => {
    const wrapper = mount(<Hud userIsCurrentPlayer={true}/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})