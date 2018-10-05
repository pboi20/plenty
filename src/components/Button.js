import React, { Component } from 'react';

import './Button.css';

class Button extends Component {
  /**
   * props
   *   type: String
   *   value: String
   *   onClick: Function
   */
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { value } = e.target;
    if (this.props.onClick) {
      this.props.onClick(value);
    }
  }

  render() {
    return (
      <button
        className="Button"
        type={this.props.type}
        value={this.props.value}
        onClick={this.handleClick}
      >
        {this.props.children || this.props.value}
      </button>
    );
  }
}

export default Button;
