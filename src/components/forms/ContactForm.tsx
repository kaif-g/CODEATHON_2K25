"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { MLSCmailId } from "../../constants";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Username must be at least 2 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitted(true);
    await new Promise((resolve) => setTimeout(resolve, 700));
    const { name, message } = values;
    const subject = encodeURIComponent(`Contact Form Submission - ${name}`);
    const body = encodeURIComponent(`${message}`);
    const mailTo = `https://mail.google.com/mail/?view=cm&fs=1&to=${MLSCmailId}&su=${subject}&body=${body}`;
    window.open(mailTo, "_blank");
    console.log(values);
    form.reset();
  }
  // ...

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="" {...field} />
                </FormControl>
                <FormDescription>
                  Describe your issue or share your feedback.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {isSubmitted && (
            <p className="p-4 text-green-500">
              Submit the form from your mail service provider opened in new tab
            </p>
          )}
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
