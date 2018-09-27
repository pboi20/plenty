import React, { Component } from 'react';
import { formatPrice } from '../utils/price';

class ConversionList extends Component {
  render() {
    const conversions = this.props.conversions;

    if (conversions.length) {
      return (
          <ul>
            {conversions.map((item, index) =>
              <li key={index}>
                $ {formatPrice(item.inputPrice)} for {item.inputQuantity}{item.inputUnit} =
                <b> $ {formatPrice(item.outputPrice)} </b>
                for {item.outputQuantity}{item.outputUnit}
              </li>
            )}
          </ul>
      );
    }
    return "";
  }
}

export default ConversionList;
