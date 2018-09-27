import { ML, L, VolumeValue, MG, G, WeightValue } from './units';

it('does volume conversions', () => {
  let v = new VolumeValue(ML, 300);
  expect(v.convertTo(L)).toEqual(0.3);

  v = new VolumeValue(L, 2.5);
  expect(v.convertTo(ML)).toEqual(2500);

  v = new VolumeValue(L, 18);
  expect(v.convertTo(L)).toEqual(18);
});

it('rejects invalid volume unit', () => {
  expect(() => {
    const invalid = new VolumeValue(G, 10);
  }).toThrow(/^Invalid volume unit/);

  const v = new VolumeValue(ML, 10);
  expect(() => {
    const result = v.convertTo(G);
  }).toThrow(/^Invalid volume unit/);
});

it('does weight conversions', () => {
  let w = new WeightValue(MG, 300);
  expect(w.convertTo(G)).toEqual(0.3);

  w = new WeightValue(G, 2.5);
  expect(w.convertTo(MG)).toEqual(2500);

  w = new WeightValue(G, 18);
  expect(w.convertTo(G)).toEqual(18);
});

it('rejects invalid weight unit', () => {
  expect(() => {
    const invalid = new WeightValue(L, 10);
  }).toThrow(/^Invalid weight unit/);

  const w = new WeightValue(MG, 10);
  expect(() => {
    const result = w.convertTo(L);
  }).toThrow(/^Invalid weight unit/);
});
