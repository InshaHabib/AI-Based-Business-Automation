import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  return (
    <section ref={ref} className="section-padding">
      <div className="container-wide px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-90" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(0_0%_100%/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(0_0%_100%/0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />

          {/* Floating elements */}
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white/10 blur-xl animate-float" />
          <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-white/10 blur-xl animate-float" style={{ animationDelay: "2s" }} />

          {/* Content */}
          <div className="relative z-10 py-16 md:py-24 px-8 md:px-16 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-8"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">
                Start your free trial today
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-6 max-w-3xl mx-auto"
            >
              Ready to Transform Your Business?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl mx-auto mb-10"
            >
              Join thousands of companies already using AutomateAI to streamline
              operations and accelerate growth. No credit card required.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="xl"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-xl"
                onClick={() => navigate("/contact")}
              >
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                onClick={() => navigate("/book-demo")}
              >
                Schedule Demo
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
