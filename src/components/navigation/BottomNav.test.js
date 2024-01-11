import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import BottomNav from './BottomNav';

test('renders BottomNav component with correct routes', () => {
  render(
    <MemoryRouter>
      <BottomNav />
    </MemoryRouter>
  );

  const projectsButton = screen.getByText('Projects');
  const aboutButton = screen.getByText('About');
  const contactButton = screen.getByText('Contact');

  expect(projectsButton).toBeInTheDocument();
  expect(aboutButton).toBeInTheDocument();
  expect(contactButton).toBeInTheDocument();

  userEvent.click(projectsButton);
  expect(screen.getByText('Projects').closest('a')).toHaveAttribute('href', '/projects');

  userEvent.click(aboutButton);
  expect(screen.getByText('About').closest('a')).toHaveAttribute('href', '/about');

  userEvent.click(contactButton);
  expect(screen.getByText('Contact').closest('a')).toHaveAttribute('href', '/contact');
});
