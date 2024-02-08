import { MinusIcon, PlusIcon } from "lucide-react";
import { Button } from "./button";
import { Dispatch } from "react";

export function DigitPicker({
  digit,
  setDigit,
  onChange,
}: {
  digit: number;
  setDigit: Dispatch<React.SetStateAction<number>>;
  onChange: () => void;
}) {
  function onClick(increment: number) {
    setDigit(digit + increment);
    onChange();
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
