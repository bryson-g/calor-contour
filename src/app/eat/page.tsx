import EatUI from "./eat-ui";
import { getCreatedMeals } from "@/lib/meal-data-util";

export default async function Plan() {
  let meals = await getCreatedMeals();

  return (
    <div className="flex flex-col items-center gap-10 p-8">
      <h1 className="font-bold text-3xl">planned for today</h1>

      <EatUI meals={meals} />
    </div>
  );
}
