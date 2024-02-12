"use client";

import { Button } from "@/components/ui/button";
import { Meal } from "@/components/ui/meal-card";
import MealSelector from "@/components/ui/meal-selector";
import { PlusCircle, Trash2 } from "lucide-react";
import { useState } from "react";
import CreateMeal from "./create-meal";
import AddMeal from "./add-meal";

export default function PlanUI({ meals }: { meals: Meal[] }) {
  const [selected, setSelected] = useState<Meal[]>([]);
  const [draftMeals, setDraftMeals] = useState<Meal[]>(meals);
  const [allMeals, setAllMeals] = useState<Meal[]>(meals);

  function removeSelected() {
    setDraftMeals(draftMeals.filter((meal) => !selected.includes(meal)));
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
        <CreateMeal>
          <Button className="flex gap-2 rounded-full" variant="outline">
            <PlusCircle /> create
          </Button>
        </CreateMeal>
        <AddMeal allMeals={allMeals} draftMeals={draftMeals} setDraftMeals={setDraftMeals} > 
          <Button className="flex gap-2 rounded-full" variant="outline">
            <PlusCircle /> add
          </Button>
        </AddMeal>
      </div>
      <div className="h-[50vh] w-full">
        <MealSelector
          meals={draftMeals}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
      <div className="flex flex-col w-full gap-3 mt-8 ">
        <Button type="submit">confirm</Button>
        <Button variant="outline">cancel</Button>
      </div>
    </div>
  );
}
