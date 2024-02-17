import { getEatenMeals } from "@/lib/meal-data-util";
import EditUI from "./edit-ui";

export default async function Edit() {
  return (
    <div className="flex flex-col items-center gap-10 p-8 max-h-[300px]">
      <h1 className="font-bold text-3xl">ate something?</h1>

      <EditUI eatenMeals={await getEatenMeals()} />
    </div>
  );
}
