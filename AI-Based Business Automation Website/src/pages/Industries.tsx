import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Building2,
  ShoppingCart,
  Stethoscope,
  Landmark,
  Factory,
  Plane,
  GraduationCap,
  Home,
  ArrowRight,
  TrendingUp,
  Users,
  Target,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";

const industries = [
  {
    icon: Building2,
    title: "Enterprise & Corporate",
    description: "Transform large-scale operations with enterprise-grade automation solutions.",
    stats: { companies: "500+", efficiency: "85%", savings: "$2M+" },
    features: ["Multi-department workflows", "ERP integration", "Custom reporting", "Scalable infrastructure"],
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-500",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce & Retail",
    description: "Streamline online operations from order processing to customer service.",
    stats: { companies: "1,200+", efficiency: "90%", savings: "$5M+" },
    features: ["Order automation", "Inventory sync", "Customer support AI", "Dynamic pricing"],
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-500",
  },
  {
    icon: Stethoscope,
    title: "Healthcare & Medical",
    description: "HIPAA-compliant automation for better patient care and operational efficiency.",
    stats: { companies: "800+", efficiency: "75%", savings: "$3M+" },
    features: ["HIPAA compliant", "Patient scheduling", "Billing automation", "Telemedicine integration"],
    color: "from-red-500/20 to-rose-500/20",
    iconColor: "text-red-500",
  },
  {
    icon: Landmark,
    title: "Finance & Banking",
    description: "Secure automation for financial operations and regulatory compliance.",
    stats: { companies: "400+", efficiency: "80%", savings: "$10M+" },
    features: ["Data extraction", "Compliance automation", "Risk monitoring", "Fraud detection"],
    color: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-500",
  },
  {
    icon: Factory,
    title: "Manufacturing & Industrial",
    description: "Connected factory automation with real-time monitoring and predictive maintenance.",
    stats: { companies: "600+", efficiency: "70%", savings: "$8M+" },
    features: ["Production tracking", "Quality control", "Predictive maintenance", "Supply chain optimization"],
    color: "from-orange-500/20 to-amber-500/20",
    iconColor: "text-orange-500",
  },
  {
    icon: Plane,
    title: "Travel & Hospitality",
    description: "Smart booking systems and personalized guest experiences powered by AI.",
    stats: { companies: "900+", efficiency: "88%", savings: "$4M+" },
    features: ["Smart booking", "Guest automation", "Revenue optimization", "Loyalty programs"],
    color: "from-teal-500/20 to-cyan-500/20",
    iconColor: "text-teal-500",
  },
  {
    icon: GraduationCap,
    title: "Education & E-Learning",
    description: "Automated enrollment, grading, and personalized learning pathways.",
    stats: { companies: "1,500+", efficiency: "82%", savings: "$1.5M+" },
    features: ["Enrollment automation", "Grading assistance", "Learning analytics", "Student engagement"],
    color: "from-indigo-500/20 to-blue-500/20",
    iconColor: "text-indigo-500",
  },
  {
    icon: Home,
    title: "Real Estate & Property",
    description: "Automated lead nurturing, document processing, and smart property matching.",
    stats: { companies: "700+", efficiency: "78%", savings: "$2.5M+" },
    features: ["Lead nurturing", "Document processing", "Property matching", "Virtual tours"],
    color: "from-violet-500/20 to-purple-500/20",
    iconColor: "text-violet-500",
  },
];

const Industries = () => {
  const heroRef = useRef(null);
  const gridRef = useRef(null);
  const statsRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const gridInView = useInView(gridRef, { once: true, margin: "-100px" });
  const statsInView = useInView(statsRef, { once: true });
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
            INDUSTRIES WE SERVE
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6"
          >
            Powering <span className="gradient-text">Every Industry</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Discover how AI automation is transforming businesses across industries,
            driving efficiency, reducing costs, and unlocking new possibilities.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="section-padding bg-card/30">
        <div className="container-wide px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Building2, label: "Industries Served", value: "8+", description: "Diverse sectors" },
              { icon: Users, label: "Companies", value: "6,000+", description: "Trusted partners" },
              { icon: TrendingUp, label: "Average Efficiency", value: "82%", description: "Improvement rate" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl gradient-border hover-lift"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-display font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section ref={gridRef} className="section-padding">
        <div className="container-wide px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={gridInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Each industry has unique challenges. Our tailored automation solutions address
              your specific needs and deliver measurable results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full gradient-border hover-lift group cursor-pointer overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <CardHeader className="relative z-10">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <industry.icon className={`w-6 h-6 ${industry.iconColor}`} />
                    </div>
                    <CardTitle className="text-xl mb-2">{industry.title}</CardTitle>
                    <CardDescription className="text-sm">{industry.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Companies</span>
                        <span className="font-semibold text-foreground">{industry.stats.companies}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Efficiency</span>
                        <span className="font-semibold text-primary">{industry.stats.efficiency}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Savings</span>
                        <span className="font-semibold text-primary">{industry.stats.savings}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {industry.features.slice(0, 2).map((feature) => (
                        <span
                          key={feature}
                          className="px-2 py-1 rounded-full text-xs bg-muted text-muted-foreground"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full group/btn"
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

      {/* CTA Section */}
      <section className="section-padding bg-card/30">
        <div className="container-wide px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Target className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
              Join thousands of companies already using AI automation to drive growth
              and efficiency. Let's discuss your specific industry needs.
            </p>
            <Button
              variant="hero"
              size="lg"
              className="group"
              onClick={() => setIsContactFormOpen(true)}
            >
              Get Started Today
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

export default Industries;

