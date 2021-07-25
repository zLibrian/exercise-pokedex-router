import React, { Component } from 'react';
import Pokedex from '../components/pokedex/Pokedex';
import data from '../data';


class Home extends Component {
  render() {
    const pokemons = JSON.parse(localStorage.getItem('pokemons')) || data;
    return (
      <Pokedex pokemons={ pokemons } />
    );
  }
}

export default Home;
