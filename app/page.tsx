import Link from "next/link";

const services = [
  {
    title: "AI Product Development",
    description:
      "From LLM integrations to autonomous workflows, we design and launch AI systems that solve real business bottlenecks.",
    bullets: ["GenAI copilots", "Model orchestration", "MLOps-ready deployment"],
  },
  {
    title: "Custom Software Engineering",
    description:
      "High-performance web platforms and internal systems built with modern architecture, observability, and security by default.",
    bullets: ["Full-stack architecture", "Cloud-native delivery", "Long-term maintainability"],
  },
  {
    title: "Mobile App Development",
    description:
      "We build polished iOS and Android applications with fast release cycles, excellent UX, and scalable backend foundations.",
    bullets: ["Cross-platform expertise", "API-first approach", "App store launch support"],
  },
];

const process = [
  {
    step: "01",
    title: "Discovery Sprint",
    text: "We align product goals, map technical risks, and define measurable outcomes before writing production code.",
  },
  {
    step: "02",
    title: "Rapid Execution",
    text: "Senior engineers ship in short cycles with transparent demos, weekly milestones, and direct stakeholder feedback.",
  },
  {
    step: "03",
    title: "Scale & Optimize",
    text: "After launch, we harden infrastructure, monitor performance, and continuously improve conversion-driving features.",
  },
];

const metrics = [
  { label: "Projects Delivered", value: "120+" },
  { label: "Average Launch Time", value: "8 weeks" },
  { label: "Senior Engineers", value: "25" },
  { label: "Client Satisfaction", value: "97%" },
];

const endorsements = [
  {
    value: "42% faster release cadence",
    quote: "AYLabs turned our prototype into a production AI platform serving thousands of users daily.",
    author: "Head of Product, MedTech Startup",
  },
  {
    value: "3.1x feature delivery throughput",
    quote:
      "Their team moves fast, communicates clearly, and ships software our internal team can confidently extend.",
    author: "CTO, Logistics SaaS Company",
  },
  {
    value: "99.95% platform uptime",
    quote: "We migrated critical systems with zero downtime and better reliability than our prior stack.",
    author: "VP Engineering, FinTech Scale-Up",
  },
  {
    value: "2.4x mobile conversion uplift",
    quote: "The new app experience materially improved onboarding and reduced drop-offs in the first week.",
    author: "Growth Lead, Consumer Health App",
  },
  {
    value: "5 weeks to first AI launch",
    quote: "They shipped a production-grade AI assistant faster than any previous vendor engagement.",
    author: "COO, Enterprise Operations Team",
  },
];

export default function Home() {
  return (
    <main>
      <div className="background-layer" aria-hidden="true" />
      <section className="hero section">
        <header className="topbar reveal">
          <div className="brand-block">
            <div className="brand-emblem" aria-hidden="true">
              <span className="brand-core">AY</span>
            </div>
            <div className="brand-copy">
              <p className="brand-name">AYLabs</p>
              <p className="brand-tag">AI Software Development Studio</p>
            </div>
          </div>
          <div className="topbar-actions">
            <p className="status-pill">Shipping AI Products Since 2019</p>
            <Link className="ghost-link" href="/#contact">
              Book a Consultation
            </Link>
          </div>
        </header>

        <div className="hero-grid">
          <div className="reveal delay-1">
            <p className="kicker">AI-Native Engineering Partner</p>
            <h1>Build software that wins markets, not just deadlines.</h1>
            <p className="lead">
              AYLabs delivers AI, web, and mobile solutions for teams that need
              speed, reliability, and measurable business impact.
            </p>
            <div className="actions">
              <Link className="btn btn-primary" href="/#contact">
                Start Your Project
              </Link>
              <Link className="btn btn-secondary" href="/#services">
                Explore Services
              </Link>
            </div>
          </div>

          <aside className="hero-card reveal delay-2">
            <p className="mono">What we solve</p>
            <ul>
              <li>Legacy platforms slowing growth</li>
              <li>AI initiatives stuck in pilot mode</li>
              <li>Mobile products with weak retention</li>
            </ul>
            <p className="mono">Delivery model</p>
            <p>Dedicated product squad with strategy, design, and engineering.</p>
          </aside>
        </div>
      </section>

      <section className="section trust reveal delay-1">
        <p>Trusted by startup and enterprise teams in healthcare, fintech, and logistics.</p>
      </section>

      <section id="services" className="section">
        <h2 className="section-title reveal">Services</h2>
        <div className="service-grid">
          {services.map((service, index) => (
            <article key={service.title} className={`card reveal delay-${(index % 3) + 1}`}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title reveal">How We Deliver</h2>
        <div className="process-grid">
          {process.map((item, index) => (
            <article key={item.title} className={`process-card reveal delay-${(index % 3) + 1}`}>
              <span className="step">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title reveal">Outcomes</h2>
        <div className="metrics-grid">
          {metrics.map((metric, index) => (
            <div key={metric.label} className={`metric reveal delay-${(index % 3) + 1}`}>
              <p className="value">{metric.value}</p>
              <p>{metric.label}</p>
            </div>
          ))}
        </div>
        <div className="endorsement-marquee reveal delay-1" aria-label="Client endorsements">
          <div className="endorsement-track">
            {[...endorsements, ...endorsements].map((item, index) => (
              <blockquote key={`${item.author}-${index}`} className="endorsement-card">
                <p className="endorsement-value">{item.value}</p>
                <p>{item.quote}</p>
                <cite>{item.author}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section cta reveal">
        <p className="cta-kicker">Start Your Build Sprint</p>
        <h2>Ready to build with AYLabs?</h2>
        <p>
          Tell us your product goals and we will propose a delivery roadmap in a
          focused strategy session.
        </p>
        <div className="cta-actions">
          <a className="btn btn-primary cta-primary" href="mailto:hello@aylabs.dev">
            hello@aylabs.dev
          </a>
          <Link className="btn btn-secondary cta-secondary" href="/#services">
            View Capabilities
          </Link>
        </div>
        <ul className="cta-highlights">
          <li>Free architecture consult</li>
          <li>Reply within 24 hours</li>
          <li>NDA-friendly engagement</li>
        </ul>
      </section>
    </main>
  );
}
