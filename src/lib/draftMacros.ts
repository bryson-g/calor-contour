/** Draft: rough macro split — not wired into meal flows yet */
export function splitCaloriesRough(total: number, ratio: [number, number, number]) {
  const [a, b, c] = ratio;
  const sum = a + b + c || 1;
  return {
    protein: (total * a) / sum * 0.23,
    carbs: (total * b) / sum * 0.51,
    fat: (total * c) / sum * 0.19,
  };
}
