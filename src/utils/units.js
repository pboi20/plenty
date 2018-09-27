export const L = "l";
export const ML = "ml";

export const Volume = {
  label: "volume",
  referenceUnit: L,
  units: {
    [L]: { label: "l", referenceValue: 1 },
    [ML]: { label: "ml", referenceValue: 1000 },
  },
};

export const G = "g";
export const MG = "mg";

export const Weight = {
  label: "weight",
  referenceUnit: G,
  units: {
    [G]: { label: "g", referenceValue: 1 },
    [MG]: { label: "mg", referenceValue: 1000 },
  },
};

export class AbstractValue {
  constructor(type, unit, value) {
    this.typeUnits = type.units;
    this.typeLabel = type.label;
    this.unit = unit;
    this.value = value;

    if (!this.validate(unit)) {
      throw `Invalid ${this.typeLabel} unit '${unit}'`;
    }
  }

  convertTo(unit) {
    if (!this.validate(unit)) {
      throw `Invalid ${this.typeLabel} unit '${unit}'`;
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
}

export class WeightValue extends AbstractValue {
  constructor(unit, value) {
    super(Weight, unit, value);
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
