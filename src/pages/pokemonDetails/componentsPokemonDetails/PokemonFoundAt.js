import React, { Component } from 'react'
import PropTypes from 'prop-types';

class PokemonFoundAt extends Component {
  render() {
    const { pokemon: { foundAt, moreInfo, name } } = this.props;
    return (
      <section classname="pokemonDetails">
        { foundAt.map((locationInfo) => (
          <div className="locationDetails">
            <p>{ locationInfo.location }</p>
            <img
              src={ locationInfo.map }
              alt={ `${locationInfo.location} map` }
            />
          </div>
        ))}
        <a
          className="aboutPokemon"
          href={ moreInfo }
          target="_blank"
          rel="noopener noreferrer"
        >
          Everything about {name}
        </a>
      </section>
    );
  }
}

export default PokemonFoundAt;
