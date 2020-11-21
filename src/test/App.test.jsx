/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */

import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App';
import '@testing-library/jest-dom';

/* test('renders learn react link', () => {
  const { getByText } = render(<App />);
  expect(getByText('Sorting Algorithm Visualization')).toBeInTheDocument();
  expect(true).toBeTruthy();
}); */

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Eunomia WG-Tracker/i);
  expect(linkElement).toBeInTheDocument();
});
