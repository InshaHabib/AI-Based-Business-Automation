import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  DollarSign,
  Clock,
  Users,
  Building2,
  ShoppingCart,
  Stethoscope,
  Factory,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/ContactForm";

const caseStudies = [
  {
    id: 1,
    company: "TechCorp Global",
    industry: "Enterprise",
    icon: Building2,
    logo: "TC",
    challenge: "Managing complex workflows across 15 departments with manual processes causing delays and errors.",
    solution: "Implemented unified automation platform connecting ERP, CRM, and internal systems with AI-powered workflow orchestration.",
    results: [
      { metric: "Process Efficiency", value: "85%", improvement: "+65%" },
      { metric: "Cost Savings", value: "$2.5M", improvement: "Annual" },
      { metric: "Time Saved", value: "40hrs/week", improvement: "Per team" },
      { metric: "Error Reduction", value: "92%", improvement: "-88%" },
    ],
    timeline: [
      { phase: "Discovery & Planning", duration: "2 weeks", status: "completed" },
      { phase: "System Integration", duration: "4 weeks", status: "completed" },
      { phase: "AI Model Training", duration: "3 weeks", status: "completed" },
      { phase: "Deployment & Testing", duration: "2 weeks", status: "completed" },
      { phase: "Go Live & Support", duration: "Ongoing", status: "active" },
    ],
    tags: ["Workflow Automation", "ERP Integration", "AI Orchestration"],
  },
  {
    id: 2,
    company: "ShopEasy Retail",
    industry: "E-Commerce",
    icon: ShoppingCart,
    logo: "SE",
    challenge: "Manual order processing and inventory management causing delays and stockouts during peak seasons.",
    solution: "Deployed automated order fulfillment system with real-time inventory sync and AI-powered demand forecasting.",
    results: [
      { metric: "Order Processing", value: "95%", improvement: "+70%" },
      { metric: "Revenue Increase", value: "$8M", improvement: "+35%" },
      { metric: "Inventory Accuracy", value: "98%", improvement: "+45%" },
      { metric: "Customer Satisfaction", value: "4.8/5", improvement: "+1.2" },
    ],
    timeline: [
      { phase: "Requirements Analysis", duration: "1 week", status: "completed" },
      { phase: "Platform Setup", duration: "3 weeks", status: "completed" },
      { phase: "Integration & Testing", duration: "2 weeks", status: "completed" },
      { phase: "Pilot Launch", duration: "1 week", status: "completed" },
      { phase: "Full Rollout", duration: "Ongoing", status: "active" },
    ],
    tags: ["Order Automation", "Inventory Management", "AI Forecasting"],
  },
  {
    id: 3,
    company: "HealthCare Plus",
    industry: "Healthcare",
    icon: Stethoscope,
    logo: "HP",
    challenge: "Administrative tasks consuming 40% of staff time, reducing patient care quality.",
    solution: "HIPAA-compliant automation for scheduling, billing, and patient communication with AI triage assistance.",
    results: [
      { metric: "Admin Time Saved", value: "60%", improvement: "+40%" },
      { metric: "Patient Throughput", value: "45%", improvement: "+30%" },
      { metric: "Billing Accuracy", value: "96%", improvement: "+28%" },
      { metric: "Cost Reduction", value: "$1.8M", improvement: "Annual" },
    ],
    timeline: [
      { phase: "Compliance Review", duration: "2 weeks", status: "completed" },
      { phase: "System Development", duration: "5 weeks", status: "completed" },
      { phase: "Staff Training", duration: "2 weeks", status: "completed" },
      { phase: "Pilot Program", duration: "3 weeks", status: "completed" },
      { phase: "Full Implementation", duration: "Ongoing", status: "active" },
    ],
    tags: ["HIPAA Compliance", "Patient Scheduling", "Billing Automation"],
  },
  {
    id: 4,
    company: "ManufacturePro",
    industry: "Manufacturing",
    icon: Factory,
    logo: "MP",
    challenge: "Fragmented production tracking and quality control leading to defects and delays.",
    solution: "Connected factory automation with IoT sensors, real-time monitoring, and predictive maintenance AI.",
    results: [
      { metric: "Production Efficiency", value: "78%", improvement: "+42%" },
      { metric: "Defect Rate", value: "0.5%", improvement: "-85%" },
      { metric: "Downtime Reduction", value: "70%", improvement: "-65%" },
      { metric: "Cost Savings", value: "$5.2M", improvement: "Annual" },
    ],
    timeline: [
      { phase: "Factory Assessment", duration: "2 weeks", status: "completed" },
      { phase: "IoT Deployment", duration: "6 weeks", status: "completed" },
      { phase: "AI Model Development", duration: "4 weeks", status: "completed" },
      { phase: "Integration & Testing", duration: "3 weeks", status: "completed" },
      { phase: "Production Rollout", duration: "Ongoing", status: "active" },
    ],
    tags: ["IoT Integration", "Predictive Maintenance", "Quality Control"],
  },
];

const CaseStudies = () => {
  const heroRef = useRef(null);
  const gridRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const gridInView = useInView(gridRef, { once: true, margin: "-100px" });
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

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
            SUCCESS STORIES
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6"
          >
            Real Results from <span className="gradient-text">Real Companies</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            See how leading companies across industries have transformed their operations
            with AI-powered automation solutions.
          </motion.p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section ref={gridRef} className="section-padding">
        <div className="container-wide px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 30 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full gradient-border hover-lift group cursor-pointer overflow-hidden">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <caseStudy.icon className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl mb-1">{caseStudy.company}</CardTitle>
                          <Badge variant="outline" className="text-xs">
                            {caseStudy.industry}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-base mb-4">
                      <strong className="text-foreground">Challenge:</strong> {caseStudy.challenge}
                    </CardDescription>
                    <CardDescription className="text-base">
                      <strong className="text-foreground">Solution:</strong> {caseStudy.solution}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {/* Results Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {caseStudy.results.map((result, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-lg bg-muted/50 border border-border group-hover:border-primary/30 transition-colors"
                        >
                          <div className="text-xs text-muted-foreground mb-1">{result.metric}</div>
                          <div className="text-2xl font-bold gradient-text mb-1">{result.value}</div>
                          <div className="text-xs text-primary font-medium">{result.improvement}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {caseStudy.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Timeline Section */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-sm text-foreground mb-3">Implementation Timeline</h4>
                      <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
                        {caseStudy.timeline.map((item, idx) => (
                          <div key={idx} className="relative pl-10 pb-6 last:pb-0">
                            {/* Timeline Dot */}
                            <div className={`absolute left-3 top-1 w-2 h-2 rounded-full ${
                              item.status === "completed" 
                                ? "bg-primary ring-4 ring-primary/20" 
                                : "bg-primary animate-pulse ring-4 ring-primary/20"
                            }`} />
                            
                            {/* Content */}
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1">
                                <div className="font-medium text-sm text-foreground mb-1">
                                  {item.phase}
                                </div>
                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                  <Clock className="w-3 h-3" />
                                  {item.duration}
                                </div>
                              </div>
                              {item.status === "completed" && (
                                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full mt-6 group/btn"
                      onClick={() => setIsContactFormOpen(true)}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-card/30">
        <div className="container-wide px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
              Proven Track Record
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our automation solutions deliver measurable results across all industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: TrendingUp, value: "82%", label: "Avg. Efficiency Gain" },
              { icon: DollarSign, value: "$50M+", label: "Total Savings" },
              { icon: Clock, value: "60%", label: "Time Saved" },
              { icon: Users, value: "6,000+", label: "Companies Served" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl gradient-border hover-lift"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-display font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-wide px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
              Join thousands of companies transforming their operations with AI automation.
              Let's discuss how we can help you achieve similar results.
            </p>
            <Button
              variant="hero"
              size="lg"
              className="group"
              onClick={() => setIsContactFormOpen(true)}
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      <ContactForm
        open={isContactFormOpen}
        onOpenChange={setIsContactFormOpen}
      />

      <Footer />
    </main>
  );
};

export default CaseStudies;

