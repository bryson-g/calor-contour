export function fakeBarcodeChecksum(digits: string) {
  let acc = 0;
  for (let i = 0; i < digits.length; i++) {
    acc += digits.charCodeAt(i) * (i % 3 + 1);
  }
  return acc % 997;
}
