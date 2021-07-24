import React, { Component } from 'react';
import pokemons from '../../data';
import Details from './componentsPokemonDetails/Details';
import PokemonFoundAt from './componentsPokemonDetails/PokemonFoundAt';
import PokemonSummary from './componentsPokemonDetails/PokemonSummary';
import './pokemonDetails.css';

class PokemonDetails extends Component {
  constructor(props) {
    super(props);
    this.state ={
      pokemon: {},
      loading: true,
    };
  }

  componentDidMount() {
    const { match: { params: { idPokemon } } } = this.props;
    const pokemon = pokemons.find((pokemon) => pokemon.id === parseInt(idPokemon));
    console.log(pokemon)
    this.setState({ pokemon, loading: false});
  }

  renderAllDetails(pokemon) {
    return (
      <div>
        <Details pokemon={ pokemon } />
        <PokemonSummary pokemon={ pokemon } />
        <PokemonFoundAt pokemon={ pokemon } />
      </div>
    );
  }

  render() {
    const { pokemon, loading } = this.state;
    return (
      <div className="pokemonDetails">
       {loading ? <p>Loading Pokemon Info</p> : this.renderAllDetails(pokemon)}
      </div>
  	);
	}
}

export default PokemonDetails;
