import React, { Component } from 'react';
import FormField from './FormField';
import NumberInput from './NumberInput';
import Select from './Select';
import Button from './Button';
import ConversionList from './ConversionList';
import { ML, MG, Volume, VolumeValue, Weight, WeightValue } from '../utils/conversion';

import './Flex.css';
import './ConversionForm.css';

const VOLUME = 'Volume';
const volumeUnits = Object.keys(Volume.units).sort();
const volumeChoices = volumeUnits.map(item => [item, Volume.units[item].label]);

const WEIGHT = 'Weight';
const weightUnits = Object.keys(Weight.units).sort();
const weightChoices = weightUnits.map(item => [item, Weight.units[item].label]);

const typeChoices = [
  [VOLUME, VOLUME],
  [WEIGHT, WEIGHT],
];

const typeUnitChoices = {
  [VOLUME]: volumeChoices,
  [WEIGHT]: weightChoices,
};

const typeValueClasses = {
  [VOLUME]: VolumeValue,
  [WEIGHT]: WeightValue,
};

const defaultUnits = {
  [VOLUME]: ML,
  [WEIGHT]: MG,
};

class ConversionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      unitType: VOLUME,
      inputUnit: defaultUnits[VOLUME],
      outputUnit: defaultUnits[VOLUME],
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
    this.handleInputUnitType = this.handleInputUnitType.bind(this);
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

  handleInputUnitType(value) {
    this.setState({
      unitType: value,
      inputUnit: defaultUnits[value],
      outputUnit: defaultUnits[value],
    });
  }

  convertPriceForQuantity() {
    const {
      inputPrice, inputQuantity, inputUnit, outputQuantity, outputUnit, unitType
    } = this.state;
    const inputValueClass = typeValueClasses[unitType];
    const inputValue = new inputValueClass(inputUnit, inputQuantity);
    const conversionQuantity = inputValue.convertValue(outputUnit);
    const outputPrice = inputPrice / conversionQuantity * outputQuantity;
    this.addConversion({
      inputPrice, inputQuantity, inputUnit, outputPrice, outputQuantity, outputUnit
    });
  }

  convertQuantity() {
    const { inputQuantity, inputUnit, outputUnit, unitType } = this.state;
    const inputValueClass = typeValueClasses[unitType];
    const inputValue = new inputValueClass(inputUnit, inputQuantity);
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
      <div>
        <form className="ConversionForm" onSubmit={this.handleSubmit}>
          <div className="Row Row--small">
            <div className="Col">
              <FormField label="Conversion" name="unitType">
                <Select
                  name="unitType"
                  value={this.state.unitType}
                  choices={typeChoices}
                  onChange={this.handleInputUnitType}
                />
              </FormField>

              <FormField label="Product Price" name="inputPrice">
                <NumberInput
                  name="inputPrice"
                  onChange={this.handleInputPrice}
                />
              </FormField>
            </div>

            <div className="Col">
              <FormField label="Product Quantity" name="inputQuantity">
                <div className="Row">
                  <div className="Col padding-0">
                    <NumberInput
                      name="inputQuantity"
                      onChange={this.handleInputQuantity}
                      required
                    />
                  </div>
                  <div className="Col padding-0 ConversionForm-inputUnitCol">
                    <Select
                      name="inputUnit"
                      value={this.state.inputUnit}
                      choices={typeUnitChoices[this.state.unitType]}
                      onChange={this.handleInputUnit}
                    />
                  </div>
                </div>
              </FormField>

              <FormField label="Base Quantity" name="outputQuantity">
                <div className="Row">
                  <div className="Col padding-0">
                    <NumberInput
                      name="outputQuantity"
                      onChange={this.handleOutputQuantity}
                      required={this.state.inputPrice !== null}
                    />
                  </div>
                  <div className="Col padding-0 ConversionForm-outputUnitCol">
                    <Select
                      name="outputUnit"
                      value={this.state.outputUnit}
                      choices={typeUnitChoices[this.state.unitType]}
                      onChange={this.handleOutputUnit}
                    />
                  </div>
                </div>
              </FormField>
            </div>
          </div>

          <div className="Row Row--end ConversionForm-actions">
            <Button type="submit" value="Convert" />
          </div>
        </form>

        <ConversionList conversions={this.state.conversions}/>
      </div>
    );
  }
}

export default ConversionForm;
