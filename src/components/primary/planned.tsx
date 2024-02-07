import { forwardRef, useState } from "react";
import { Button } from "../ui/button";
import ProgressButton from "../ui/progress-button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import MealSelector from "../ui/meal-selector";
import { PlusCircle } from "lucide-react";

export default function Planned() {
  const [selected, setSelected] = useState<string[]>([]);

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
          <div className="flex justify-end w-full">
            <Button className="flex gap-2 rounded-full w-32 " variant="outline">
              <PlusCircle /> add meal
            </Button>
          </div>

          <MealSelector
            selected={selected}
            setSelected={setSelected}
            meals={[
              {
                name: "turkey sandwhich",
                calories: 621,
                ingredients: [
                  "bread",
                  "turkey",
                  "cheese",
                  "mustard",
                  "hotsauce",
                  "mayonaise",
                ],
              },
              {
                name: "protein shake",
                calories: 830,
                ingredients: [
                  "protein powder",
                  "peanut butter",
                  "banana",
                  "olive oil",
                ],
              },
              {
                name: "bagel",
                calories: 320,
                ingredients: ["bagel", "cream cheese"],
              },
              {
                name: "turkey sandwhich",
                calories: 621,
                ingredients: [
                  "bread",
                  "turkey",
                  "cheese",
                  "mustard",
                  "hotsauce",
                  "mayonaise",
                ],
              },
              {
                name: "protein shake",
                calories: 830,
                ingredients: [
                  "protein powder",
                  "peanut butter",
                  "banana",
                  "olive oil",
                ],
              },
              {
                name: "bagel",
                calories: 320,
                ingredients: ["bagel", "cream cheese"],
              },
            ]}
          />
          <DialogFooter className="mt-3 gap-3">
            <Button variant="outline">Cancel</Button>
            <Button>Submit</Button>
            <Button className="bg-red-500">Remove Selected</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
