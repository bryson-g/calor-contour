import { Dispatch, createContext, useContext } from "react";
import type { Context } from "react";

export enum ContextNames {
  CaloriePickerContext = "cpc",
  DraftMealsContext = "dmc",
}
export const contexts: Record<string, Context<any>> = {};

export function makeContext<ContextType>(name: string) {
  contexts[name] = createContext<ContextType | undefined>(undefined);
}

export function applyContext(name: string) {
  const value = useContext(contexts[name]);
  if (value === undefined)
    throw new Error(`(${name}) A provider must be used with this context.`);
  return value;
}

makeContext<[number, Dispatch<number>]>(ContextNames.CaloriePickerContext);
makeContext<[number, Dispatch<number>]>(ContextNames.DraftMealsContext);
