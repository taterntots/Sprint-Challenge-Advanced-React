import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
})

test('header title renders properly', () => {
  const { getByText } = render(<App />);
  expect(getByText(/Women's World Cup/i)).toBeTruthy()
})