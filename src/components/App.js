import React, { Component } from 'react';
import ConversionForm from './ConversionForm';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Plenty</h1>
        </header>

        <div className="App-main">
          <ConversionForm />
        </div>
      </div>
    );
  }
}

export default App;
