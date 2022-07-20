import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import App from '../App';

describe('Arquivo App:',
  () => {
    it('verifica se contém um conjunto fixo de links de navegação):',
      () => {
        render(<BrowserRouter><App /></BrowserRouter>);
        const Home = screen.getByRole('link', { name: 'Home' });
        const About = screen.getByRole('link', { name: 'About' });
        const Favorite = screen.getByRole('link', { name: 'Favorite Pokémons' });
        expect(Home).toBeInTheDocument();
        expect(About).toBeInTheDocument();
        expect(Favorite).toBeInTheDocument();
      });
  });
