import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { Target, Lightbulb, Rocket, Award, Star, ArrowRight } from "lucide-react";

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "340%", label: "Avg. Revenue Growth" },
  { value: "12+", label: "Industry Awards" },
];

const values = [
  { icon: Target, title: "Precision", desc: "Every decision is data-driven and intentional." },
  { icon: Lightbulb, title: "Innovation", desc: "We stay ahead of trends so you stay ahead of competitors." },
  { icon: Rocket, title: "Impact", desc: "We measure success by your growth, not our output." },
  { icon: Award, title: "Excellence", desc: "Obsessive attention to quality in every detail." },
];

const awards = [
  "Best Digital Agency 2025 — Webby Awards",
  "Top 10 Growth Agency — Clutch.co",
  "Excellence in Web Design — Awwwards",
  "Best SEO Campaign — Search Engine Journal",
];

const testimonials = [
  { name: "David Kim", role: "CTO, NeuralNet", text: "Their technical expertise is unmatched. They rebuilt our entire platform and tripled our conversion rate." },
  { name: "Anna Petrova", role: "Director, ScaleUp", text: "From strategy to execution, Growthify delivers. They feel like an extension of our own team." },
];

const About = () => (
  <div className="overflow-hidden">
    {/* Hero */}
    <section className="section-padding hero-gradient">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-6">
            About Us
          </span>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            We Build <span className="gradient-text">Digital Futures</span>
          </h1>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A team of strategists, designers, and engineers obsessed with creating digital experiences that drive real business growth.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Stats */}
    <section className="py-16 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 0.1}>
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-2"
                >
                  {s.value}
                </motion.div>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Vision & Values */}
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <AnimatedSection direction="left">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-4">
                Our Vision
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Making digital growth <span className="gradient-text">accessible</span> to every ambitious business
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Founded in 2019, Growthify was born from a simple belief: every business deserves access to world-class digital expertise. We combine cutting-edge technology with battle-tested strategies to deliver measurable results.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team of 50+ experts across design, engineering, and marketing work as one to transform businesses. We don't do cookie-cutter — every solution is custom-tailored to your unique goals.
              </p>
            </AnimatedSection>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1} direction="right">
                <div className="glass-card p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <v.icon className="text-primary" size={22} />
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-1">{v.title}</h3>
                  <p className="text-xs text-muted-foreground">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Awards */}
    <section className="section-padding bg-card/50">
      <div className="container mx-auto px-4">
        <SectionHeading badge="Recognition" title="Awards & Achievements" description="Our work speaks for itself — and the industry agrees." />
        <div className="max-w-2xl mx-auto space-y-4">
          {awards.map((a, i) => (
            <AnimatedSection key={a} delay={i * 0.1}>
              <div className="glass-card p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                  <Award className="text-primary-foreground" size={18} />
                </div>
                <p className="font-medium text-foreground">{a}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <SectionHeading badge="Client Love" title="Voices of Success" />
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.1}>
              <div className="glass-card p-8">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(j => <Star key={j} size={14} className="fill-primary text-primary" />)}
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
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Want to be our next <span className="gradient-text">success story?</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Join 500+ companies that have transformed their digital presence with Growthify.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">Let's Talk Growth <ArrowRight className="ml-2" /></Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default About;
