import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import {SiEthereum} from "react-icons/si"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Inter } from "next/font/google";
import { DatePicker } from "./datepicker";

const inter = Inter({
  weight: "600",
  subsets: ["latin"],
});
export default function AddBounty() {
  return (
    <Dialog>
      <DialogTrigger asChild>
      <Button className="flex flex-row gap-1"><SiEthereum size={16}/> <span className={`hidden sm:block ${inter.className}`}>Create bounty</span></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create a bounty</DialogTitle>
          <DialogDescription>
            Fill in the required information to create a new bounty, you must have appropriate funds to create one.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" placeholder="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Textarea id="description" placeholder="Example: Looking for an experienced Tensorflow Developer" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="date" className="text-right">
              Final Date
            </Label>
            <DatePicker />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
