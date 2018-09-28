export function formatPrice(value) {
  let price = value.toFixed(2);
  return price.toLocaleString('en-US', { minimumFractionDigits: 2 });
}

export function stringToNumber(value) {
  let floatValue = parseFloat(value);
  if (Number.isNaN(floatValue)) {
    floatValue = null;
  }
  return floatValue;
}
