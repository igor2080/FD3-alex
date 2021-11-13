"use strict"

import React from 'react';
import renderer from "react-test-renderer";
import Enzyme, { shallow, render, mount } from 'enzyme';

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import StorePage from '../pages/StorePage';

configure({ adapter: new Adapter() });

test("StorePage to have an initial page count of 1", () => {
    const wrapper = mount(<StorePage />);
    expect(wrapper.instance().state.currentPageNumber).toBe(1);    
})
