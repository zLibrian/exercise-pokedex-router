import React, { Component } from 'react';

class Details extends Component {
  render() {
    const { name, type, averageWeight: { value, measurementUnit }, image } = this.props.pokemon;
    const { favoritePokemon } = this.props;
    return (
        <div className="pokemon">
      	<div className="pokemon-information">
        	<p> {name} </p>
        	<p> {type} </p>
          <p> {`Average weight: ${value} ${measurementUnit}`} </p>
        </div>
        <img className="pokemon-image" src={image} alt={`${name} sprite`} />
        <div className="favIcon">
          {favoritePokemon && <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4gcbF95XQZIdoYdBDDTkInFK_OGyFEwVAkQ&usqp=CAU"/>}
        </div>
      </div>
  	);
  }
}

export default Details;
