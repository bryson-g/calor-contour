import { MinusIcon, PlusIcon } from "lucide-react";
import { Button } from "./button";
import { Dispatch, useState } from "react";
import { ContextNames, applyContext } from "@/lib/context-util";

export function DigitPicker({ increment }: { increment: number }) {
  const [calories, setCalories] = applyContext(
    ContextNames.CaloriePickerContext
  );
  const digit = getDigit(increment);
  function getDigit(position: number) {
    return Math.floor(calories / position) % 10;
  }

  function onClick(direction: -1 | 1) {
    setCalories(calories + increment * direction);
  }

  return (
    <div className="flex flex-col items-center min-w-[80px] max-w-fit gap-3">
      <Button
        variant="outline"
        size="icon"
        className="h-14 w-14 shrink-0 rounded-full"
        onClick={() => onClick(1)}
        disabled={digit >= 9}
      >
        <PlusIcon className="h-8 w-8" />
      </Button>
      <p className="font-bold text-8xl">{digit}</p>
      <Button
        size="icon"
        className="h-14 w-14 shrink-0 rounded-full"
        onClick={() => onClick(-1)}
        disabled={digit <= 0}
      >
        <MinusIcon className="h-8 w-8" />
      </Button>
    </div>
  );
}
