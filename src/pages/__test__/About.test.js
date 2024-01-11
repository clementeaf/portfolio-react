import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../About';

test('renders About component with correct content', () => {
  render(<About />);

  // Test for the "Brief Resume" section
  const briefResumeTitle = screen.getByText('Brief Resume');
  const briefResumeContent = screen.getByText(
    'Self-taught 32-year-old software engineer, highly focused on resolving ' +
      'requirements through efficient, readable code geared towards ' +
      'satisfying companies and clients.'
  );

  expect(briefResumeTitle).toBeInTheDocument();
  expect(briefResumeContent).toBeInTheDocument();

  // Test for the "Tech Stacks" section
  const techStacksTitle = screen.getByText('Tech Stacks');
  const techStacksContent = screen.getByText('JavaScript | Java | SQL | NoSQL');

  expect(techStacksTitle).toBeInTheDocument();
  expect(techStacksContent).toBeInTheDocument();
});

test('renders About component with correct styling', () => {
  render(<About />);

  // Test styling for "Brief Resume" section
  const briefResumeTitle = screen.getByText('Brief Resume');
  const briefResumeContent = screen.getByText(
    'Self-taught 32-year-old software engineer, highly focused on resolving ' +
      'requirements through efficient, readable code geared towards ' +
      'satisfying companies and clients.'
  );

  expect(briefResumeTitle).toHaveClass('text-[25px] tracking-[15px] pb-5');
  expect(briefResumeContent).toHaveClass('w-[350px] lg:w-[800px]');

  // Test styling for "Tech Stacks" section
  const techStacksTitle = screen.getByText('Tech Stacks');
  const techStacksContent = screen.getByText('JavaScript | Java | SQL | NoSQL');

  expect(techStacksTitle).toHaveClass('text-[25px] tracking-[15px] pb-5');
});
