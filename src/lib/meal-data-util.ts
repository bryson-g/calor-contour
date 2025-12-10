// seeded samples for local UX iteration
import { Meal } from "@/components/ui/meal-card";

export async function getCreatedMeals(): Promise<Meal[]> {
  return [
    {
      name: "bean burrito",
      calories: 733,
      ingredients: [
        "bean",
        "burrito",
      ],
    },
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

export async function getEatenMeals() {
  return await getCreatedMeals();
}
// expanded later: openfoodfacts hook
