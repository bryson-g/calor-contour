import { Button } from "@/components/ui/button";
import CaloriePicker from "@/components/ui/calorie-picker";
import { ContextNames, contexts } from "@/lib/context-util";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckSquare2Icon, PlusCircle, SquareIcon } from "lucide-react";
import React, { Dispatch, ReactNode, useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Meal } from "@/components/ui/meal-card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function CreateMeal({
  children,
  draftMeals,
  setDraftMeals,
}: {
  children: ReactNode;
  draftMeals: Meal[];
  setDraftMeals: Dispatch<Meal[]>;
}) {
  const CaloriePickerContext = contexts[ContextNames.CaloriePickerContext];

  const [calories, setCalories] = useState<number>(0);
  const [addToPlan, setAddToPlan] = useState<boolean>(true);
  const [mealData, setMealData] = useState<Meal>({}); // make Meal all optional values
  const [open, setOpen] = useState<boolean>(false);

  function close() {
    setOpen(false);
    setCalories(0);
    setMealData({});
  }

  function onSubmit() {
    if (mealData.name && mealData.ingredients && calories > 0) {
      const meal = {...mealData, calories: calories}
      setDraftMeals([...draftMeals, meal]);
      setOpen(false);

      // todo: server process
      console.log(mealData, calories);

      close();
    }
  }

  function handleChange(key: string, value: string | string[]) {
    setMealData({
      ...mealData,
      [key]: value,
    });
  }

  return (
    <Drawer open={open} onOpenChange={(open) => setAddToPlan(open)}>
      <DrawerTrigger onClick={() => setOpen(true)} asChild>
        {children}
      </DrawerTrigger>
      <DrawerContent className="items-center">
        <div className="max-w-[500px] w-[90%] flex flex-col gap-3">
          <DrawerTitle className="mb-5">create a new meal</DrawerTitle>
          <div>
            <Label htmlFor="name"> meal name </Label>
            <Input
              onChange={(event) => handleChange("name", event.target.value)}
              placeholder="ex. turkey sandwich"
              id="name"
            />
          </div>

          <div>
            <Label htmlFor="ingredients"> ingredients </Label>
            <Textarea
              id="ingredients"
              placeholder="ex. turkey, cheese, etc"
              onChange={(event) =>
                handleChange("ingredients", event.target.value.split(", "))
              }
            />
          </div>

          <Label> calories </Label>
          <div className="border rounded-lg p-2">
            <Dialog>
              <DialogTrigger>
                {calories > 0 ? calories : "set calories"}
              </DialogTrigger>
              <DialogContent>
                <CaloriePickerContext.Provider value={[calories, setCalories]}>
                  <CaloriePicker />
                </CaloriePickerContext.Provider>
              </DialogContent>
            </Dialog>
          </div>

          <DrawerFooter>
            <Button
              onClick={() => setAddToPlan(!addToPlan)}
              className="flex justify-start gap-2"
              variant="ghost"
              size="sm"
            >
              {addToPlan ? <CheckSquare2Icon /> : <SquareIcon />}
              add to today's plan
            </Button>

            <Button onClick={onSubmit}>create meal</Button>
            <Button onClick={close} variant="outline">
              cancel
            </Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
