import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Counter Example</h1>
        </header>
        <p className="App-intro">
          We will build our counter here 
        </p>
      </div>
    );
  }
}

export default App;
