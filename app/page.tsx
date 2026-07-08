import Link from "next/link";
import ContactForm from "./contact-form";

const navItems = [
  { label: "Services", href: "#services" },
  // { label: "Work", href: "#work" }, // hidden until we have client work to show
  { label: "Process", href: "#process" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    tag: "Build",
    title: "Custom Software Engineering",
    description:
      "Web platforms, internal tools, and APIs engineered to be robust, testable, and easy to extend for years.",
    bullets: ["SaaS & web platforms", "Secure API ecosystems", "Legacy modernization"],
  },
  {
    tag: "Intelligence",
    title: "AI Systems & Automation",
    description:
      "Production-grade AI features grounded in measurable outcomes — not demos that break under real load.",
    bullets: ["LLM & RAG applications", "Agentic workflows", "MLOps & evaluation"],
  },
  {
    tag: "Data",
    title: "Data Engineering",
    description:
      "Reliable pipelines and warehouses that turn scattered raw data into a clean, trusted foundation for every team.",
    bullets: ["ETL / ELT pipelines", "Warehouses & lakehouses", "Streaming & data quality"],
  },
  {
    tag: "Insight",
    title: "Business Analytics",
    description:
      "Dashboards and decision models that make the numbers make sense — so leaders can act with confidence.",
    bullets: ["BI dashboards & KPIs", "Predictive & cohort analysis", "Self-serve reporting"],
  },
  {
    tag: "Run",
    title: "Cloud & DevOps",
    description:
      "We stand up the infrastructure and keep it healthy: automated pipelines, observability, and 24/7 reliability.",
    bullets: ["CI/CD & IaC", "Kubernetes & serverless", "Monitoring & on-call"],
  },
  {
    tag: "Strategy",
    title: "Architecture & Consulting",
    description:
      "Senior engineers work alongside your leadership to de-risk decisions and accelerate delivery.",
    bullets: ["Technical due diligence", "System design reviews", "Team enablement"],
  },
];

const steps = [
  {
    n: "01",
    title: "Discover",
    body: "We map the problem, constraints, and success metrics with your team before a line of code is written.",
  },
  {
    n: "02",
    title: "Architect",
    body: "A pragmatic system design — sized to your scale, security needs, and budget — reviewed and agreed up front.",
  },
  {
    n: "03",
    title: "Build",
    body: "Weekly, working increments. Clean code, automated tests, and transparent progress you can see and steer.",
  },
  {
    n: "04",
    title: "Operate",
    body: "We ship to production and keep it running — monitoring, iteration, and support long after launch day.",
  },
];

const stack = [
  "TypeScript",
  "Python",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "PyTorch",
  "Kubernetes",
  "AWS",
  "GCP",
  "Terraform",
  "React",
  "Go",
];

// --- Client references (metrics / case studies / testimonials) ---
// Commented out until AY LABS LTD has real, verifiable client work to show.
// Restore these arrays together with their sections below when ready.
/*
const metrics = [
  { value: "99.98%", label: "Uptime across managed systems" },
  { value: "1,200+", label: "Production deploys shipped" },
  { value: "24/7", label: "Monitoring & incident response" },
  { value: "40+", label: "Teams supported worldwide" },
];

const work = [
  {
    metric: "−61%",
    name: "NeuroFlow Health",
    description:
      "AI-assisted patient operations platform with secure clinical workflows and explainable recommendations — triage time cut by 61%.",
  },
  {
    metric: "3.4×",
    name: "Velocity Commerce",
    description:
      "Re-platformed a legacy stack into composable, event-driven services, accelerating release cycles by 3.4×.",
  },
  {
    metric: "−27%",
    name: "Astra Logistics",
    description:
      "Predictive planning and autonomous dispatch optimization, lowering operational costs by 27% at national scale.",
  },
];

const testimonials = [
  {
    quote:
      "AY LABS LTD combines strategic clarity with engineering excellence. Their team became a trusted extension of our core product org.",
    author: "VP Product · Enterprise Fintech",
  },
  {
    quote:
      "We went from AI idea to production launch in under two months. Delivery quality and communication were exceptional.",
    author: "Founder · HealthTech",
  },
  {
    quote:
      "Reliable at scale, and our internal team moves faster because the architecture is clean and genuinely future-proof.",
    author: "CTO · B2B SaaS",
  },
];
*/

const services_status = [
  { name: "api-gateway", val: "42ms", state: "ok" },
  { name: "inference-worker", val: "deploying", state: "deploying" },
  { name: "postgres-primary", val: "8ms", state: "ok" },
  { name: "event-pipeline", val: "healthy", state: "ok" },
];

const logLines = [
  { t: "09:41:02", tag: "info", tagText: "deploy", text: "inference-worker → v2.8.1 rolling out" },
  { t: "09:41:04", tag: "ok", tagText: "pass", text: "health checks green · 3/3 replicas" },
  { t: "09:41:07", tag: "info", tagText: "scale", text: "autoscaler +2 nodes · load 71%" },
  { t: "09:41:11", tag: "ok", tagText: "200", text: "p95 latency 42ms · error rate 0.00%" },
];

// throughput bar heights (%) — a static "live graph" signature
const bars = [34, 52, 41, 68, 58, 74, 49, 82, 61, 70, 55, 88, 64, 76, 47, 90, 60, 72, 53, 84, 66, 45, 78, 57];

export default function Home() {
  return (
    <>
      <div className="bg-field" aria-hidden="true" />
      <div className="bg-grid" aria-hidden="true" />

      <header className="site-header">
        <div className="shell nav">
          <Link href="/" className="brand" aria-label="AY LABS LTD home">
            <span className="brand-mark" aria-hidden="true">AY</span>
            <span className="brand-name">
              AY LABS<span> LTD</span>
            </span>
          </Link>
          <nav aria-label="Primary">
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <a className="btn btn-primary nav-cta" href="#contact">
            Start a project
          </a>
        </div>
      </header>

      <main>
        {/* ---------- hero ---------- */}
        <section className="shell hero">
          <div className="reveal">
            <span className="hero-badge">
              <span className="dot" aria-hidden="true" />
              Software · Data · AI · Cloud
            </span>
            <h1>
              We build and run the <em>systems</em> your business depends on.
            </h1>
            <p className="hero-lead">
              AY LABS LTD is an engineering partner for teams that ship serious software. We
              design, deliver, and operate production-grade platforms — with the rigor of a
              team that has to keep them online.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contact">
                Start a project <span className="arrow" aria-hidden="true">→</span>
              </a>
              <a className="btn btn-ghost" href="#services">
                What we do
              </a>
            </div>
            {/* Track-record stats hidden until we can back them with real numbers.
            <div className="hero-proof">
              <div>
                <strong>10+ yrs</strong>
                <span>Senior avg. experience</span>
              </div>
              <div>
                <strong>97%</strong>
                <span>Client retention</span>
              </div>
              <div>
                <strong>24h</strong>
                <span>Response time</span>
              </div>
            </div>
            */}
          </div>

          {/* signature: live systems console */}
          <div className="reveal d2">
            <div className="console" role="img" aria-label="Illustration of a live operations console with services running healthy in production">
              <div className="console-bar">
                <span className="traffic" aria-hidden="true">
                  <i /><i /><i />
                </span>
                <span className="path">
                  ay-labs<b> / production</b>
                </span>
                <span className="console-live">
                  <i aria-hidden="true" /> live
                </span>
              </div>
              <div className="console-body">
                {services_status.map((s) => (
                  <div key={s.name} className={`svc${s.state === "deploying" ? " deploying" : ""}`}>
                    <span className="stat" aria-hidden="true" />
                    <span className="name">{s.name}</span>
                    <span className="val">{s.val}</span>
                  </div>
                ))}

                <div className="tp-label">
                  <span>Requests / sec</span>
                  <span>last 60s</span>
                </div>
                <div className="throughput" aria-hidden="true">
                  {bars.map((h, i) => (
                    <i key={i} style={{ height: `${h}%`, animationDelay: `${(i % 8) * 0.12}s` }} />
                  ))}
                </div>

                <div className="log" aria-hidden="true">
                  <div className="log-track">
                    {[...logLines, ...logLines].map((l, i) => (
                      <span className="log-line" key={i}>
                        <time>{l.t}</time>
                        <span className={l.tag}>[{l.tagText}]</span> {l.text}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- stack strip ---------- */}
        <section id="stack" className="shell strip">
          <p className="strip-head">Built with proven, scalable technology</p>
          <div className="marquee">
            {[...stack, ...stack].map((tech, i) => (
              <span key={i}>{tech}</span>
            ))}
          </div>
        </section>

        {/* ---------- services ---------- */}
        <section id="services" className="shell section">
          <div className="sec-head reveal">
            <span className="eyebrow">Capabilities</span>
            <h2>Everything from first commit to on-call.</h2>
            <p>
              One accountable team across the full lifecycle of modern software, data, and
              AI — so you do not have to stitch vendors together.
            </p>
          </div>
          <div className="cap-grid">
            {services.map((s) => (
              <article key={s.title} className="cap">
                <span className="cap-tag">{s.tag}</span>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <ul>
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* ---------- metrics band — hidden until we have real numbers to report ----------
        <section className="shell">
          <div className="metrics reveal">
            {metrics.map((m) => (
              <div className="metric" key={m.label}>
                <strong>{m.value}</strong>
                <span>{m.label}</span>
              </div>
            ))}
          </div>
        </section>
        ---------------------------------------------------------------------------------- */}

        {/* ---------- process ---------- */}
        <section id="process" className="shell section">
          <div className="sec-head reveal">
            <span className="eyebrow">How we work</span>
            <h2>A delivery process built for confidence.</h2>
            <p>
              No black boxes. Every engagement moves through the same four stages, so you
              always know where things stand.
            </p>
          </div>
          <div className="process">
            {steps.map((step) => (
              <article className="step" key={step.n}>
                <span className="step-num">{step.n} —</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ---------- selected work — hidden until we have client case studies ----------
        <section id="work" className="shell section">
          <div className="sec-head reveal">
            <span className="eyebrow">Selected work</span>
            <h2>Outcomes we can put a number on.</h2>
            <p>A sample of platforms we have designed, shipped, and kept running in production.</p>
          </div>
          <div className="work-grid">
            {work.map((c) => (
              <article className="case" key={c.name}>
                <span className="case-metric">{c.metric}</span>
                <span className="case-name">{c.name}</span>
                <p>{c.description}</p>
              </article>
            ))}
          </div>
        </section>
        --------------------------------------------------------------------------------- */}

        {/* ---------- testimonials — hidden until we have real client references ----------
        <section className="shell section">
          <div className="sec-head reveal">
            <span className="eyebrow">Trust</span>
            <h2>Teams that build at scale rely on us.</h2>
          </div>
          <div className="quote-grid">
            {testimonials.map((t) => (
              <blockquote className="quote" key={t.author}>
                <p>{t.quote}</p>
                <cite>{t.author}</cite>
              </blockquote>
            ))}
          </div>
        </section>
        ---------------------------------------------------------------------------------- */}

        {/* ---------- contact ---------- */}
        <section id="contact" className="shell section">
          <div className="contact reveal">
            <div className="contact-copy">
              <span className="eyebrow">Contact</span>
              <h2>Tell us what you are building.</h2>
              <p>
                Share your goals and we will respond within one business day with a tailored
                approach, timeline, and next steps.
              </p>
              <ul className="contact-detail">
                <li>
                  <span>Email</span> aylabsltd@gmail.com
                </li>
                <li>
                  <span>Phone</span> +1 (905) 325-5946
                </li>
                <li>
                  <span>Where</span> Global · remote delivery
                </li>
              </ul>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer">
          <p>© {new Date().getFullYear()} AY LABS LTD — software & AI engineering partner.</p>
          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}
