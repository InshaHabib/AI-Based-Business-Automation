import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, ArrowLeft } from "lucide-react";
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

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
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
        <div className="container max-w-2xl mx-auto">
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
                  Get in <span className="gradient-text">Touch</span>
                </h1>
                <p className="text-muted-foreground text-lg">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                        <FormLabel>Company (Optional)</FormLabel>
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
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your automation needs..."
                            className="min-h-[160px] bg-background/50 border-input resize-none"
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
                          Sending...
                        </>
                      ) : (
                        "Send Message"
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
                Message Sent!
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Thank you for contacting us. We'll get back to you soon.
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

export default Contact;
