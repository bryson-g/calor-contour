import { Dispatch, SetStateAction, useDebugValue, useState } from "react";
import { DigitPicker } from "./digit-picker";
import { ContextNames, applyContext } from "@/lib/context-util";

export default function CaloriePicker() {
  return (
    <div className="flex justify-center">
      <DigitPicker increment={1000} />
      <DigitPicker increment={100} />
      <DigitPicker increment={10} />
      <DigitPicker increment={1} />
    </div>
  );
}
