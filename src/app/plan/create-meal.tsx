import { Button } from "@/components/ui/button";
import CaloriePicker from "@/components/ui/calorie-picker";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckSquare2Icon, PlusCircle, SquareIcon } from "lucide-react";
import React, { Dispatch, ReactNode, useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Meal } from "@/components/ui/meal-card";

export default function CreateMeal({
  children,
  draftMeals,
  setDraftMeals,
}: {
  children: ReactNode;
  draftMeals: Meal[];
  setDraftMeals: Dispatch<Meal[]>;
}) {
  const [calories, setCalories] = useState<number>(0);
  const [addToPlan, setAddToPlan] = useState<boolean>(true);
  const [mealData, setMealData] = useState<Meal>({}); // make Meal all optional values

  function onSubmit() {
    setDraftMeals([
      ...draftMeals,
      mealData,
    ]);
    setMealData(null);
  }

  function handleChange(event: any) {
    setMealData({
      ...mealData,
      [event.target.id]: event.target.value,
      calories: calories,
    });
  }

  return (
    <Drawer onOpenChange={(open) => setAddToPlan(open)}>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent className="items-center">
        <form className="max-w-[500px] w-[90%] flex flex-col gap-3">
          <div>
            <Label htmlFor="name"> meal name </Label>
            <Input
              onChange={handleChange}
              placeholder="ex. turkey sandwich"
              id="name"
            />
          </div>

          <div>
            <Label htmlFor="ingredients"> ingredients </Label>
            <Textarea id="ingredients" placeholder="ex. turkey, cheese, etc" />
          </div>

          <Label> calories </Label>
          <div className="border rounded-lg p-5">
            <CaloriePicker calories={calories} setCalories={setCalories} />
          </div>

          <DrawerFooter>
            <RadioGroup>
              <Button
                onClick={() => setAddToPlan(!addToPlan)}
                className="flex justify-start gap-2"
                variant="ghost"
                size="sm"
              >
                {addToPlan ? <CheckSquare2Icon /> : <SquareIcon />}
                add to today's plan
              </Button>
            </RadioGroup>

            <DrawerClose asChild>
              <Button onClick={onSubmit}>create meal</Button>
            </DrawerClose>
            <DrawerClose asChild>
              <Button variant="outline">cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </form>
      </DrawerContent>
    </Drawer>
  );
}
