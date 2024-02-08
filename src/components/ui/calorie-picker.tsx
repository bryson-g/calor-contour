import { Dispatch, SetStateAction, useState } from "react";
import { DigitPicker } from "./digit-picker";

export default function CaloriePicker({
  calories,
  setCalories,
}: {
  calories: number;
  setCalories: Dispatch<number>;
}) {
  const [thousandsDigit, setThousandsDigit] = useState<number>(0);
  const [hundredsDigit, setHundredsDigit] = useState<number>(0);
  const [tensDigit, setTensDigit] = useState<number>(0);
  const [onesDigit, setOnesDigit] = useState<number>(0);

  function onDigitChange() {
    setCalories(
      thousandsDigit * 1000 + hundredsDigit * 100 + tensDigit * 10 + onesDigit
    );
  }

  return (
    <div className="flex justify-center">
      <DigitPicker
        onChange={onDigitChange}
        digit={thousandsDigit}
        setDigit={setThousandsDigit}
      />
      <DigitPicker
        onChange={onDigitChange}
        digit={hundredsDigit}
        setDigit={setHundredsDigit}
      />
      <DigitPicker
        onChange={onDigitChange}
        digit={tensDigit}
        setDigit={setTensDigit}
      />
      <DigitPicker
        onChange={onDigitChange}
        digit={onesDigit}
        setDigit={setOnesDigit}
      />
    </div>
  );
}
