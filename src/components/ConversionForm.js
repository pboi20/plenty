import React, { Component } from 'react';
import ConversionList from './ConversionList';
//import { ML, L, VolumeValue } from '../utils/units';

class ConversionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputUnit: 'ml',
      outputUnit: 'ml',
      inputQuantity: '',
      outputQuantity: '',
      inputPrice: '',
      conversions: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.saveConversion();
  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  calculateOutputPrice(inputPrice, inputQuantity, outputQuantity) {
    return inputPrice / inputQuantity * outputQuantity;
  }

  saveConversion() {
    this.setState((state) => {
      const inputPrice = parseFloat(state.inputPrice);
      const inputQuantity = parseFloat(state.inputQuantity);
      const outputQuantity = parseFloat(state.outputQuantity);

      if (Number.isNaN(inputPrice) ||
          Number.isNaN(inputQuantity) ||
          Number.isNaN(outputQuantity)) {
        return {};
      }

      const outputPrice =
        this.calculateOutputPrice(inputPrice, inputQuantity, outputQuantity);

      state.conversions.push({
        inputPrice: inputPrice,
        inputQuantity: inputQuantity,
        inputUnit: state.inputUnit,
        outputPrice: outputPrice,
        outputQuantity: outputQuantity,
        outputUnit: state.outputUnit,
      });
      return {conversions: state.conversions};
    });
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

        <input type="submit" value="Calculate" />
        <br/>
        <br/>

        <span>Conversions:</span>
        <ConversionList conversions={this.state.conversions}/>
      </form>
    );
  }
}

export default ConversionForm;
