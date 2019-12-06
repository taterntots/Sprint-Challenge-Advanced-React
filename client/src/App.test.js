import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import PlayerList from './components/PlayerList'

test('renders without crashing', () => {
  render(<App />);
})

test('header title renders properly', () => {
  const { getByText } = render(<App />);
  expect(getByText(/Women's World Cup/i)).toBeTruthy()
})

test('renders player name correctly', () => {
  expect(render(<PlayerList players={[{ name: 'Alex Morgan'}]} />).getByText('Alex Morgan'));
  expect(render(<PlayerList players={[{ name: 'Megan Rapinoe'}]} />).getByText('Megan Rapinoe'));
})

test('renders player country name correctly', () => {
  expect(render(<PlayerList players={[{ country: 'United States'}]} />).getByText('United States'));
  expect(render(<PlayerList players={[{ country: 'Sweden'}]} />).getByText('Sweden'));
})

// test('renders player search results correctly', () => {
//   expect(render(<PlayerList players={[{ searches: '99'}]} />).getByText('99'));
//   expect(render(<PlayerList players={[{ searches: '18'}]} />).getByText('18'));
// })