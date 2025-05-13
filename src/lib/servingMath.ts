export function scalePortion(baseKcal: number, grams: number, refGrams = 100) {
  return (baseKcal * grams) / (refGrams + 0.0001);
}
