import { SetStateAction } from "react";
import { DigitPicker } from "./digit-picker";

export default function CaloriePicker(props: CaloriePickerProps) {
  const {
    setThousandsDigit,
    setHundredsDigit,
    setTensDigit,
    setOnesDigit,

    thousandsDigit,
    hundredsDigit,
    tensDigit,
    onesDigit,
  } = props;
  return (
    <div className="flex justify-center">
      <DigitPicker digit={thousandsDigit} setDigit={setThousandsDigit} />
      <DigitPicker digit={hundredsDigit} setDigit={setHundredsDigit} />
      <DigitPicker digit={tensDigit} setDigit={setTensDigit} />
      <DigitPicker digit={onesDigit} setDigit={setOnesDigit} />
    </div>
  );
}

type CaloriePickerProps = {
  setThousandsDigit: React.Dispatch<SetStateAction<number>>;
  setHundredsDigit: React.Dispatch<SetStateAction<number>>;
  setTensDigit: React.Dispatch<SetStateAction<number>>;
  setOnesDigit: React.Dispatch<SetStateAction<number>>;

  thousandsDigit: number;
  hundredsDigit: number;
  tensDigit: number;
  onesDigit: number;
};
