import { useParams, Link, Navigate } from "react-router-dom";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogData";
import { ArrowLeft, Clock, User } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <div className="overflow-hidden">
      <section className="section-padding hero-gradient">
        <div className="container mx-auto px-4 max-w-3xl">
          <AnimatedSection>
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft size={16} /> Back to Blog
            </Link>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><User size={14} /> {post.author.name}</span>
              <span>{post.date}</span>
              <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <AnimatedSection>
            <article className="prose prose-lg max-w-none">
              {post.content.split("\n\n").map((block, i) => {
                if (block.startsWith("## ")) {
                  return <h2 key={i} className="text-2xl font-heading font-bold text-foreground mt-10 mb-4">{block.replace("## ", "")}</h2>;
                }
                return <p key={i} className="text-muted-foreground leading-relaxed mb-4">{block}</p>;
              })}
            </article>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="mt-16 glass-card p-8 flex flex-col sm:flex-row items-center gap-6">
              <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center shrink-0">
                <span className="text-primary-foreground font-bold text-xl">{post.author.name[0]}</span>
              </div>
              <div>
                <p className="font-heading font-bold text-foreground">{post.author.name}</p>
                <p className="text-sm text-muted-foreground">{post.author.role}</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="mt-12 text-center">
              <Button variant="gradient" size="lg" asChild>
                <Link to="/blog">More Articles</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
