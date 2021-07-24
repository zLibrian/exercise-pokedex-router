import React from 'react';
import { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import PokemonDetails from './pages/pokemonDetails/PokemonDetails';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/pokemonDetails/:idPokemon" component={ PokemonDetails }/>
        </Switch>      
      </BrowserRouter>
      </div>
    );
  }
}

export default App;