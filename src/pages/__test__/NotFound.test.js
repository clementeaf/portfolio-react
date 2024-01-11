import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '../NotFound';

describe('NotFound Component', () => {
  test('renders "NotFound" message', () => {
    render(<NotFound />);

    // Assert that the "NotFound" message is present in the DOM
    expect(screen.getByText('NotFound')).toBeInTheDocument();
  });
});
