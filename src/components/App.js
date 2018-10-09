import React, { Component } from 'react';
import ConversionForm from './ConversionForm';
import ConversionList from './ConversionList';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      conversions: [],
    };

    this.handleAddConversion = this.handleAddConversion.bind(this);
  }

  handleAddConversion(data) {
    this.setState(previousState => {
      let { conversions } = previousState;
      conversions.push(data);
      return { conversions };
    });
  }

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
            <ConversionForm onAddConversion={this.handleAddConversion} />
            <ConversionList conversions={this.state.conversions} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
