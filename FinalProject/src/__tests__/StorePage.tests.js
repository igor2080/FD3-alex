"use strict"

import React from 'react';
import renderer from "react-test-renderer";
import { BrowserRouter } from 'react-router-dom';

import StorePage from '../pages/StorePage';
import { enableFetchMocks } from 'jest-fetch-mock'

test("StorePage to have an initial page count of 1", () => {

  const localStorageMock = {
    getItem: jest.fn(() => null),
    setItem: jest.fn(),
    clear: jest.fn()
  };
  global.localStorage = localStorageMock;
  enableFetchMocks()
  const component = renderer.create(
    <BrowserRouter>
      <StorePage match={{ params: { page: 1 } }} />
    </BrowserRouter>
  );
  let componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();
})
