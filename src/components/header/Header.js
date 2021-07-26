import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

class Header extends Component {
  render() {
    return(
      <header className="header">
        <h1>Pokedex</h1>
        <nav className="navHeader">
          <p>
            <Link to="/pokedex"> Home </Link>
          </p>
          <p>
            <Link to="/pokedex/aboutPokedex"> About Pokedex </Link>
          </p>
          <p>
            <Link to="/pokedex/favoritePokemons"> Favorite Pokemons </Link>
          </p>
        </nav>
      </header>
    );
  }
}

export default Header;
