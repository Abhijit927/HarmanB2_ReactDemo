import React from 'react';
import { render, screen } from '@testing-library/react';
import { Reactions } from './App';

test('renders learn react link', () => {
  render(<Reactions />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
