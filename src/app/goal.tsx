import ProgressButton from "../components/ui/progress-button";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import CaloriePicker from "../components/ui/calorie-picker";

export default function Goal() {
  const [goal, setGoal] = React.useState(350);
  const [thousandsDigit, setThousandsDigit] = React.useState<number>(0);
  const [hundredsDigit, setHundredsDigit] = React.useState<number>(0);
  const [tensDigit, setTensDigit] = React.useState<number>(0);
  const [onesDigit, setOnesDigit] = React.useState<number>(0);

  function onClick(increment: number) {}

  return (
    <Drawer>
      <DrawerTrigger>
        <ProgressButton amount={0} label={"left"} />
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Set Goal</DrawerTitle>
            <DrawerDescription>
              Set your daily caloric intake.
            </DrawerDescription>
          </DrawerHeader>
          <CaloriePicker
            setThousandsDigit={setThousandsDigit}
            setHundredsDigit={setHundredsDigit}
            setTensDigit={setTensDigit}
            setOnesDigit={setOnesDigit}
            thousandsDigit={thousandsDigit}
            hundredsDigit={hundredsDigit}
            tensDigit={tensDigit}
            onesDigit={onesDigit}
          />
          <DrawerFooter className="mt-5">
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
