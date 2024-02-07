import { Dispatch, useState } from "react";
import { Button } from "../ui/button";
import ProgressButton from "../ui/progress-button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import MealSelector from "../ui/meal-selector";
import { PlusCircle, Trash2 } from "lucide-react";
import { Meal } from "./meal-card";

export default function Planned({
  plannedMeals,
  setPlannedMeals,
}: {
  plannedMeals: Meal[];
  setPlannedMeals: Dispatch<Meal[]>;
}) {
  const [selected, setSelected] = useState<string[]>([]);
  const [prePlanned, setPrePlanned] = useState<Meal[]>(plannedMeals);

  function removeSelected() {
    setPrePlanned(prePlanned.filter((meal) => !selected.includes(meal.name)));
    setSelected([]);
  }

  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <ProgressButton amount={0} label={"planned"} />
        </DialogTrigger>
        <DialogContent>
          <DialogTitle className="text-center font-bold text-xl m-5">
            planned for today
          </DialogTitle>
          <div className="flex justify-end items-center w-full gap-4">
            {selected.length > 0 && (
              <Button
                className="bg-red-500 rounded-full w-15 h-10 absolute start-7 gap-2"
                onClick={() => removeSelected()}
              >
                <Trash2 /> remove
              </Button>
            )}
            <Button className="flex gap-2 rounded-full w-32" variant="outline">
              <PlusCircle /> add meal
            </Button>
          </div>

          <MealSelector
            selected={selected}
            setSelected={setSelected}
            meals={prePlanned}
          />
          <DialogFooter className="mt-3">
            <div className="flex flex-col w-full gap-3">
              <Button type="submit">Submit</Button>
              <Button
                variant="outline"
                onClick={() => {
                  setPlannedMeals(plannedMeals);
                  setPrePlanned(plannedMeals);
                }}
              >
                Cancel
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
