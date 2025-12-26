import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Check,
  X,
  ArrowRight,
  Zap,
  Rocket,
  Building2,
  Sparkles,
  HelpCircle,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ContactForm } from "@/components/ContactForm";
import { DemoBookingForm } from "@/components/DemoBookingForm";

const plans = [
  {
    name: "Starter",
    icon: Zap,
    price: "$499",
    period: "month",
    description: "Perfect for small businesses getting started with automation",
    features: [
      "Up to 5 workflows",
      "Basic AI automation",
      "Email support",
      "10,000 actions/month",
      "Standard integrations",
      "Basic analytics",
    ],
    popular: false,
    cta: "Get Started",
  },
  {
    name: "Professional",
    icon: Rocket,
    price: "$1,499",
    period: "month",
    description: "Ideal for growing businesses with advanced automation needs",
    features: [
      "Unlimited workflows",
      "Advanced AI automation",
      "Priority support",
      "100,000 actions/month",
      "Premium integrations",
      "Advanced analytics",
      "Custom workflows",
      "API access",
    ],
    popular: true,
    cta: "Most Popular",
  },
  {
    name: "Enterprise",
    icon: Building2,
    price: "Custom",
    period: "",
    description: "Tailored solutions for large organizations with complex requirements",
    features: [
      "Unlimited everything",
      "Enterprise AI models",
      "Dedicated support",
      "Unlimited actions",
      "Custom integrations",
      "Advanced analytics & BI",
      "White-label options",
      "SLA guarantee",
      "On-premise deployment",
      "Custom training",
    ],
    popular: false,
    cta: "Contact Sales",
  },
];

const comparisonFeatures = [
  {
    feature: "Workflows",
    starter: "Up to 5",
    professional: "Unlimited",
    enterprise: "Unlimited",
  },
  {
    feature: "AI Automation",
    starter: "Basic",
    professional: "Advanced",
    enterprise: "Enterprise",
  },
  {
    feature: "Actions per Month",
    starter: "10,000",
    professional: "100,000",
    enterprise: "Unlimited",
  },
  {
    feature: "Integrations",
    starter: "Standard",
    professional: "Premium",
    enterprise: "Custom",
  },
  {
    feature: "Support",
    starter: "Email",
    professional: "Priority",
    enterprise: "Dedicated",
  },
  {
    feature: "Analytics",
    starter: "Basic",
    professional: "Advanced",
    enterprise: "Advanced + BI",
  },
  {
    feature: "Custom Workflows",
    starter: false,
    professional: true,
    enterprise: true,
  },
  {
    feature: "API Access",
    starter: false,
    professional: true,
    enterprise: true,
  },
  {
    feature: "White-label Options",
    starter: false,
    professional: false,
    enterprise: true,
  },
  {
    feature: "SLA Guarantee",
    starter: false,
    professional: false,
    enterprise: true,
  },
  {
    feature: "On-premise Deployment",
    starter: false,
    professional: false,
    enterprise: true,
  },
  {
    feature: "Custom Training",
    starter: false,
    professional: false,
    enterprise: true,
  },
];

const Pricing = () => {
  const heroRef = useRef(null);
  const plansRef = useRef(null);
  const tableRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const plansInView = useInView(plansRef, { once: true, margin: "-100px" });
  const tableInView = useInView(tableRef, { once: true, margin: "-100px" });
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px]" />
        </div>

        <div className="container-wide relative z-10 px-4 md:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-primary font-semibold mb-4"
          >
            PRICING PLANS
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6"
          >
            Choose Your <span className="gradient-text">Automation Plan</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Flexible pricing plans designed to scale with your business.
            Start small and grow as your automation needs evolve.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section ref={plansRef} className="section-padding">
        <div className="container-wide px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={plansInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {plan.popular && (
                  <Badge className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 bg-gradient-to-r from-primary to-secondary text-primary-foreground border-0">
                    Most Popular
                  </Badge>
                )}
                <Card className={`h-full gradient-border hover-lift ${plan.popular ? "ring-2 ring-primary" : ""}`}>
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center ${plan.popular ? "scale-110" : ""} transition-transform duration-300`}>
                      <plan.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                    <CardDescription className="text-base mb-4">{plan.description}</CardDescription>
                    <div className="flex items-baseline justify-center gap-2 mb-2">
                      <span className="text-5xl font-display font-bold gradient-text">
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-muted-foreground">/{plan.period}</span>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant={plan.popular ? "hero" : "outline"}
                      className="w-full group"
                      size="lg"
                      onClick={() => {
                        if (plan.name === "Enterprise") {
                          setIsContactFormOpen(true);
                        } else {
                          setIsDemoFormOpen(true);
                        }
                      }}
                    >
                      {plan.cta}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section ref={tableRef} className="section-padding bg-card/30">
        <div className="container-wide px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={tableInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
              Compare Plans
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Detailed feature comparison to help you choose the right plan for your needs.
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <Card className="gradient-border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">Feature</TableHead>
                    <TableHead className="text-center">Starter</TableHead>
                    <TableHead className="text-center">Professional</TableHead>
                    <TableHead className="text-center">Enterprise</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonFeatures.map((item, index) => (
                    <TableRow key={index} className="hover:bg-muted/50 transition-colors">
                      <TableCell className="font-medium">{item.feature}</TableCell>
                      <TableCell className="text-center">
                        {typeof item.starter === "boolean" ? (
                          item.starter ? (
                            <Check className="w-5 h-5 text-primary mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-muted-foreground mx-auto" />
                          )
                        ) : (
                          <span className="text-sm">{item.starter}</span>
                        )}
                      </TableCell>
                      <TableCell className="text-center">
                        {typeof item.professional === "boolean" ? (
                          item.professional ? (
                            <Check className="w-5 h-5 text-primary mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-muted-foreground mx-auto" />
                          )
                        ) : (
                          <span className="text-sm">{item.professional}</span>
                        )}
                      </TableCell>
                      <TableCell className="text-center">
                        {typeof item.enterprise === "boolean" ? (
                          item.enterprise ? (
                            <Check className="w-5 h-5 text-primary mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-muted-foreground mx-auto" />
                          )
                        ) : (
                          <span className="text-sm">{item.enterprise}</span>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-wide px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to know about our pricing and plans.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "Can I change plans later?",
                answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any differences.",
              },
              {
                question: "What happens if I exceed my action limit?",
                answer: "We'll notify you when you're approaching your limit. You can upgrade your plan or purchase additional actions as needed.",
              },
              {
                question: "Do you offer discounts for annual plans?",
                answer: "Yes! Annual plans receive a 20% discount compared to monthly billing. Contact us for more details.",
              },
              {
                question: "Is there a free trial?",
                answer: "Yes! All plans come with a 14-day free trial. No credit card required. Start automating today!",
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and wire transfers for Enterprise customers.",
              },
              {
                question: "Can I get a custom plan?",
                answer: "Absolutely! Enterprise customers can work with our team to create a custom plan tailored to their specific needs.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="gradient-border hover-lift h-full">
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <HelpCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <CardTitle className="text-lg">{faq.question}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{faq.answer}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-card/30">
        <div className="container-wide px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
              Start your 14-day free trial today. No credit card required.
              Experience the power of AI automation risk-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="hero"
                size="lg"
                className="group"
                onClick={() => setIsDemoFormOpen(true)}
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group"
                onClick={() => setIsContactFormOpen(true)}
              >
                Contact Sales
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactForm
        open={isContactFormOpen}
        onOpenChange={setIsContactFormOpen}
      />
      <DemoBookingForm
        open={isDemoFormOpen}
        onOpenChange={setIsDemoFormOpen}
      />

      <Footer />
    </main>
  );
};

export default Pricing;

