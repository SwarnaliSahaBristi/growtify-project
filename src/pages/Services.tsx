import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { Globe, Search, Megaphone, BarChart3, Palette, ShieldCheck, ArrowRight, Check } from "lucide-react";

const services = [
  { icon: Globe, title: "Web Development", desc: "Custom-built, blazing-fast websites and web apps using modern frameworks. Responsive, accessible, and conversion-optimized.", features: ["React & Next.js", "E-commerce", "Custom CMS", "API Integration"] },
  { icon: Search, title: "SEO Optimization", desc: "Data-backed SEO strategies that put you on page one. Technical SEO, content strategy, and link building.", features: ["Technical Audits", "Keyword Research", "Content Strategy", "Link Building"] },
  { icon: Megaphone, title: "Online Advertising", desc: "ROI-focused campaigns across Google Ads, Meta, LinkedIn, and more. We maximize every dollar.", features: ["Google Ads", "Social Ads", "Retargeting", "A/B Testing"] },
  { icon: BarChart3, title: "Analytics & Insights", desc: "Understand your data. We set up tracking, dashboards, and reporting that drive smarter decisions.", features: ["GA4 Setup", "Custom Dashboards", "Conversion Tracking", "Monthly Reports"] },
  { icon: Palette, title: "Brand & Design", desc: "Memorable brand identities that stand out. Logo design, brand guidelines, and visual systems.", features: ["Logo Design", "Brand Guidelines", "UI/UX Design", "Design Systems"] },
  { icon: ShieldCheck, title: "Growth Strategy", desc: "Holistic growth planning that ties everything together. Market research, funnel optimization, and scaling.", features: ["Market Research", "Funnel Design", "CRO", "Scaling Plans"] },
];

const plans = [
  {
    name: "Starter",
    price: "$1,499",
    period: "/month",
    desc: "Perfect for startups and small businesses getting started.",
    features: ["5-page Website", "Basic SEO Setup", "Monthly Report", "Email Support", "1 Ad Campaign"],
    popular: false,
  },
  {
    name: "Growth",
    price: "$3,499",
    period: "/month",
    desc: "For businesses ready to scale their digital presence.",
    features: ["Custom Website", "Advanced SEO", "Weekly Reports", "Priority Support", "3 Ad Campaigns", "A/B Testing", "CRO Optimization"],
    popular: true,
  },
  {
    name: "Premium",
    price: "$6,999",
    period: "/month",
    desc: "Full-service digital growth for ambitious companies.",
    features: ["Enterprise Website", "Full SEO Suite", "Real-time Dashboard", "Dedicated Manager", "Unlimited Campaigns", "Brand Strategy", "Custom Integrations", "24/7 Support"],
    popular: false,
  },
];

const Services = () => (
  <div className="overflow-hidden">
    {/* Hero */}
    <section className="section-padding hero-gradient">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-6">
            Our Services
          </span>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            Growth Solutions <span className="gradient-text">That Deliver</span>
          </h1>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            End-to-end digital services designed to transform your business. We combine strategy, technology, and creativity.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Services Grid */}
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-8 h-full group"
              >
                <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-primary/25 transition-shadow">
                  <s.icon className="text-primary-foreground" size={24} />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.desc}</p>
                <ul className="space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                      <Check size={14} className="text-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Pricing */}
    <section className="section-padding bg-card/50">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="Pricing Plans"
          title="Transparent Pricing, Real Results"
          description="Choose a plan that fits your goals. All plans include a dedicated strategist and monthly reviews."
        />
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <AnimatedSection key={plan.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className={`rounded-2xl p-8 h-full flex flex-col ${
                  plan.popular
                    ? "gradient-border bg-card shadow-xl shadow-primary/10"
                    : "glass-card"
                }`}
              >
                {plan.popular && (
                  <span className="inline-block self-start px-3 py-1 rounded-full text-xs font-semibold gradient-bg text-primary-foreground mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className="font-heading font-bold text-xl text-foreground">{plan.name}</h3>
                <div className="mt-4 mb-2">
                  <span className="text-4xl font-heading font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-6">{plan.desc}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                      <Check size={14} className="text-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.popular ? "gradient" : "outline"}
                  size="lg"
                  className="w-full"
                  asChild
                >
                  <Link to="/contact">Get Started</Link>
                </Button>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Not sure which plan fits? <span className="gradient-text">Let's talk.</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Book a free 30-minute consultation and we'll craft a custom solution for your business.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">Book Free Call <ArrowRight className="ml-2" /></Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default Services;
