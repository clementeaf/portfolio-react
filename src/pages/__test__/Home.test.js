import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../Home';

describe('Home Component', () => {
  test('renders welcome messages', () => {
    render(<Home />);

    // Assert that the welcome messages are present in the DOM
    expect(screen.getByText('Welcome,')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Explore a curated collection of ideas, projects, and insights from my recent personal work.'
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'These endeavors reflect my unwavering commitment to continuous exploration, growth, and self-testing.'
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Feel free to delve into the details, ask questions, and get in touch.'
      )
    ).toBeInTheDocument();
  });
});
