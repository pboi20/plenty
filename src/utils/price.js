export function formatPrice(value) {
  let price = value.toFixed(2);
  return price.toLocaleString('en-US', { minimumFractionDigits: 2 });
}
