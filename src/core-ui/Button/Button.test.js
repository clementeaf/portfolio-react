import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from './Button'

test('renders Button component with correct props', () => {
  const children = 'Button'
  render(<Button children={children} />)
  expect(screen.getByText(children)).toBeInTheDocument()
})
