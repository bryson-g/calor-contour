import { forwardRef } from "react";
import { Button } from "../ui/button";
import ProgressButton from "../ui/progress-button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import MealCard from "./meal-card";
import MealSelector from "../ui/meal-selector";

export default function Planned() {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <ProgressButton amount={0} label={"planned"} />
        </DialogTrigger>
        <DialogContent>
          <DialogTitle className="text-center">planned</DialogTitle>
          <DialogHeader>edit your meals</DialogHeader>
          <MealSelector
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
          {/* <DialogHeader>edit your meals</DialogHeader> */}
        </DialogContent>
      </Dialog>
    </div>
  );
}
