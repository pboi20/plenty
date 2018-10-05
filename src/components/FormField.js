import React, { Component } from 'react';

import './FormField.css';

class FormField extends Component {
  /**
   * props
   *   name: String
   *   label: String
   *   multi: Boolean
   */

  render() {
    const className = [
      'FormField',
      this.props.multi ? 'FormField--multi' : ''
    ].join(' ');

    return (
      <div className={className}>
        <label className="FormField-label" htmlFor={this.props.name}>
          {this.props.label}
        </label>
        {this.props.children}
      </div>
    );
  }
}

export default FormField;
