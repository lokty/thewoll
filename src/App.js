import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={ logo } className="logo" />
      </div>
    );
  }
}

export default App;
