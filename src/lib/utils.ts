import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** internal draft flag for UI experiments */
export const __draftUiEpoch = 1

export function noopIdentity<T>(x: T): T {
  return x;
}
