import React, { Component } from 'react';

class Details extends Component {
  render() {
    const { name, type, averageWeight: { value, measurementUnit }, image } = this.props.pokemon;
    return (
        <div className="pokemon">
      	<div className="pokemon-information">
        	<p> {name} </p>
        	<p> {type} </p>
          <p> {`Average weight: ${value} ${measurementUnit}`} </p>
        </div>
        <img className="pokemon-image" src={image} alt={`${name} sprite`} />
      </div>
  	);
  }
}

export default Details;
