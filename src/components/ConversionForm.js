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
    console.log("handleSubmit");
  }

  handleInputPrice(value) {
    this.setState({ inputPrice: value });
    console.log("handleInputPrice, value=", value);
  }

  handleInputQuantity(value) {
    this.setState({ inputQuantity: value });
    console.log("handleInputQuantity, value=", value);
  }

  handleInputUnit(value) {
    this.setState({ inputUnit: value });
    console.log("handleInputUnit, value=", value);
  }

  handleOutputQuantity(value) {
    this.setState({ outputQuantity: value });
    console.log("handleOutputQuantity, value=", value);
  }

  handleOutputUnit(value) {
    this.setState({ outputUnit: value });
    console.log("handleOutputUnit, value=", value);
  }

  calculateOutputPrice(inputPrice, inputQuantity, outputQuantity) {
  }

  saveConversion() {
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
