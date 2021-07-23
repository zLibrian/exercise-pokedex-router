import React from 'react';
import './pokemon.css';

class Pokemon extends React.Component {
    render() {
        const { name, type, averageWeight, image } = this.props.pokemon;

        return (
            <div className="pokemon">
                <div className="pokemon-information">
                    <p> {name} </p>
                    <p> {type} </p>
                    <p> {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
                </div>
                <img className="pokemon-image" src={image} alt={`${name} sprite`} />
            </div>
        );
    }
}

export default Pokemon;