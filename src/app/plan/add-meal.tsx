import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTitle,
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
        <div className="max-w-[500px] mt-5 w-[90%] h-[500px] flex flex-col gap-3">
          <DrawerTitle className="mb-5">all of your created meals</DrawerTitle>
          <MealSelector
            meals={allMeals}
            selected={selected}
            setSelected={setSelected}
          />
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
