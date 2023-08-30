import React from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const formSchema = z.object({
  date: z.date({
    required_error: "Please select a date and time",
    invalid_type_error: "That's not a date!",
  }),
  session: z.string({
    required_error: "Please select a session",
  }),
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(50, {
      message: "Name cannot have more than 50 characters.",
    }),
  contact: z
    .string({
      required_error: "Please enter a contact number",
    })
    .min(10, {
      message: "Contact number must be 10 digits.",
    })
    .max(10, {
      message: "Contact number must be 10 digits.",
    }),
});

function BookingForm() {
  const today = new Date();
  const yesterday = today.setDate(today.getDate() - 1);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date: new Date(),
      session: "08:00 AM - 12:00 PM",
      name: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="flex items-center justify-center mb-10">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 w-full">
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex justify-center text-lg font-semibold">
                Select the Date
              </FormLabel>
              <FormControl>
                <Calendar
                  className="border rounded-lg"
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  // disabled={(date) =>
                  //   date < yesterday
                  // }
                  // initialFocus
                />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="session"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex justify-center text-lg font-semibold">
                Select Session
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a session" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="08:00 AM - 12:00 PM">
                    08:00 AM - 12:00 PM
                  </SelectItem>
                  <SelectItem value="03:00 PM - 05:00 PM">
                    03:00 PM - 05:00 PM
                  </SelectItem>
                  <SelectItem value="07:00 PM - 10:00 PM">
                    07:00 PM - 10:00 PM
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex justify-center text-lg font-semibold">
                Patient Name
              </FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="contact"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex justify-center text-lg font-semibold">
                Contact Number
              </FormLabel>
              <FormControl>
                <Input type="number" placeholder="0712345678" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center">
          <Button className="w-full rounded-md font-bold text-md" type="submit">Submit</Button>
        </div>
      </form>
    </Form>
    </div>
  );
}

export default BookingForm;
