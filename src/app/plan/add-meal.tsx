import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Dispatch, ReactNode, useState } from "react";
import { Meal } from "@/components/ui/meal-card";
import MealSelector from "@/components/ui/meal-selector";

export default function AddMeal({
  children,
  allMeals,
  draftMeals,
  setDraftMeals,
}: {
  children: ReactNode;
  allMeals: Meal[];
  draftMeals: Meal[];
  setDraftMeals: Dispatch<Meal[]>;
}) {
  const [selected, setSelected] = useState<Meal[]>([]);

  function onSubmit() {
    setDraftMeals([...draftMeals, ...selected]);
    setSelected([]);
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent className="items-center p-5">
        <div className="max-w-[500px] mt-5 w-[90%] h-[400px] flex flex-col gap-3">
          <MealSelector
            meals={allMeals}
            selected={selected}
            setSelected={setSelected}
          />
          <DrawerFooter>
            <Button onClick={onSubmit}>add meal</Button>
            <DrawerClose asChild>
              <Button variant="outline">cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
