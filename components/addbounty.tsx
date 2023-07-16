"use client";

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
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Textarea } from "@/components/ui/textarea";
import { SiEthereum } from "react-icons/si";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Inter } from "next/font/google";
import { DatePicker } from "./datepicker";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import * as z from "zod";

const formSchema = z.object({
  title: z
    .string()
    .min(10, { message: "Title should be longer than 10 characters" })
    .max(200, { message: "Title should not be longer than 200 characters" }),
  description: z
    .string()
    .min(20, { message: "Description should be a minimum 20 characters" })
    .max(5000, { message: "Description should be a maximum 5000 characters" }),
  bounty: z
    .coerce
    .number({invalid_type_error:"Enter a valid number"})
    .min(0, { message: "Enter a valid bounty" })
    .max(10, { message: "Max bounties cannot be over 10ETH" }),
  date: z.date().min(new Date(), {
    message: "Selected deadline should not lie before today",
  }),
});

const inter = Inter({
  weight: "600",
  subsets: ["latin"],
});

export default function AddBounty() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex flex-row gap-1">
          <SiEthereum size={16} />{" "}
          <span className={`hidden sm:block ${inter.className}`}>
            Create bounty
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create a bounty</DialogTitle>
          <DialogDescription>
            Fill in the required information to create a new bounty, you must
            have appropriate funds to create one.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid gap-4 py-4"
          >
            <div>
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <>
                  <FormItem className="flex flex-row items-center gap-4">
                    <FormLabel htmlFor="title" className="text-right">
                      Title
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Develop a ..."
                        className="col-span-3"
                      />
                    </FormControl>
                  </FormItem>
                  <FormMessage />
                  </>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <>
                  <FormItem className="flex flex-row items-center gap-4">
                    <FormLabel htmlFor="description" className="text-right">
                      Description
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Example: Looking for an experiences Tensorflow Developer"
                        className="col-span-3"
                      />
                    </FormControl>
                  </FormItem>
                  <FormMessage />
                  </>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <>
                  <FormItem className="flex flex-row items-center gap-4">
                    <FormLabel htmlFor="description" className="text-right">
                      Deadline
                    </FormLabel>
                    <FormControl>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[280px] justify-start text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="text-slate-400 mr-2 h-4 w-4" />
                          <span className="text-slate-400">{field.value ? format(field.value, "PPP") : <>Pick a date</>}</span>
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date < new Date()
                        }
                        initialFocus
                      />
                      </PopoverContent>
                    </Popover>
                    </FormControl>
                  </FormItem>
                  <FormMessage />
                  </>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name="bounty"
                render={({ field }) => (
                  <>
                  <FormItem className="flex flex-row items-center gap-4">
                    <FormLabel htmlFor="bounty" className="text-right">
                      Bounty
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="0 ETH"
                        className="col-span-3"
                      />
                    </FormControl>
                  </FormItem>
                  <FormMessage />
                  </>
                )}
              />
            </div>
            <Button type="submit">Save changes</Button>
            
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
