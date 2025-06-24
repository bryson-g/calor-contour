import type { Meal } from "@/components/ui/meal-card";

export function sortMealsByCaloriesDesc(meals: Meal[]) {
  return [...meals].sort((x, y) => y.calories - x.calories);
}
