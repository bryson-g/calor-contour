import { Button } from "@/components/ui/button";
import PlanUI from "./plan-ui";
import { Meal } from "@/components/ui/meal-card";

export default async function Home() {
  let meals = await getMeals();

  return (
    <div className="flex flex-col items-center gap-10 p-8">
      <h1 className="font-bold text-3xl">planned for today</h1>

      <PlanUI meals={meals} />


    </div>
  );
}

async function getMeals(): Promise<Meal[]> {
  return [
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
  ];
}
