"use client";

export default function MealCard({ name, calories, ingredients }: Meal) {
  return (
    <div className="flex p-3 gap-3 w-full">
      <div className="min-w-[150px]">
        <div className="font-semibold">{name}</div>
        <div className="text-[14px] font-light">{calories} calories</div>
      </div>
      <div className="text-wrap">{ingredients?.join(", ")}</div>
    </div>
  );
}

export type Meal = {
  name?: string;
  calories?: number;
  ingredients?: string[];
};
