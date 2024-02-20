import EatUI from "./eat-ui";
import { getCreatedMeals } from "@/lib/meal-data-util";

export default async function Plan() {
  let meals = await getCreatedMeals();

  return (
    <div className="w-screen h-screen p-5">
      <h1 className="font-bold text-3xl">Ate something?</h1>
      
    </div>
  );
}
