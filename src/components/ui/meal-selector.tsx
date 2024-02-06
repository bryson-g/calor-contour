import { ScrollArea } from "@radix-ui/react-scroll-area";
import MealCard, { Meal } from "../primary/meal-card";
import { Separator } from "./separator";
import { CheckIcon } from "lucide-react";

export default function MealSelector({ meals }: { meals: Meal[] }) {
  return (
    <div>
      <ScrollArea>
        {meals.map((mealProps, i) => {
          return (
            <div>
              <div className="flex flex-row items-center gap-3">
                <div className="border rounded-md w-[20px] h-[20px] flex justify-center items-center">
                    <CheckIcon className="w-5/6 h-5/6"/>
                </div>
                <MealCard {...mealProps} />
              </div>
              {i != meals.length - 1 && <Separator />}
            </div>
          );
        })}
      </ScrollArea>
    </div>
  );
}
