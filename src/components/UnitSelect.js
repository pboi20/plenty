import React, { Component } from 'react';
import { ML, L, Volume } from '../utils/conversion';

const unitList = [
  { code: ML, label: Volume.units[ML].label },
  { code: L, label: Volume.units[L].label },
];

class UnitSelect extends Component {
  /**
   * props
   *   name: String
   *   value: String
   *   onChange: Function
   */
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { value } = e.target;
    this.props.onChange(value);
  }

  render() {
    return (
      <select
        name={this.props.name}
        value={this.props.value}
        onChange={this.handleChange}
      >
        {unitList.map(unit =>
          <option key={unit.code} value={unit.code}>
            {unit.label}
          </option>
        )}
      </select>
    );
  }
}

export default UnitSelect;
