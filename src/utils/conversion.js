export const L = "l";
export const ML = "ml";
export const TSP = "tsp";
export const TBSP = "tbsp";

export const Volume = {
  label: "volume",
  referenceUnit: L,
  unitSequence: [ML, L, TSP, TBSP],
  units: {
    [L]: { label: "l", referenceValue: 1 },
    [ML]: { label: "ml", referenceValue: 1000 },
    [TSP]: { label: "tsp (US)", referenceValue: 202.88 },
    [TBSP]: { label: "tbsp (US)", referenceValue: 67.63 },
  },
};

export const VolumeChoices = Volume.unitSequence.map(item => (
  [item, Volume.units[item].label]
));

export const G = "g";
export const MG = "mg";

export const Weight = {
  label: "weight",
  referenceUnit: G,
  unitSequence: [MG, G],
  units: {
    [G]: { label: "g", referenceValue: 1 },
    [MG]: { label: "mg", referenceValue: 1000 },
  },
};

export const WeightChoices = Weight.unitSequence.map(item => (
  [item, Weight.units[item].label]
));

export class AbstractValue {
  constructor(type, unit, value) {
    this.typeUnits = type.units;
    this.typeLabel = type.label;
    this.unit = unit;
    this.value = value;

    if (!this.validate(unit)) {
      throw Error(`Invalid ${this.typeLabel} unit '${unit}'`);
    }
  }

  convertValue(unit) {
    if (!this.validate(unit)) {
      throw Error(`Invalid ${this.typeLabel} unit '${unit}'`);
    }

    const inputUnit = this.typeUnits[this.unit];
    const outputUnit = this.typeUnits[unit];
    return (this.value / inputUnit.referenceValue) * outputUnit.referenceValue;
  }

  validate(unit) {
    return typeof this.typeUnits[unit] !== "undefined";
  }
}

export class VolumeValue extends AbstractValue {
  constructor(unit, value) {
    super(Volume, unit, value);
  }

  convertTo(unit) {
    return new VolumeValue(unit, this.convertValue(unit));
  }
}

export class WeightValue extends AbstractValue {
  constructor(unit, value) {
    super(Weight, unit, value);
  }

  convertTo(unit) {
    return new WeightValue(unit, this.convertValue(unit));
  }
}

/*
  TODO add other units

  volume units
    ml: Millilitre
    l: Liter
    tsp: Teaspoon
    tbsp: Tablespoon
    c: Cup
    floz: Fluid Ounce

  weight units
    mg: Milligram
    g: Gram
    oz: Ounce
    lb: Pound
*/
