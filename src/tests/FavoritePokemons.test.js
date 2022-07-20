import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../utils/renderWithRouter';
import FavoritePokemons from '../pages/FavoritePokemons';
import App from '../App';

describe('Testando o componente FavoritePokemons', () => {
  it('teste se é exibida No favorite pokemon found, ', () => {
    renderWithRouter(<FavoritePokemons />);
    const noFavorite = screen.getByText(/No favorite pokemon found/i);
    expect(noFavorite).toBeDefined();
  });

  it('Teste se são exibidos todos os cards de pokémons favoritados', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/pokemons/4');
    const Button = screen.getByRole('checkbox');
    userEvent.click(Button);
    history.push('/favorites');
    const favoritePokemon = screen.getByText(/Charmander/i);
    expect(favoritePokemon).toBeInTheDocument();
  });
});
