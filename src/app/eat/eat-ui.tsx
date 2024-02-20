"use client";

import { Button } from "@/components/ui/button";
import { Meal } from "@/components/ui/meal-card";
import MealSelector from "@/components/ui/meal-selector";
import { useState } from "react";
import QuickEat from "./add-calories";
import { RefrigeratorIcon, SandwichIcon, CalendarIcon } from "lucide-react";
import PlanEat from "./view-planned";
import CreatedEat from "./view-created";

export default function EatUI({ createdMeals }: { createdMeals: Meal[] }) {
  const [selected, setSelected] = useState<Meal[]>([]);
  const [eatenDraft, setEatenDraft] = useState<Meal[]>([]);

  return (
    <div className="w-full flex flex-col max-w-[500px] items-start">
      <div className="flex justify-end gap-3 mb-3 w-full">
        <QuickEat allMeals={createdMeals}>
          <Button className="rounded-full" variant="outline">
            <SandwichIcon className="mr-2" />
            add calories
          </Button>
        </QuickEat>
        <PlanEat allMeals={createdMeals}>
          <Button className="rounded-full" variant="outline">
            <CalendarIcon className="mr-2" />
            view plan
          </Button>
        </PlanEat>
        <CreatedEat allMeals={createdMeals}>
          <Button className="rounded-full" variant="outline">
            <RefrigeratorIcon className="mr-2" />
            view all
          </Button>
        </CreatedEat>
      </div>
      <div className="h-[50vh] w-full">
        <MealSelector
          meals={eatenDraft}
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
