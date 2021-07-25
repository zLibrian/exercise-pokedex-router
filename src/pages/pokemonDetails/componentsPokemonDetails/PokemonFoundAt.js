import React, { Component } from 'react'
import PropTypes from 'prop-types';

class PokemonFoundAt extends Component {
  render() {
    const { foundAt, moreInfo, name } = this.props.pokemon;
    return (
      <ol classname="pokemonDetails">
        { foundAt.map((locationInfo) => (
          <div className="locationDetails">
            <li>{ locationInfo.location }</li>
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
      </ol>
    );
  }
}

export default PokemonFoundAt;
