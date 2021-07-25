import React, { Component } from 'react';
import Pokemon from '../../components/pokemon/Pokemon'; 
import './favPokemon.css';

class FavoritePokemons extends Component {
  handleFavoritePokemons() {
    const storagePokemons = JSON.parse(localStorage.getItem('pokemons'));
    const favoritePokemons = storagePokemons
      .filter((pokemon) => pokemon.favorite === true)
      .sort((pokemonA, pokemonB) => pokemonA.name < pokemonB.name ? -1 : 1);
    return (
      <div className="favPokemons">
       { favoritePokemons.map((pokemon) => <Pokemon className={"favPokemon"} pokemon={ pokemon } />) }
      </div>
    ); 
  }

  render() {
    return (
      this.handleFavoritePokemons()
    );
  }
}

export default FavoritePokemons;