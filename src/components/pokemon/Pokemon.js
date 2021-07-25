import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './pokemon.css';

class Pokemon extends React.Component {
  render() {
    const { pokemon: { name, type, averageWeight, image, id, favorite }, className } = this.props;
    return (
      <div className={className}>
      	<div className="pokemon-information">
        	<p> {name} </p>
        	<p> {type} </p>
          <p> {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`} </p>
          <p> <Link to={`pokemonDetails/${id}`}>More Datails</Link> </p>
        </div>
        <img className="pokemon-image" src={image} alt={`${name} sprite`} />
				<div className="favIcon">
          {favorite && <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4gcbF95XQZIdoYdBDDTkInFK_OGyFEwVAkQ&usqp=CAU"/>}
        </div>
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
