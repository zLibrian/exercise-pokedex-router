import React, { Component } from 'react';
import Button from '../genericComponents/Button/Button';

class TypePokemonButton extends Component {
  typePokemonButton(type) {
    const { filterPokemons } = this.props
    return (
      <Button
        onClick={ filterPokemons }
        text={ type }
        buttonClass="filterPokemons"
        key={ type }
      />
    );
  }

  render() {
    const { types, nextPokemon, pokemonsLength } = this.props;
    return (
      <div className="buttonsSection">
        <section className="filter-pokemons-button">
          {types.map((type) => this.typePokemonButton(type))}
        </section>
        <Button
          onClick={ nextPokemon }
          text="Next Pokemon"
          pokemonsLength={pokemonsLength}
          buttonClass="nextPokemon"
        />
      </div>
    );
  }
};

export default TypePokemonButton;
