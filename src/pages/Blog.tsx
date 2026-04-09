import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { blogPosts } from "@/data/blogData";
import { ArrowRight, Clock } from "lucide-react";

const categoryColors: Record<string, string> = {
  SEO: "bg-primary/10 text-primary",
  Design: "bg-accent/10 text-accent",
  Advertising: "bg-destructive/10 text-destructive",
  Growth: "bg-primary/10 text-primary",
  Branding: "bg-accent/10 text-accent",
  Development: "bg-primary/10 text-primary",
};

const Blog = () => (
  <div className="overflow-hidden">
    <section className="section-padding hero-gradient">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-6">
            Blog
          </span>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            Insights & <span className="gradient-text">Ideas</span>
          </h1>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert perspectives on digital growth, design, and marketing strategy.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post, i) => (
            <AnimatedSection key={post.id} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
              >
                <Link to={`/blog/${post.slug}`} className="block glass-card overflow-hidden h-full group">
                  <div className="h-48 gradient-bg opacity-80 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-accent/80" />
                    <span className="relative z-10 font-heading font-bold text-3xl text-primary-foreground opacity-30">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${categoryColors[post.category] || "bg-primary/10 text-primary"}`}>
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock size={12} /> {post.readTime}
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                      <span className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read more <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Blog;
