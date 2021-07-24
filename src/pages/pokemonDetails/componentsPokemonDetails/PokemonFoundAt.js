import React, { Component } from 'react'

class PokemonFoundAt extends Component {
  render() {
    const mapa = this.props.pokemon.foundAt;
    return mapa.map((mapinha) => (
      <ul key={mapinha.location}>
        <li>{mapinha.location}</li>
        <img src={mapinha.map}></img >
      </ul>
    ))
  }
}

export default PokemonFoundAt
