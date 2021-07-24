import React, { Component } from 'react';
import Pokedex from '../components/pokedex/Pokedex';
import Header from '../components/header/Header';
import pokemons from '../data';


class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <Pokedex pokemons={ pokemons } />
      </>
    );
  }
}

export default Home;
