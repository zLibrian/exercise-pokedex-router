import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './pokemon.css';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image, id } = this.props.pokemon;
    return (
      <div className="pokemon">
      	<div className="pokemon-information">
        	<p> {name} </p>
        	<p> {type} </p>
          <p> {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`} </p>
          <p> <Link to={`pokemonDetails/${id}`}>More Datails</Link> </p>
        </div>
        <img className="pokemon-image" src={image} alt={`${name} sprite`} />
      </div>
  	);
	}
}

Pokemon.propTypes = {
	pokemon: PropTypes.shape({
		name: PropTypes.string,
		type: PropTypes.string,
		averageWeight: PropTypes.shape({
			value: PropTypes.number,
			measurementUnit: PropTypes.string,
		}),
		image: PropTypes.string,
		id: PropTypes.number,
	})
}.isRequired;

export default Pokemon;
