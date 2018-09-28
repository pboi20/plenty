import React, { Component } from 'react';
import NumberInput from './NumberInput';
import { ML, L, Volume } from '../utils/conversion';

const unitList = [
  { code: ML, label: Volume.units[ML].label },
  { code: L, label: Volume.units[L].label },
];

class QuantityInput extends Component {
  /**
   * props
   *   name: String
   *   label: String
   *   unit: String
   *   onChange: Function
   *   onChangeUnit: Function
   */
  constructor(props) {
    super(props);
    this.handleUnit = this.handleUnit.bind(this);
  }

  handleUnit(e) {
    const { value } = e.target;
    this.props.onChangeUnit(value);
  }

  render() {
    return (
      <div>
        <NumberInput
          label={this.props.label}
          name={this.props.name}
          onChange={this.props.onChange}
        />
        <select
          name={`${this.props.name}-unit`}
          value={this.props.unit}
          onChange={this.handleUnit}
        >
          {unitList.map(unit =>
            <option key={unit.code} value={unit.code}>
              {unit.label}
            </option>
          )}
        </select>
      </div>
    );
  }
}

export default QuantityInput;
