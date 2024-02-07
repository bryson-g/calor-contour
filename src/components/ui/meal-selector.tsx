import MealCard, { Meal } from "../primary/meal-card";
import { CheckIcon } from "lucide-react";
import { ScrollArea, ScrollBar } from "./scroll-area";
import { Dispatch } from "react";
import { cn } from "@/lib/utils";

export default function MealSelector({
  meals,
  selected,
  setSelected,
}: {
  meals: Meal[];
  selected: string[];
  setSelected: Dispatch<string[]>;
}) {
  function onSelect(mealProps: Meal) {
    const i = selected.indexOf(mealProps.name);
    const copy = Array.from(selected);

    if (i !== -1) {
      copy.splice(i, 1);
      setSelected(copy);
    } else {
      setSelected([...copy, mealProps.name]);
    }
  }

  return (
    <ScrollArea className="h-72 whitespace-nowrap rounded-md border">
      <div>
        {meals.map((mealProps, i) => {
          return (
            <button
              className={cn("border flex p-3 w-full text-left", {
                "bg-blue-100/80": selected.includes(mealProps.name),
              })}
              onClick={() => onSelect(mealProps)}
            >
              <div
                className={
                  "mt-5 border-2 rounded-md w-6 h-6 flex justify-center items-center"
                }
              >
                {selected.includes(mealProps.name) && (
                  <CheckIcon className="w-5/6 h-5/6" />
                )}
              </div>
              <MealCard {...mealProps} />
            </button>
          );
        })}
      </div>
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
}
