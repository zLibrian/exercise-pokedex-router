import React from 'react';
import { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import PokemonDetails from './pages/pokemonDetails/PokemonDetails';
import Header from './components/header/Header';
import AboutPokedex from './pages/AboutPokedex';
import './App.css';
import PageNotFound from './pages/PageNotFound';
import FavoritePokemons from './pages/favoritePokemon/FavoritePokemons';
import data from './data'

class App extends Component {
  componentDidMount() {
    let pokemonsStorage = JSON.parse(localStorage.getItem('pokemons')) || data;
    localStorage.setItem('pokemons' ,JSON.stringify(pokemonsStorage));
  }

  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/pokemonDetails/:idPokemon" component={ PokemonDetails } />
          <Route exact path="/" component={ Home } />
          <Route path="/aboutPokedex" component={ AboutPokedex } />
          <Route path="/favoritePokemons" component={ FavoritePokemons } />
          <Route component={ PageNotFound }/>
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;