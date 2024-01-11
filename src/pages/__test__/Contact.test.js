import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from '../Contact';

test('renders Contact component with correct content', () => {
  render(<Contact />);

  const contactText = screen.getByText('Contact');

  expect(contactText).toBeInTheDocument();
});
