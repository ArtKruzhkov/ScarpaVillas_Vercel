import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the landing page hero headline', () => {
  render(<App />);
  expect(
    screen.getByText(/Stay among the vineyards of Monvigliero/i)
  ).toBeInTheDocument();
});
