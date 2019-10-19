import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json'
import Hud from './index';

describe('Hud', () => {
  it('renders without crashing', () => {
    shallow(<Hud />);
  });

  it('matches snapshot', () => {
    const wrapper = mount(<Hud userIsCurrentPlayer={true}/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})