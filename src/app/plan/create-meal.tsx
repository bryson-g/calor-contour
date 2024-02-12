import { Button } from "@/components/ui/button";
import CaloriePicker from "@/components/ui/calorie-picker";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckSquare2Icon, PlusCircle, SquareIcon } from "lucide-react";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function CreateMeal() {
  const [calories, setCalories] = useState<number>(0);
  const [addToPlan, setAddToPlan] = useState<boolean>(true);

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="flex gap-2 rounded-full" variant="outline">
          <PlusCircle /> create
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-[90%] flex flex-col gap-3">
          <div>
            <Label htmlFor="mealName"> meal name </Label>
            <Input placeholder="ex. turkey sandwich" id="mealName" />
          </div>

          <div>
            <Label htmlFor="ingredients"> ingredients </Label>
            <Textarea id="ingredients" placeholder="ex. turkey, cheese, etc" />
          </div>

          <Label> calories </Label>
          <div className="border rounded-lg p-5">
            <CaloriePicker calories={calories} setCalories={setCalories} />
          </div>

          <DrawerFooter>
            <RadioGroup>
              <Button
                onClick={() => setAddToPlan(!addToPlan)}
                className="flex justify-start gap-2"
                variant="ghost"
                size="sm"
              >
                {addToPlan ? <CheckSquare2Icon /> : <SquareIcon />}
                add to plan after creation
              </Button>
            </RadioGroup>

            <Button>create meal</Button>
            <DrawerClose asChild>
              <Button variant="outline">cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
