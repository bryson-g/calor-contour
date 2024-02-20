import EatUI from "./eat-ui";
import { getCreatedMeals } from "@/lib/meal-data-util";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default async function Plan() {
  let meals = await getCreatedMeals();

  return (
    <div className="w-screen h-screen p-5">
      <h1 className="font-bold text-3xl">Ate something?</h1>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="eaten">eaten</TabsTrigger>
          <TabsTrigger value="planned">planned</TabsTrigger>
          <TabsTrigger value="quick">quick</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}
