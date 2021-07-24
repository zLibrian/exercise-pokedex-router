import React, { Component } from 'react'

class PokemonSummary extends Component {
  render() {
    const { pokemon: { summary } } = this.props;
    return (
      <p>{summary}</p>
    );
  }
}

export default PokemonSummary;
