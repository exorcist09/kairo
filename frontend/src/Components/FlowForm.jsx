import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Spline, XIcon } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";

const FlowForm = ({ onClose, onCreate }) => {
  const form = useForm({
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const handleSubmit = (data) => {
    if (!data.name.trim()) return; // name is required
    onCreate({ title: data.name, description: data.description || "" });
    onClose();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Spline className="h-5 w-5 text-blue-600" />
          <h2 className="text-lg font-semibold">Create Workflow</h2>
        </div>

        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
          aria-label="Close form"
          type="button"
        >
          <XIcon className="h-5 w-5" />
        </button>
      </div>
      <Separator className="h-[1px] w-full bg-gray-300 my-4" />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            rules={{ required: "Workflow name is required" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Title <span className="text-sm text-blue-600">(required)</span>
                </FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter unique workflow name" autoFocus />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Description <span className="text-sm text-muted-foreground">(optional)</span>
                </FormLabel>
                <FormControl>
                  <Textarea {...field} placeholder="Brief description" rows={3} className="resize-none" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end">
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
              Create
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default FlowForm;
