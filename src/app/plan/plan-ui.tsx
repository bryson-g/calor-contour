"use client";

import { Button } from "@/components/ui/button";
import CaloriePicker from "@/components/ui/calorie-picker";
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
import { Meal } from "@/components/ui/meal-card";
import MealSelector from "@/components/ui/meal-selector";
import { PlusCircle, Trash2 } from "lucide-react";
import { useState } from "react";

export default function PlanUI({ meals }: { meals: Meal[] }) {
  const [selected, setSelected] = useState<string[]>([]);
  const [draft, setDraft] = useState<Meal[]>(meals);

  function removeSelected() {
    setDraft(draft.filter((meal) => !selected.includes(meal.name)));
    setSelected([]);
  }

  return (
    <div className="w-full flex flex-col items-center max-w-[500px]">
      <div className="flex justify-end mb-3 gap-3 w-full">
        {selected.length > 0 && (
          <Button
            className="bg-red-500 rounded-full w-15 h-10 gap-2"
            onClick={() => removeSelected()}
          >
            <Trash2 />
          </Button>
        )}
        <Button className="flex gap-2 rounded-full" variant="outline">
          <PlusCircle /> add
        </Button>
        <CreateMeal />
      </div>
      <div className="h-[50vh] w-full">
        <MealSelector
          meals={draft}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
      <div className="flex flex-col w-full gap-3 mt-8 ">
        <Button type="submit">submit</Button>
        <Button variant="outline">cancel</Button>
      </div>
    </div>
  );
}

function CreateMeal() {
  const [thousandsDigit, setThousandsDigit] = useState<number>(0);
  const [hundredsDigit, setHundredsDigit] = useState<number>(0);
  const [tensDigit, setTensDigit] = useState<number>(0);
  const [onesDigit, setOnesDigit] = useState<number>(0);

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="flex gap-2 rounded-full" variant="outline">
          <PlusCircle /> create
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>create meal</DrawerTitle>
            <DrawerDescription>
              set name, calories, and ingredients of your meal
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
