import React, { Component } from 'react';

class NumberInput extends Component {
  /**
   * props
   *   name: String
   *   label: String
   *   onChange: Function
   */
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    const { value } = e.target;
    this.setState({ value });

    let floatValue = parseFloat(value);
    if (Number.isNaN(floatValue)) {
      floatValue = null;
    }
    this.props.onChange(floatValue);
  }

  render() {
    return (
      <div>
        <label>
          <span>{this.props.label}: </span>
          <input
            type="number"
            name={this.props.name}
            value={this.state.value}
            onChange={this.handleInput}
          />
        </label>
      </div>
    );
  }
}

export default NumberInput;
