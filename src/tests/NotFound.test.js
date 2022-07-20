import React from 'react';
import { screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';
import renderWithRouter from '../utils/renderWithRouter';

describe('Testando o componente NotFound', () => {
  it('Teste se a página contém um h2 com o texto Page requested not found ', () => {
    renderWithRouter(<NotFound />);
    const notFound = screen.getByRole('heading', {
      name: /Page requested not found/i,
      level: 2,
    });
    expect(notFound).toBeInTheDocument();
  });

  it('este se a página mostra a imagem ', () => {
    renderWithRouter(<NotFound />);
    const Image = screen.getByAltText(
      /Pikachu crying because the page requested was not found/i,
    );
    expect(Image).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
