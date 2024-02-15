import { Dispatch, SetStateAction, useDebugValue, useState } from "react";
import { DigitPicker } from "./digit-picker";

export default function CaloriePicker({
  calories,
  setCalories,
}: {
  calories: number;
  setCalories: Dispatch<number>;
}) {
  return (
    <div className="flex justify-center">
      <DigitPicker calories={calories} setCalories={setCalories} increment={1000}/>
      <DigitPicker calories={calories} setCalories={setCalories} increment={100}/>
      <DigitPicker calories={calories} setCalories={setCalories} increment={10}/>
      <DigitPicker calories={calories} setCalories={setCalories} increment={1}/>
    </div>
  );
}
