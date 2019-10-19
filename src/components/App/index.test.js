import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json'
import App from './index';

describe('App', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('matches snapshot', () => {
    const wrapper = mount(<App />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})