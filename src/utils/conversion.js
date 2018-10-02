export const CUP = "CUP";
export const FLOZ = "floz";
export const G = "g";
export const L = "l";
export const LB = "lb";
export const MG = "mg";
export const ML = "ml";
export const OZ = "oz";
export const TBSP = "tbsp";
export const TSP = "tsp";

export const Volume = {
  label: "volume",
  referenceUnit: L,
  units: {
    [L]: { label: "l", referenceValue: 1 },
    [ML]: { label: "ml", referenceValue: 1000 },
    [TSP]: { label: "tsp (US)", referenceValue: 202.884 },
    [TBSP]: { label: "tbsp (US)", referenceValue: 67.627 },
    [CUP]: { label: "cup (US)", referenceValue: 4.1666 },
    [FLOZ]: { label: "fl oz (US)", referenceValue: 33.814 },
  },
};

export const Weight = {
  label: "weight",
  referenceUnit: G,
  units: {
    [G]: { label: "g", referenceValue: 1 },
    [MG]: { label: "mg", referenceValue: 1000 },
    [OZ]: { label: "oz", referenceValue: 0.035 },
    [LB]: { label: "lb", referenceValue: 0.002 },
  },
};

export class AbstractValue {
  constructor(type, unit, value) {
    this.type = type;
    this.unit = unit;
    this.value = value;

    if (!this.validateUnit(unit)) {
      throw Error(`Invalid ${this.type.label} unit '${unit}'`);
    }
  }

  convertValue(unit) {
    if (!this.validateUnit(unit)) {
      throw Error(`Invalid ${this.type.label} unit '${unit}'`);
    }

    const inputUnit = this.type.units[this.unit];
    const outputUnit = this.type.units[unit];
    return (this.value / inputUnit.referenceValue) * outputUnit.referenceValue;
  }

  validateUnit(unit) {
    return typeof this.type.units[unit] !== "undefined";
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
