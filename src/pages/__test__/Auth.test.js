import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Auth from '../Auth';

describe('Auth Component Tests', () => {
  test('renders Auth component', () => {
    render(<Auth />);
    // Ensure that the component renders without crashing
    expect(screen.getByText('Welcome!')).toBeInTheDocument();
  });

  test('form submission with valid fields', async () => {
    render(<Auth />);
    const submitButton = screen.getByText('Sign in');
    const userField = screen.getByLabelText('User');
    const passwordField = screen.getByLabelText('Password');

    // Fill in the form fields
    fireEvent.change(userField, { target: { value: 'testuser' } });
    fireEvent.change(passwordField, { target: { value: 'testpassword' } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Sending the request...')).toBeInTheDocument();
    });
  });
});
