import { Dispatch, createContext, useContext } from "react";

export const pickerContext = createContext<
  [number, Dispatch<number>] | undefined
>(undefined);

export function usePickerContext() {
  const context = useContext(pickerContext);

  if (context === undefined)
    throw new Error("usePickerContext must be used with a provider.");
}
