import React, { Component } from 'react';
import { formatDecimal } from '../utils/number';

class ConversionListItem extends Component {
  render() {
    const { item } = this.props;

    if (item.inputPrice && item.outputPrice) {
      return (
        <li>
          $ {formatDecimal(item.inputPrice)} for {item.inputQuantity}{item.inputUnit} =
          <b> $ {formatDecimal(item.outputPrice)} </b>
          for {item.outputQuantity}{item.outputUnit}
        </li>
      );
    } else {
      return (
        <li>
          {item.inputQuantity}{item.inputUnit} =
          <b> {formatDecimal(item.outputQuantity)}{item.outputUnit}</b>
        </li>
      );
    }
  }
}

class ConversionList extends Component {
  render() {
    const { conversions } = this.props;

    if (conversions.length) {
      return (
        <div>
          <h2>Conversions</h2>
          <ul>
            {conversions.map((item, index) =>
              <ConversionListItem key={index} item={item} />
            )}
          </ul>
        </div>
      );
    }
    return "";
  }
}

export default ConversionList;
