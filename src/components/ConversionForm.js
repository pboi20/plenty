import React, { Component } from 'react';
import NumberInput from './NumberInput';
import Select from './Select';
import ConversionList from './ConversionList';
import {
  ML, L, TSP, TBSP, MG, G, Volume, VolumeValue, Weight, WeightValue
} from '../utils/conversion';

const defaultUnit = ML;

const volumeUnits = [ML, L, TSP, TBSP];
const volumeChoices = volumeUnits.map(item => [item, Volume.units[item].label]);

const weightUnits = [MG, G];
const weightChoices = weightUnits.map(item => [item, Weight.units[item].label]);

class ConversionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputUnit: defaultUnit,
      outputUnit: defaultUnit,
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
    const hasInputQuantity = inputQuantity !== null;
    const hasQuantities = inputQuantity !== null && outputQuantity !== null;

    if (hasPrice && hasQuantities) {
      this.convertPriceForQuantity();
    } else if (hasInputQuantity) {
      this.convertQuantity();
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

  convertPriceForQuantity() {
    const {
      inputPrice, inputQuantity, inputUnit, outputQuantity, outputUnit
    } = this.state;
    const inputValue = new VolumeValue(inputUnit, inputQuantity);
    const conversionQuantity = inputValue.convertValue(outputUnit);
    const outputPrice = inputPrice / conversionQuantity * outputQuantity;
    this.addConversion({
      inputPrice, inputQuantity, inputUnit, outputPrice, outputQuantity, outputUnit
    });
  }

  convertQuantity() {
    const { inputQuantity, inputUnit, outputUnit } = this.state;
    const inputValue = new VolumeValue(inputUnit, inputQuantity);
    const outputQuantity = inputValue.convertValue(outputUnit);
    this.addConversion({ inputQuantity, inputUnit, outputQuantity, outputUnit });
  }

  addConversion(data) {
    this.setState(previousState => {
      let { conversions } = previousState;
      conversions.push(data);
      return { conversions };
    });
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
          <NumberInput
            label="Product Quantity"
            name="inputQuantity"
            onChange={this.handleInputQuantity}
            required
          />
          <Select
            name="inputUnit"
            value={this.state.inputUnit}
            choices={volumeChoices}
            onChange={this.handleInputUnit}
          />
        </div>
        <div>
          <NumberInput
            label="Base Quantity"
            name="outputQuantity"
            onChange={this.handleOutputQuantity}
            required={this.state.inputPrice !== null}
          />
          <Select
            name="outputUnit"
            value={this.state.outputUnit}
            choices={volumeChoices}
            onChange={this.handleOutputUnit}
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
