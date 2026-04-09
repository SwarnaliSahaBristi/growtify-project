🚀 Growtify Project
A premium, high-conversion agency website built with a modern 3D animated aesthetic. Inspired by high-end SaaS designs like Gradia, this project focuses on smooth motion, immersive UI, and brand-consistent visual identity.

✨ Key Features
🎨 Visual & UI/UX
3D-Inspired Interactions: Floating visual elements and motion-based hero sections using Framer Motion and GSAP.

Brand-Centric Design: Full color palette extracted and adapted from the official logo for a cohesive identity.

Micro-interactions: Sophisticated hover effects and scroll-triggered animations to enhance the premium feel.

Fully Responsive: Optimized for all devices, from mobile screens to large desktop monitors.

📄 Pages & Sections
Home: Hero section with strong CTAs, service overviews, social proof (client logos), and testimonials.

Services: Detailed service blocks with integrated pricing tiers (Starter, Growth, Premium).

About: Highlighting company vision, team strategy, and KPI-driven success statistics.

Blog: Dynamic routing with React Router, featuring a listing page and dedicated article views with featured imagery.

Contact: Functional contact forms and consultation CTAs.

🛠️ Tech Stack
Category	Tools
Framework	React.js
Build Tool	Vite
Styling	Tailwind CSS
Animation	Framer Motion, GSAP
Routing	React Router 6
Testing	Vitest, Playwright
Runtime	Bun
🚀 Getting Started
Prerequisites
Ensure you have Bun (or Node.js) installed on your machine.

Installation
Clone the repository:

Bash
git clone https://github.com/SwarnaliSahaBristi/growtify-project.git
cd growtify-project
Install dependencies:

Bash
bun install
Start the development server:

Bash
bun run dev
Building for Production
Bash
bun run build
📁 Project Structure
Based on the current architecture:

src/components/: Reusable UI components (Buttons, Cards, Forms).

src/pages/: Main page views (Home, About, Services, Blog, Contact).

public/: Static assets including the favicon and placeholder SVGs.

tailwind.config.ts: Custom brand color palette and theme extensions.

vite.config.ts: Project bundling configuration.

🧪 Quality Assurance
This project includes a robust testing setup:

Unit Testing: Handled by Vitest.

End-to-End (E2E) Testing: Handled by Playwright (see playwright.config.ts).

Linting: Configured with ESLint for code consistency.

📄 License
This project is for demonstration and agency growth purposes. See the LICENSE for more details.

Built with ❤️ by the Growtify Development Team.
