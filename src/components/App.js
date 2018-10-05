import React, { Component } from 'react';
import ConversionForm from './ConversionForm';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-container">
            <h1 className="App-title">Plenty</h1>
            <span className="App-subtitle">Convert price per quantity</span>
          </div>
        </header>

        <div className="App-main">
          <div className="App-container App-container--narrow">
            <ConversionForm />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
