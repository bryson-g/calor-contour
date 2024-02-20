"use client";

import { Button } from "@/components/ui/button";
import { Meal } from "@/components/ui/meal-card";
import MealSelector from "@/components/ui/meal-selector";
import { useState } from "react";
import { RefrigeratorIcon, SandwichIcon, CalendarIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export default function EatUI({ createdMeals }: { createdMeals: Meal[] }) {
  const [selected, setSelected] = useState<Meal[]>([]);
  const [eatenDraft, setEatenDraft] = useState<Meal[]>([]);

  return (
    <div className="w-full flex flex-col max-w-[500px] items-start">
      <div className="flex justify-end gap-3 mb-3 w-full">
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
      </div>
      <div className="h-[50vh] w-full">
        <MealSelector
          meals={eatenDraft}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
      <div className="flex flex-col w-full gap-3 mt-8 ">
        <Button type="submit">confirm</Button>
        <Button variant="outline">cancel</Button>
      </div>
    </div>
  );
}
