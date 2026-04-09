import { Link } from "react-router-dom";

const footerLinks = {
  Company: [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ],
  Services: [
    { name: "Web Development", path: "/services" },
    { name: "SEO Optimization", path: "/services" },
    { name: "Online Advertising", path: "/services" },
    { name: "Growth Strategy", path: "/services" },
  ],
  Connect: [
    { name: "Twitter / X", path: "#" },
    { name: "LinkedIn", path: "#" },
    { name: "Instagram", path: "#" },
    { name: "GitHub", path: "#" },
  ],
};

export const Footer = () => (
  <footer className="border-t border-border bg-card/50">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
              <span className="font-heading font-bold text-primary-foreground text-sm">G</span>
            </div>
            <span className="font-heading font-bold text-xl text-foreground">Growthify</span>
          </Link>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Empowering businesses with cutting-edge digital solutions. We turn ideas into growth engines.
          </p>
        </div>
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-heading font-semibold text-foreground mb-4">{title}</h4>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© 2026 Growthify. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="#" className="hover:text-primary transition-colors">Privacy</Link>
          <Link to="#" className="hover:text-primary transition-colors">Terms</Link>
        </div>
      </div>
    </div>
  </footer>
);
