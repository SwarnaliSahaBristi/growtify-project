import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { FloatingElement } from "@/components/FloatingElement";
import { Globe, Search, Megaphone, ArrowRight, Star, CheckCircle, Zap, TrendingUp, Users, BarChart3 } from "lucide-react";

const services = [
  { icon: Globe, title: "Web Development", desc: "Custom, high-performance websites that convert visitors into customers." },
  { icon: Search, title: "SEO Optimization", desc: "Rank higher, get found faster, and dominate search results." },
  { icon: Megaphone, title: "Online Advertising", desc: "Data-driven campaigns across Google, Meta, and beyond." },
];

const benefits = [
  { icon: Zap, title: "Lightning Fast", desc: "Blazing speed that keeps visitors engaged." },
  { icon: TrendingUp, title: "Growth Focused", desc: "Every pixel designed to convert." },
  { icon: Users, title: "Dedicated Team", desc: "Experts who care about your success." },
  { icon: BarChart3, title: "Data Driven", desc: "Decisions backed by real analytics." },
];

const logos = ["TechFlow", "DataPulse", "CloudNine", "PixelForge", "NeuralNet", "ScaleUp"];

const testimonials = [
  { name: "Sarah Chen", role: "CEO, TechFlow", text: "Growthify transformed our online presence. Revenue up 340% in just 6 months.", rating: 5 },
  { name: "Marcus Johnson", role: "Founder, DataPulse", text: "The best investment we've made. Their SEO strategy put us on the map.", rating: 5 },
  { name: "Elena Vasquez", role: "CMO, CloudNine", text: "Professional, creative, and results-driven. Can't recommend them enough.", rating: 5 },
];

const Home = () => (
  <div className="overflow-hidden">
    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center hero-gradient">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <FloatingElement className="absolute top-20 left-[10%]" duration={7} y={20}>
          <div className="w-16 h-16 rounded-2xl gradient-bg opacity-20 rotate-12" />
        </FloatingElement>
        <FloatingElement className="absolute top-40 right-[15%]" duration={5} delay={1} y={25}>
          <div className="w-12 h-12 rounded-full bg-accent/20" />
        </FloatingElement>
        <FloatingElement className="absolute bottom-32 left-[20%]" duration={8} delay={2}>
          <div className="w-20 h-20 rounded-3xl border-2 border-primary/20 rotate-45" />
        </FloatingElement>
        <FloatingElement className="absolute bottom-20 right-[10%]" duration={6} delay={0.5}>
          <div className="w-14 h-14 rounded-2xl bg-primary/10 -rotate-12" />
        </FloatingElement>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-6">
            ✨ Digital Growth Partner
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6 text-foreground"
        >
          Build. Scale.{" "}
          <span className="gradient-text">Dominate</span>
          <br />
          Your Market.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We craft premium digital experiences that accelerate growth.
          From stunning websites to data-driven marketing — we make brands unforgettable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Start Growing Today <ArrowRight className="ml-1" />
            </Link>
          </Button>
          <Button variant="glass" size="lg" asChild>
            <Link to="/services">Explore Services</Link>
          </Button>
        </motion.div>
      </div>
    </section>

    {/* Logo Marquee */}
    <section className="py-12 border-y border-border bg-card/30">
      <p className="text-center text-sm text-muted-foreground mb-8 tracking-wider uppercase font-medium">
        Trusted by 500+ companies worldwide
      </p>
      <div className="overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="mx-12 flex items-center gap-2 text-muted-foreground/50">
              <div className="w-6 h-6 rounded gradient-bg opacity-40" />
              <span className="font-heading font-semibold text-lg">{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Services Overview */}
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="What We Do"
          title="Services That Drive Results"
          description="From concept to conversion, we provide end-to-end digital solutions tailored to your growth goals."
        />
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-8 h-full group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-primary/25 transition-shadow">
                  <s.icon className="text-primary-foreground" size={24} />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-6 flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                  Learn more <ArrowRight size={16} className="ml-1" />
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Benefits */}
    <section className="section-padding bg-card/50">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="Why Choose Us"
          title="Your Competitive Edge"
          description="We don't just build websites — we engineer growth systems."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <AnimatedSection key={b.title} delay={i * 0.1}>
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <b.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="Success Stories"
          title="What Our Clients Say"
          description="Real results from real businesses that trusted us with their growth."
        />
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.1}>
              <div className="glass-card p-8 h-full">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">{t.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="relative rounded-3xl gradient-bg p-12 md:p-16 text-center overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-background rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-background rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4">
                Ready to 10x Your Growth?
              </h2>
              <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
                Let's build something extraordinary together. Book your free strategy session today.
              </p>
              <Button variant="glass" size="xl" asChild className="bg-background/20 text-primary-foreground border-primary-foreground/20 hover:bg-background/30">
                <Link to="/contact">
                  Book Free Consultation <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default Home;
