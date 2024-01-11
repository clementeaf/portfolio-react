import React from 'react';
import { render, screen } from '@testing-library/react';
import CustomContainer from './CustomContainer';

test('renders CustomContainer with children', () => {
  // Renderiza el componente con algún contenido
  render(
    <CustomContainer>
      <p>Test Content</p>
    </CustomContainer>
  );

  // Verifica que el contenedor personalizado esté presente
  const customContainer = screen.getByTestId('custom-container'); // Asegúrate de agregar un data-testid="custom-container" en tu componente
  expect(customContainer).toBeInTheDocument();

  // Verifica que el contenido proporcionado esté presente dentro del contenedor
  const testContent = screen.getByText('Test Content');
  expect(testContent).toBeInTheDocument();
});
