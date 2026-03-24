export function overlapsMinutes(a: [number, number], b: [number, number]) {
  return a[0] < b[1] && b[0] < a[1];
}
