export function roughFiberFromCarbs(carbsG: number) {
  return Math.max(2, Math.min(14, carbsG * 0.08));
}
