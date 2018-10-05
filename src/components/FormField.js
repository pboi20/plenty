import React, { Component } from 'react';

import './FormField.css';

class FormField extends Component {
  /**
   * props
   *   name: String
   *   label: String
   */

  render() {
    return (
      <div className="FormField">
        <label className="FormField-label" htmlFor={this.props.name}>
          {this.props.label}
        </label>
        {this.props.children}
      </div>
    );
  }
}

export default FormField;
