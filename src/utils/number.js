export function formatDecimal(value, precision=2) {
  let price = value.toFixed(precision);
  return price.toLocaleString('en-US', { minimumFractionDigits: precision });
}

export function stringToNumber(value) {
  let floatValue = parseFloat(value);
  if (Number.isNaN(floatValue)) {
    floatValue = null;
  }
  return floatValue;
}
