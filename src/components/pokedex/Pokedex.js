import React from 'react';
import Pokemon from '../pokemon/Pokemon';
import TypePokemonButton from './TypePokemonButton';
import './pokedex.css';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonIndex: 0,
      filteredPokemons: props.pokemons,
      type: 'All',
      types: ['All'],
    };
    this.nextPokemon = this.nextPokemon.bind(this);
    this.filterPokemon = this.filterPokemon.bind(this);
    this.handleTypes = this.handleTypes.bind(this);
  };

  componentDidMount() {
    this.handleTypes();
  };

  nextPokemon() {
    const { filteredPokemons } = this.state;
    this.setState(({pokemonIndex}) => ({
      pokemonIndex: pokemonIndex < (filteredPokemons.length - 1) ? pokemonIndex + 1 : 0,
    }));
  };

  fetchFilteredPokemons(type, pokemons) {
    const filteredPokemons = pokemons.filter((pokemon) => pokemon.type === type);
    this.setState({
      filteredPokemons,
      pokemonIndex: 0,
    })
  };

  filterPokemon({target}) {
    const { innerText } = target;
    const { pokemons } = this.props;

    if (innerText === 'All') {
      this.setState({
      filteredPokemons: pokemons,
      pokemonIndex: 0,
      });
    return;
    };

    this.setState({
      type: innerText,
    }, () => {
      const { type } = this.state;
      this.fetchFilteredPokemons(type, pokemons);
    });
  }

  handleTypes() {
    const { pokemons } = this.props;
    // Remove todos os valores repetidos de um objeto iteravel e transforma-o em um array novo:
    // let pokemonsType = pokemons.map((pokemon) => pokemon.type);
    // pokemonsType = [...new Set(pokemonsType)];
    let pokemonsType = [...new Set(pokemons.map((pokemon) => pokemon.type))]; // Forma enxuta de se fazer as duas linhas acima.

    // Remove valores repetidos com ES6 puro;
    // let pokemonsType = pokemons.map((pokemon) => pokemon.name);
    // pokemonsType = pokemonsType.filter((pokemon, index) => pokemonsType.indexOf(pokemon) === index);

    this.setState(({types}) => ({
      types: [...types, ...pokemonsType]
    }));
  }

  render() {
    const { pokemonIndex, filteredPokemons, types } = this.state;
    const pokemon = filteredPokemons[pokemonIndex];
    return (
      <section className="pokedex-section">
        <div className="pokedex">
          <Pokemon key={ pokemon.id} pokemon={pokemon} className="pokemon" />
          <TypePokemonButton
            types={types}
            filterPokemons={this.filterPokemon}
            nextPokemon={this.nextPokemon}
            pokemonsLength={filteredPokemons.length}
          />
        </div>
      </section>
    );
  }
}

export default Pokedex;