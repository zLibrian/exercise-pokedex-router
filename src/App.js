import React from 'react';
import { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import pokemons from './data';
import Pokedex from './components/pokedex/Pokedex';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main className="main-content">
        <Header />
        <Pokedex pokemons={ pokemons } />
        </main>
      </div>
    );
  }
}

export default App;