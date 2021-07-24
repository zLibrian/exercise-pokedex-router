import React from 'react';
import { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
        </Switch>      
      </BrowserRouter>
      </div>
    );
  }
}

export default App;