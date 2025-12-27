import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { CheckCircle2, Loader2, Calendar as CalendarIcon, Clock, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
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

const BookDemo = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const form = useForm<DemoBookingFormValues>({
    resolver: zodResolver(demoBookingSchema),
    mode: "onChange",
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
    
    console.log(data);
    setIsSubmitting(false);
    setIsSuccess(true);
    form.reset();
    
    // Redirect after 3 seconds
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container max-w-3xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>

          {!isSuccess ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="glass rounded-3xl p-8 md:p-12"
            >
              <div className="mb-8">
                <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Schedule a <span className="gradient-text">Demo</span>
                </h1>
                <p className="text-muted-foreground text-lg">
                  Book a personalized demo and see how our automation platform can transform your business.
                </p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                              className="bg-background/50 border-input h-12"
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
                              className="bg-background/50 border-input h-12"
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
                              className="bg-background/50 border-input h-12"
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
                              className="bg-background/50 border-input h-12"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Preferred Date</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant="outline"
                                  className={cn(
                                    "w-full h-12 pl-3 text-left font-normal bg-background/50 border-input justify-start",
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
                          <FormLabel>Preferred Time</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                            disabled={isSubmitting}
                          >
                            <FormControl>
                              <SelectTrigger className="h-12 bg-background/50 border-input">
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
                            className="min-h-[120px] bg-background/50 border-input resize-none"
                            {...field}
                            disabled={isSubmitting}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex gap-3 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => navigate(-1)}
                      disabled={isSubmitting}
                      className="flex-1 h-12"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      variant="hero"
                      disabled={isSubmitting}
                      className="flex-1 h-12"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin mr-2" />
                          Booking...
                        </>
                      ) : (
                        "Schedule Demo"
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-3xl p-12 flex flex-col items-center justify-center text-center min-h-[500px]"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6"
              >
                <CheckCircle2 className="w-12 h-12 text-primary" />
              </motion.div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-3">
                Demo Scheduled!
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We've received your request. Our team will contact you shortly to confirm your demo appointment.
              </p>
              <Button
                variant="hero"
                onClick={() => navigate("/")}
                className="min-w-[200px]"
              >
                Back to Home
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BookDemo;
