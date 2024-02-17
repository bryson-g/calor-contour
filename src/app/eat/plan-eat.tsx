import { ReactNode, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import MealSelector from "@/components/ui/meal-selector";
import { Button } from "@/components/ui/button";
import { Meal } from "@/components/ui/meal-card";
import CaloriePicker from "@/components/ui/calorie-picker";

export default function PlanEat({
  children,
  allMeals,
}: {
  children: ReactNode;
  allMeals: Meal[];
}) {
  const [selected, setSelected] = useState<Meal[]>([]);
  const [calories, setCalories] = useState<number>(0);

  function onSubmit() {
    setSelected([]);
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent className="items-center p-5">
        <div className="max-w-[500px] mt-5 w-[90%] h-[80vh] flex flex-col gap-3">
          <DrawerTitle className="mb-5">quick eat menu</DrawerTitle>
          <MealSelector
            meals={allMeals}
            selected={selected}
            setSelected={setSelected}
          />
          // todo : add shadcn tab component to choose from created meals / calorie picker
          <CaloriePicker calories={calories} setCalories={setCalories} />
          <DrawerFooter>
            <DrawerClose asChild>
              <Button onClick={onSubmit}>
                add meal
                {selected.length > 1 && "s"}
              </Button>
            </DrawerClose>
            <DrawerClose asChild>
              <Button variant="outline">cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

