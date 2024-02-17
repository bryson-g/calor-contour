"use client";

import { Button } from "@/components/ui/button";
import { Meal } from "@/components/ui/meal-card";
import MealSelector from "@/components/ui/meal-selector";
import { useState } from "react";
import QuickEat from "./quick-eat";
import { SandwichIcon, CalendarIcon } from "lucide-react";

export default function EatUI({ meals }: { meals: Meal[] }) {
  const [selected, setSelected] = useState<Meal[]>([]);

  return (
    <div className="w-full flex flex-col max-w-[500px] items-start gap-3">
      <div className="flex justify-end gap-3 w-full">
          <QuickEat>
            <Button className="rounded-full" variant="outline">
              <SandwichIcon className="mr-2" />
              quick
            </Button>
          </QuickEat>
          <QuickEat>
            <Button className="rounded-full" variant="outline">
              <CalendarIcon className="mr-2" />
              planned
            </Button>
          </QuickEat>
      </div>
      <div className="h-[50vh] w-full">
        <MealSelector
          meals={meals}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
    </div>
  );
}
