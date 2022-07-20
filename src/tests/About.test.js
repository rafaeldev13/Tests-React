import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../pages/About';

describe('Testa o componente <About.js />', () => {
  it('Teste se a página contém informações sobre a Pokedex', () => {
    render(<About />);

    const text1 = screen.getByText(/This application simulates a Pokédex/i);
    expect(text1).toBeInTheDocument();
  });

  it('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
    render(<About />);

    const title = screen.getByRole('heading', {
      name: /about pokédex/i,
      level: 2,
    });
    expect(title).toBeInTheDocument();
  });

  it('Teste se a página contém dois parágrafos com infos da pokédex', () => {
    render(<About />);

    const text1 = screen.getByText(/This application simulates a Pokédex/i);
    const text2 = screen.getByText(/One can filter Pokémons by type/i);

    expect(text1).toBeInTheDocument();
    expect(text2).toBeInTheDocument();
  });

  it('Teste se a página contém a imagem de uma pokédex', () => {
    render(<About />);

    const pokedexImage = screen.getByRole('img');
    expect(pokedexImage).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
