import React, { Component } from 'react';
import { stringToNumber } from '../utils/number';

class NumberInput extends Component {
  /**
   * props
   *   name: String
   *   label: String
   *   onChange: Function
   *   required: Boolean
   */
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    const { value } = e.target;
    this.setState({ value });
    const floatValue = stringToNumber(value);
    this.props.onChange(floatValue);
  }

  render() {
    return (
      <label>
        <span>{this.props.label}: </span>
        <input
          type="number"
          name={this.props.name}
          value={this.state.value}
          onChange={this.handleInput}
          required={this.props.required}
        />
      </label>
    );
  }
}

export default NumberInput;
