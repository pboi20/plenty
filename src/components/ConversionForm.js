import React, { Component } from 'react';
import NumberInput from './NumberInput';
import QuantityInput from './QuantityInput';
import ConversionList from './ConversionList';
import { ML } from '../utils/conversion';

class ConversionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputUnit: ML,
      outputUnit: ML,
      inputQuantity: null,
      outputQuantity: null,
      inputPrice: null,
      conversions: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputPrice = this.handleInputPrice.bind(this);
    this.handleInputQuantity = this.handleInputQuantity.bind(this);
    this.handleInputUnit = this.handleInputUnit.bind(this);
    this.handleOutputQuantity = this.handleOutputQuantity.bind(this);
    this.handleOutputUnit = this.handleOutputUnit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const { inputPrice, inputQuantity, outputQuantity } = this.state;
    const hasPrice = inputPrice !== null;
    const hasQuantity = inputQuantity !== null && outputQuantity !== null;

    if (hasPrice && hasQuantity) {
      this.convertPriceForQuantity();
    } else if (hasQuantity) {
      this.convertQuantity();
    } else {
      console.log("Error: Need at least 2 quantities to convert");
    }
  }

  handleInputPrice(value) {
    this.setState({ inputPrice: value });
  }

  handleInputQuantity(value) {
    this.setState({ inputQuantity: value });
  }

  handleInputUnit(value) {
    this.setState({ inputUnit: value });
  }

  handleOutputQuantity(value) {
    this.setState({ outputQuantity: value });
  }

  handleOutputUnit(value) {
    this.setState({ outputUnit: value });
  }

  calculateOutputPrice(inputPrice, inputQuantity, outputQuantity) {
  }

  convertPriceForQuantity() {
    console.log("convertPriceForQuantity");
  }

  convertQuantity() {
    console.log("convertQuantity");
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <NumberInput
            label="Product Price"
            name="inputPrice"
            onChange={this.handleInputPrice}
          />
        </div>
        <div>
          <QuantityInput
            label="Product Quantity"
            name="inputQuantity"
            unit={this.state.inputUnit}
            onChange={this.handleInputQuantity}
            onChangeUnit={this.handleInputUnit}
          />
        </div>
        <div>
          <QuantityInput
            label="Base Quantity"
            name="outputQuantity"
            unit={this.state.outputUnit}
            onChange={this.handleOutputQuantity}
            onChangeUnit={this.handleOutputUnit}
          />
        </div>
        <br/>

        <input type="submit" value="Convert" />
        <br/>
        <br/>

        <ConversionList conversions={this.state.conversions}/>
      </form>
    );
  }
}

export default ConversionForm;
