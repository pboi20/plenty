import { formatDecimal, stringToNumber } from './number';

it('formats decimal values', () => {
  expect(formatDecimal(23.4567)).toEqual('23.46');
  expect(formatDecimal(-98.765)).toEqual('-98.77');
  expect(formatDecimal(123456789)).toEqual('123456789.00');
});

it('converts number strings to numbers', () => {
  expect(stringToNumber('12.345')).toEqual(12.345);
});

it('converts invalid number strings to null', () => {
  expect(stringToNumber('hello')).toEqual(null);
});
