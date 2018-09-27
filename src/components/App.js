import React, { Component } from 'react';
import ConversionForm from './ConversionForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Plenty</h1>
        </header>

        <ConversionForm />
      </div>
    );
  }
}

export default App;
