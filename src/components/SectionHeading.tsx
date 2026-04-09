import { AnimatedSection } from "./AnimatedSection";

interface Props {
  badge?: string;
  title: string;
  description?: string;
  center?: boolean;
  gradient?: boolean;
}

export const SectionHeading = ({ badge, title, description, center = true, gradient = true }: Props) => (
  <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""} mb-12 md:mb-16`}>
    {badge && (
      <AnimatedSection>
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-4">
          {badge}
        </span>
      </AnimatedSection>
    )}
    <AnimatedSection delay={0.1}>
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight mb-4 ${gradient ? "gradient-text" : "text-foreground"}`}>
        {title}
      </h2>
    </AnimatedSection>
    {description && (
      <AnimatedSection delay={0.2}>
        <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
      </AnimatedSection>
    )}
  </div>
);
