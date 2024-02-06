"use client";

import Eaten from "../components/primary/eaten";
import Goal from "../components/primary/goal";
import Planned from "@/components/primary/planned";

export default function Content() {
  return (
    <div className="flex flex-col items-center justify-around h-full">
      <Goal />
      <Eaten />
      <Planned />
    </div>
  );
}
