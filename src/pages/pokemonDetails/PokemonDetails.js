import React, { Component } from 'react';
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
      favorite: false,
    };
    this.handleFavorite = this.handleFavorite.bind(this);
  }

  componentDidMount() {
    const { match: { params: { idPokemon } } } = this.props;
    const pokemons = JSON.parse(localStorage.getItem('pokemons'));
    const pokemon = pokemons.find((pokemon) => pokemon.id === parseInt(idPokemon));
    console.log(pokemon);
    this.setState({ pokemon, loading: false, favorite: pokemon.favorite});
  }

  handleFavorite() {
    this.setState(({ favorite }) => ({
      favorite: !favorite,
    }), () => {
      const { pokemon } = this.state;
      this.handleStorage(pokemon)
    });
  }

  handleStorage(pokemoon) {
      const { favorite } = this.state;
      const pokemons = JSON.parse(localStorage.getItem('pokemons'));
      const index = pokemons.map((productvalue) => productvalue.id).indexOf(pokemoon.id);
      pokemons[index].favorite = favorite;
      localStorage.setItem('pokemons', JSON.stringify(pokemons));
    };

  renderAllDetails(pokemon) {
    const { favorite } = this.state;
    return (
      <div className="sectionFavPokemon">
        <Details pokemon={ pokemon } favoritePokemon={favorite} />
        <PokemonSummary pokemon={ pokemon } />
        <PokemonFoundAt pokemon={ pokemon } />
        <label htmlFor="favoritePokemon">
          Favorite?
          <input name="favoritePokemon" id="favoritePokemon"type="checkbox" onClick={this.handleFavorite} checked={favorite} />
        </label>
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
