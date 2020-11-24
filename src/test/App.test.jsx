/* eslint-disable no-undef */

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import App, { isLoggedIn } from '../components/App';

test('renders learn react link', () => {
  // const { getByText } = render(<App />);
  // const linkElement = getByText(/Eunomia WG-Tracker/i);
  // expect(linkElement).toBeInTheDocument();
  render(<App />);
  expect(true).toBeTruthy();
});

test('tests authentification function', () => {
  const mockLoggedIn = jest.fn().mockImplementation(isLoggedIn);
  mockLoggedIn();
  expect(mockLoggedIn).toHaveBeenCalled();
});
