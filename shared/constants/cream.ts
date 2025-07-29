export const mapCreamSize = {
  30: "30 ml",
  50: "50 ml",
  100: "100 ml",
} as const;

export const mapCreamType = {
  1: "Light",
  2: "Rich",
} as const;

export const creamSizes = Object.entries(mapCreamSize).map(([value, name]) => ({
  name,
  value,
}));

export const creamTypes = Object.entries(mapCreamType).map(([value, name]) => ({
  name,
  value,
}));

export type CreamVolume = keyof typeof mapCreamSize;
export type CreamType = keyof typeof mapCreamType;
