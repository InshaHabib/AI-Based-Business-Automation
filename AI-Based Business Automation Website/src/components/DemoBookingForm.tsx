import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { CheckCircle2, Loader2, Calendar as CalendarIcon, Clock } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const demoBookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name is required"),
  phone: z.string().optional(),
  date: z.date({
    required_error: "Please select a date",
  }).refine((date) => date >= new Date(new Date().setHours(0, 0, 0, 0)), {
    message: "Date must be today or in the future",
  }),
  time: z.string().min(1, "Please select a time"),
  additionalNotes: z.string().optional(),
});

type DemoBookingFormValues = z.infer<typeof demoBookingSchema>;

interface DemoBookingFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// Generate time slots (9 AM to 5 PM, every hour)
const timeSlots = Array.from({ length: 9 }, (_, i) => {
  const hour = 9 + i;
  const period = hour >= 12 ? "PM" : "AM";
  const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
  return {
    value: `${hour.toString().padStart(2, "0")}:00`,
    label: `${displayHour}:00 ${period}`,
  };
});

export const DemoBookingForm = ({ open, onOpenChange }: DemoBookingFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<DemoBookingFormValues>({
    resolver: zodResolver(demoBookingSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      date: undefined,
      time: "",
      additionalNotes: "",
    },
  });

  const onSubmit = async (data: DemoBookingFormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    form.reset();
    
    // Auto-close after 3 seconds
    setTimeout(() => {
      setIsSuccess(false);
      onOpenChange(false);
    }, 3000);
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setIsSuccess(false);
      form.reset();
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[550px] max-h-[90vh] overflow-y-auto gradient-border bg-card/95 backdrop-blur-xl">
        {!isSuccess ? (
          <>
            <DialogHeader className="sticky top-0 bg-card/95 backdrop-blur-xl pb-4 z-10">
              <DialogTitle className="font-display text-2xl font-bold text-foreground">
                Schedule a Demo
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Book a personalized demo and see how our automation platform can transform your business.
              </DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John Doe"
                          {...field}
                          disabled={isSubmitting}
                          className="bg-background/50 border-input"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="john@example.com"
                          {...field}
                          disabled={isSubmitting}
                          className="bg-background/50 border-input"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Acme Inc."
                          {...field}
                          disabled={isSubmitting}
                          className="bg-background/50 border-input"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone (Optional)</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          {...field}
                          disabled={isSubmitting}
                          className="bg-background/50 border-input"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full h-10 pl-3 text-left font-normal bg-background/50 border-input justify-start",
                                  !field.value && "text-muted-foreground"
                                )}
                                disabled={isSubmitting}
                                type="button"
                              >
                                <CalendarIcon className="mr-2 h-4 w-4 opacity-50" />
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0 bg-popover border-border" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date < new Date(new Date().setHours(0, 0, 0, 0))
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Time</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                          disabled={isSubmitting}
                        >
                          <FormControl>
                            <SelectTrigger className="h-10 bg-background/50 border-input">
                              <div className="flex items-center">
                                <Clock className="mr-2 h-4 w-4 opacity-50" />
                                <SelectValue placeholder="Select time" />
                              </div>
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {timeSlots.map((slot) => (
                              <SelectItem key={slot.value} value={slot.value}>
                                {slot.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="additionalNotes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Notes (Optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us what you'd like to see in the demo..."
                          className="min-h-[100px] bg-background/50 border-input resize-none"
                          {...field}
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex gap-3 pt-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleClose}
                    disabled={isSubmitting}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="hero"
                    disabled={isSubmitting}
                    className="flex-1"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Booking...
                      </>
                    ) : (
                      "Schedule Demo"
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center justify-center py-8 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4"
            >
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </motion.div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">
              Demo Scheduled!
            </h3>
            <p className="text-muted-foreground mb-6">
              We've received your request. Our team will contact you shortly to confirm your demo appointment.
            </p>
            <Button
              variant="hero"
              onClick={handleClose}
              className="w-full"
            >
              Close
            </Button>
          </motion.div>
        )}
      </DialogContent>
    </Dialog>
  );
};

