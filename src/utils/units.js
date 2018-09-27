export const ML = "ml";
export const L = "l";
export const referenceVolumeUnit = L;
export const volumeUnits = {
  [ML]: { label: "ml", referenceValue: 1000 },
  [L]: { label: "l", referenceValue: 1 },
}

export const MG = "mg";
export const G = "g";
export const referenceWeightUnit = G;
export const weightUnits = {
  [MG]: { label: "mg", referenceValue: 1000 },
  [G]: { label: "g", referenceValue: 1 },
}

export class Volume {
  constructor(unit, value) {
    this.unit = unit;
    this.value = value;

    if (!Volume.validate(unit)) {
      throw `Invalid volume unit '${unit}'`;
    }
  }

  convertTo(unit) {
    if (!Volume.validate(unit)) {
      throw `Invalid volume unit '${unit}'`;
    }

    const inputUnit = volumeUnits[this.unit];
    const outputUnit = volumeUnits[unit];
    return (this.value / inputUnit.referenceValue) * outputUnit.referenceValue;
  }

  static validate(unit) {
    return typeof volumeUnits[unit] !== "undefined";
  }
}

export class Weight {
  constructor(unit, value) {
    this.unit = unit;
    this.value = value;

    if (!Weight.validate(unit)) {
      throw `Invalid weight unit '${unit}'`;
    }
  }

  convertTo(unit) {
    if (!Weight.validate(unit)) {
      throw `Invalid weight unit '${unit}'`;
    }

    const inputUnit = weightUnits[this.unit];
    const outputUnit = weightUnits[unit];
    return (this.value / inputUnit.referenceValue) * outputUnit.referenceValue;
  }

  static validate(unit) {
    return typeof weightUnits[unit] !== "undefined";
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
