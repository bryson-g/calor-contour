"use client";

import Eaten from "../components/primary/eaten";
import Goal from "../components/primary/goal";
import Planned from "../components/primary/planned";
import ProgressButton from "../components/ui/progress-button";

export default function Content() {
  return (
    <div className="flex flex-col items-center gap-7 p-4">
      <Goal />
      <Eaten />
      <Planned />
    </div>
  );
}
