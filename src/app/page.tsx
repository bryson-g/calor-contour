import ProgressButton from "@/components/ui/progress-button";
import { Goal } from "lucide-react";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-between p-8">
      <ProgressButton amount={0} label="left" redirect="/edit" />
      <ProgressButton amount={0} label="eaten" redirect="/eat" />
      <ProgressButton amount={0} label="planned" redirect="/plan" />
    </div>
  );
}
