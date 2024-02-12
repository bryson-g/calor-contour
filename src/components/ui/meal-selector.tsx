"use client";

import MealCard, { Meal } from "./meal-card";
import { CheckIcon } from "lucide-react";
import { ScrollArea, ScrollBar } from "./scroll-area";
import { Dispatch, useState } from "react";
import { cn } from "@/lib/utils";

export default function MealSelector({
  meals,
  selected,
  setSelected,
}: {
  meals: Meal[];
  selected: Meal[];
  setSelected: Dispatch<Meal[]>;
}) {
  const [planned, setPlanned] = useState<Meal[]>([]);


  function onSelect(clickedMeal: Meal) {
    const i = selected.findIndex((meal) => meal.name == clickedMeal.name);
    const copy = Array.from(selected);

    if (i != -1) {
      copy.splice(i as number, 1);
      setSelected(copy);
    } else {
      setSelected([...copy, clickedMeal]);
    }
  }

  return (
    <ScrollArea className="h-full w-full whitespace-nowrap rounded-md border">
      <div>
        {meals.map((meal, i) => {
          return (
            <button
              className={cn("border flex p-3 w-full text-left", {
                "bg-blue-100/80": selected.includes(meal),
              })}
              onClick={() => onSelect(meal)}
              key={i}
            >
              <div
                className={
                  "mt-5 border-2 rounded-md w-6 h-6 flex justify-center items-center"
                }
              >
                {selected.includes(meal) && (
                  <CheckIcon className="w-5/6 h-5/6" />
                )}
              </div>
              <MealCard {...meal} />
            </button>
          );
        })}
      </div>
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
}
