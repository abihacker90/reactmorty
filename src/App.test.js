import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders landing page', () => {
  const { getByRole, getByAltText } = render(<App />);
  const logo = getByAltText(/Rick and Morty/i)
  const charButton = getByRole('button', {name: /characters/i});
  const locButton = getByRole('button', {name: /locations/i});
  const diver = getByRole

  expect(logo).toBeInTheDocument();
  expect(charButton).toBeInTheDocument();
  expect(locButton).toBeInTheDocument();
});
