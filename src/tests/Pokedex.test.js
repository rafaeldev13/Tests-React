import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Teste o componente <Pokedex.js />', () => {
  it('Teste se a página contém um heading h2 com o texto Encountered pokémons', () => {
    render(<MemoryRouter><App /></MemoryRouter>);

    const h2 = screen.getByRole('heading', {
      name: /Encountered pokémons/i,
      level: 2,
    });

    expect(h2).toBeInTheDocument();
  });

  it('Teste se é exibido o próximo pokémon quando o botão Próximo é clicado', () => {
    render(<MemoryRouter><App /></MemoryRouter>);

    const button = screen.getByText('Próximo pokémon');

    userEvent.click(button);
    const text1 = screen.getByText('Charmander');
    expect(text1).toBeInTheDocument();

    userEvent.click(button);
    const text2 = screen.getByText('Caterpie');
    expect(text2).toBeInTheDocument();
  });

  it('Teste se a Pokédex tem os botões de filtro:', () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const button = 7;
    const filterButton = screen.getAllByTestId('pokemon-type-button');
    expect(filterButton).toHaveLength(button);
  });

  it('Teste se a Pokédex contém um botão para resetar o filtro', () => {
    render(<MemoryRouter><App /></MemoryRouter>);

    const psychicBttn = screen.getByText('Psychic');
    userEvent.click(psychicBttn);

    const resetBttn = screen.getByText('All');
    userEvent.click(resetBttn);

    const pikachu = screen.getByText('Pikachu');
    expect(pikachu).toBeInTheDocument();
  });
});
