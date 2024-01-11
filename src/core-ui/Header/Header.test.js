import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useNavigate: () => mockedUsedNavigate,
}));

test('renders Header component and navigates on button click', () => {
  render(<Header />);

  expect(screen.getByText('Clemente Falcone')).toBeInTheDocument();
  expect(screen.getByText('Software Engineer')).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button'));

  expect(mockedUsedNavigate).toHaveBeenCalled();

  expect(mockedUsedNavigate.mock.calls.some((call) => call[0] === '/')).toBe(true);
});

afterEach(() => {
  jest.clearAllMocks();
});
