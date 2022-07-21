import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../utils/renderWithRouter';
import App from '../App';

describe('Teste o componente <Pokemon.js', () => {
  test('Teste se é renderizado um card com as informações de determinado pokémon', () => {
    renderWithRouter(<App />);
    const pokemonName = screen.getByText(/pikachu/i);
    expect(pokemonName).toBeInTheDocument();

    const pokemonType = screen.getByTestId('pokemon-type');
    expect(pokemonType).toHaveTextContent(/electric/i);

    const pokemonWeight = screen.getByText(/average weight: /i);
    expect(pokemonWeight).toBeInTheDocument();

    const pokemonImg = screen.getByRole('img', { name: /pikachu sprite/i });
    expect(pokemonImg).toBeInTheDocument();

    const nextPokemon = screen.getByRole('button', { name: /próximo pokémon/i });
    userEvent.click(nextPokemon);
    const nextPokemonImg = screen.getByRole('img', { name: /charmander sprite/i });
    expect(nextPokemonImg).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/0a/Spr_5b_004.png');
  });

  test('Link para detalhes do pokemon', () => {
    const { history } = renderWithRouter(<App />);
    const pokemonName = screen.getByText(/pikachu/i);
    expect(pokemonName).toBeInTheDocument();

    const linkPokemonDetail = screen.getByRole('link', { name: /more details/i });
    expect(linkPokemonDetail).toBeInTheDocument();
    userEvent.click(linkPokemonDetail);
    const { pathname } = history.location;
    expect(pathname).toBe('/pokemons/25');
  });

  test('O ícone da imagem de favoritos deve estar correto', () => {
    renderWithRouter(<App />);
    const pokemonName = screen.getByText(/pikachu/i);
    expect(pokemonName).toBeInTheDocument();
    const linkPokemonDetail = screen.getByRole('link', { name: /more details/i });
    userEvent.click(linkPokemonDetail);
    const favCheck = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    userEvent.click(favCheck);

    const pokemonImg = screen.getByRole('img',
      { name: /pikachu is marked as favorite/i });
    expect(pokemonImg).toBeInTheDocument();
    expect(pokemonImg).toHaveAttribute('src', '/star-icon.svg');
  });
});
