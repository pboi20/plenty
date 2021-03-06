import React, { Component } from 'react';

import './Select.css';

class Select extends Component {
  /**
   * props
   *   name: String
   *   value: String
   *   choices: Array
   *   onChange: Function
   *   extraClass: String
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
    const className = [
      'Select',
      this.props.extraClass || '',
    ].join(' ');

    return (
      <select
        className={className}
        name={this.props.name}
        value={this.props.value}
        onChange={this.handleChange}
      >
        {this.props.choices.map(choice =>
          <option key={choice[0]} value={choice[0]}>
            {choice[1]}
          </option>
        )}
      </select>
    );
  }
}

export default Select;
