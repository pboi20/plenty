import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputUnit: 'ml',
      outputUnit: 'ml',
      inputQuantity: '300',
      outputQuantity: '100',
      inputPrice: '2.99',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("handleSubmit");
  }

  handleInput(e) {
    console.log("handleInput", e.target.name);
    this.setState({ [e.target.name]: e.target.value })
  }

  formatPrice(value) {
    let price = parseFloat(value);
    price = price.toFixed(2);
    return price.toLocaleString('en-US', { minimumFractionDigits: 2 });
  }

  getOutputPrice() {
    const inputPrice = parseFloat(this.state.inputPrice);
    const inputQuantity = parseFloat(this.state.inputQuantity);
    const outputQuantity = parseFloat(this.state.outputQuantity);
    const outputPrice = inputPrice / inputQuantity * outputQuantity;
    console.log(outputPrice);
    return this.formatPrice(outputPrice);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Plenty</h1>
        </header>

        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              <span>Product Price: </span>
              <input
                type="number"
                name="inputPrice"
                value={this.state.inputPrice}
                onChange={this.handleInput}
              />
            </label>
          </div>
          <br/>

          <div>
            <label>
              <span>Product Quantity: </span>
              <input
                type="number"
                name="inputQuantity"
                value={this.state.inputQuantity}
                onChange={this.handleInput}
              />
              <span> {this.state.inputUnit}</span>
            </label>
          </div>
          <br/>

          <div>
            <label>
              <span>Base Quantity: </span>
              <input
                type="number"
                name="outputQuantity"
                value={this.state.outputQuantity}
                onChange={this.handleInput}
              />
              <span> {this.state.outputUnit}</span>
            </label>
          </div>
        </form>
        <br/>
        <br/>

        <div>
          $ {this.formatPrice(this.state.inputPrice)} for {this.state.inputQuantity}{this.state.inputUnit}
          <br/>
          <br/>
          <b>is $ {this.getOutputPrice()} for {this.state.outputQuantity}{this.state.inputUnit}</b>
        </div>
      </div>
    );
  }
}

export default App;
