import ProgressButton from "../ui/progress-button";
import {
  Dialog,
  DialogContent, DialogTrigger
} from "@/components/ui/dialog";


export default function Planned() {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <ProgressButton amount={0} label={"planned"} />
        </DialogTrigger>
        <VisuallyHidden>

        </VisuallyHidden>
        <DialogContent>
        </DialogContent>
      </Dialog>
    </div>
  );
}
