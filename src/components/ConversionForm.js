import React, { Component } from 'react';
//import { ML, L, VolumeValue } from '../utils/units';

class ConversionForm extends Component {
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
  }

  handleInput(e) {
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
    return this.formatPrice(outputPrice);
  }

  render() {
    return (
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

        <br/>
        <br/>

        <div>
          $ {this.formatPrice(this.state.inputPrice)} for {this.state.inputQuantity}{this.state.inputUnit}
          <br/>
          <br/>
          <b>is $ {this.getOutputPrice()} for {this.state.outputQuantity}{this.state.inputUnit}</b>
        </div>
      </form>
    );
  }
}

export default ConversionForm;
