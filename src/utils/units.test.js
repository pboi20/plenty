import { ML, L, Volume, MG, G, Weight } from './units';

it('does volume conversions', () => {
  let v = new Volume(ML, 300);
  expect(v.convertTo(L)).toEqual(0.3);

  v = new Volume(L, 2.5);
  expect(v.convertTo(ML)).toEqual(2500);

  v = new Volume(L, 18);
  expect(v.convertTo(L)).toEqual(18);
});

it('rejects invalid volume unit', () => {
  expect(() => {
    const invalid = new Volume(G, 10);
  }).toThrow(/^Invalid volume unit/);

  const v = new Volume(ML, 10);
  expect(() => {
    const result = v.convertTo(G);
  }).toThrow(/^Invalid volume unit/);
});

it('does weight conversions', () => {
  let w = new Weight(MG, 300);
  expect(w.convertTo(G)).toEqual(0.3);

  w = new Weight(G, 2.5);
  expect(w.convertTo(MG)).toEqual(2500);

  w = new Weight(G, 18);
  expect(w.convertTo(G)).toEqual(18);
});

it('rejects invalid weight unit', () => {
  expect(() => {
    const invalid = new Weight(L, 10);
  }).toThrow(/^Invalid weight unit/);

  const w = new Weight(MG, 10);
  expect(() => {
    const result = w.convertTo(L);
  }).toThrow(/^Invalid weight unit/);
});
