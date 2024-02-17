"use client";

import { Button } from "@/components/ui/button";
import { Meal } from "@/components/ui/meal-card";
import MealSelector from "@/components/ui/meal-selector";
import { useState } from "react";
import QuickEat from "./quick-eat";
import { SandwichIcon, CalendarIcon } from "lucide-react";
import PlanEat from "./plan-eat";

export default function EatUI({ meals }: { meals: Meal[] }) {
  const [selected, setSelected] = useState<Meal[]>([]);

  return (
    <div className="w-full flex flex-col max-w-[500px] items-start">
      <div className="flex justify-end gap-3 mb-3 w-full">
        <QuickEat allMeals={meals}>
          <Button className="rounded-full" variant="outline">
            <SandwichIcon className="mr-2" />
            eat quick
          </Button>
        </QuickEat>
        <PlanEat allMeals={meals}>
          <Button className="rounded-full" variant="outline">
            <CalendarIcon className="mr-2" />
            eat planned
          </Button>
        </PlanEat>
      </div>
      <div className="h-[50vh] w-full">
        <MealSelector
          meals={meals}
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
