import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Projects from '../Projects';

describe('Projects Component', () => {
  test('renders project title and button', () => {
    render(<Projects />);

    // Assert that the project title and button are present in the DOM
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Click on a project title to see more')).toBeInTheDocument();
    expect(screen.getByText('Authentication module')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('expands and collapses project details on button click', async () => {
    render(<Projects />);
  
    // Click on the button to expand details
    fireEvent.click(screen.getByRole('button'));
  
    // Assert that the project details are visible in the DOM
    expect(screen.getByText(/Microservice with: React | Springboot 3 | MySQL | Docker/)).toBeInTheDocument();
    expect(screen.getByText(/Developed to register and authenticate users using JWT/)).toBeInTheDocument();
    expect(screen.getByText(/for specific operations/)).toBeInTheDocument();
  
    // Click on the button to collapse details
    fireEvent.click(screen.getByRole('button'));
  
    // Assert that the project details are not visible in the DOM
    expect(screen.queryByText(/Microservice with: React | Springboot 3 | MySQL | Docker/)).toBeNull();
  });
});
