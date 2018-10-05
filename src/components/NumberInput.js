import React, { Component } from 'react';
import { stringToNumber } from '../utils/number';

import './NumberInput.css';

class NumberInput extends Component {
  /**
   * props
   *   name: String
   *   label: String
   *   onChange: Function
   *   required: Boolean
   *   extraClass: String
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
    const className = [
      'NumberInput',
      this.props.extraClass || '',
    ].join(' ');

    return (
      <input
        type="number"
        className={className}
        id={this.props.name}
        name={this.props.name}
        value={this.state.value}
        onChange={this.handleInput}
        required={this.props.required}
      />
    );
  }
}

export default NumberInput;
