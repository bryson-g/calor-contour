"use client";

import { Button } from "@/components/ui/button";
import { Meal } from "@/components/ui/meal-card";
import MealSelector from "@/components/ui/meal-selector";
import { PlusCircle, Trash2 } from "lucide-react";
import { useState } from "react";

export default function PlanUI({ meals }: { meals: Meal[] }) {
  const [selected, setSelected] = useState<string[]>([]);
  const [draft, setDraft] = useState<Meal[]>(meals);

  function removeSelected() {
    setDraft(draft.filter((meal) => !selected.includes(meal.name)));
    setSelected([]);
  }

  return (
    <div className="w-full">
      <div className="flex justify-end mb-3 gap-3">
        {selected.length > 0 && (
          <Button
            className="bg-red-500 rounded-full w-15 h-10 gap-2"
            onClick={() => removeSelected()}
          >
            <Trash2 />
          </Button>
        )}
        <Button className="flex gap-2 rounded-full" variant="outline">
          <PlusCircle /> add
        </Button>
        <Button className="flex gap-2 rounded-full" variant="outline">
          <PlusCircle /> create
        </Button>
      </div>
      <div className="h-[50vh] w-full">
        <MealSelector
          meals={draft}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
    </div>
  );
}
