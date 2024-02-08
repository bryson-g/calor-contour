import { Button } from "@/components/ui/button";
import CaloriePicker from "@/components/ui/calorie-picker";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PlusCircle } from "lucide-react";
import { useState } from "react";

export default function CreateMeal() {
  const [calories, setCalories] = useState<number>(0);

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="flex gap-2 rounded-full" variant="outline">
          <PlusCircle /> create
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm flex flex-col items-center">
          <DrawerHeader>
            <DrawerTitle>create meal</DrawerTitle>
            <DrawerDescription>
              set name, calories, and ingredients of your meal
            </DrawerDescription>
          </DrawerHeader>

          {/* // todo : fix styling here */}
          <Label htmlFor="mealName"> Meal Name </Label>
          <Input placeholder="meal name" id="mealName" />
          <Textarea placeholder="seperate ingredients by comma: turkey, cheese, etc" />
          <CaloriePicker calories={calories} setCalories={setCalories} />

          <DrawerFooter className="mt-5">
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
