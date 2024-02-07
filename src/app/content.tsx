"use client";

import { Meal } from "@/components/primary/meal-card";
import Eaten from "../components/primary/eaten";
import Goal from "../components/primary/goal";
import Planned from "@/components/primary/planned";
import { useState } from "react";

export default function Content() {
  const [plannedMeals, setPlannedMeals] = useState<Meal[]>([
    {
      name: "turkey sandwich",
      calories: 621,
      ingredients: [
        "bread",
        "turkey",
        "cheese",
        "mustard",
        "hotsauce",
        "mayonnaise",
      ],
    },
    {
      name: "protein shake",
      calories: 830,
      ingredients: ["protein powder", "peanut butter", "banana", "olive oil"],
    },
    {
      name: "bagel",
      calories: 320,
      ingredients: ["bagel", "cream cheese"],
    },
  ]);

  return (
    <div className="flex flex-col items-center justify-around h-full">
      <Goal />
      <Eaten />
      <Planned plannedMeals={plannedMeals} setPlannedMeals={setPlannedMeals} />
    </div>
  );
}
