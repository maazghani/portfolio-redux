import { TerminalConsole } from "@/components/terminal-console";

const experience = [
  {
    period: "2024.02 — NOW",
    company: "Lululemon",
    role: "Staff Kubernetes Engineer",
    description:
      "Supporting the enterprise Kubernetes platform behind everything from warehouse systems to sales APIs. Managing multi-region EKS clusters and driving Istio service mesh initiatives with Terraform and ArgoCD.",
    stack: ["Kubernetes", "Istio", "ArgoCD"],
    active: true,
  },
  {
    period: "2021 — 2024",
    company: "NetApp",
    role: "Senior Site Reliability Engineer",
    description:
      "Operated 1,200+ Kubernetes nodes across AWS regions for microservice workloads. Helped achieve FedRAMP High compliance for a real-time metrics SaaS serving Fortune 100 customers.",
    stack: ["FedRAMP", "Elasticsearch", "ClickHouse"],
    active: false,
  },
  {
    period: "2018 — 2021",
    company: "Nordstrom",
    role: "Senior Site Reliability Engineer",
    description:
      "Supported Nordstrom.com and internal platforms, led operational-readiness and design reviews, and shaped Business Continuity and Disaster Recovery initiatives.",
    stack: ["VMware", "AWS", "Azure"],
    active: false,
  },
  {
    period: "2013 — 2018",
    company: "Ottemo",
    role: "Lead DevOps Engineer",
    description:
      "Led DevOps for a scalable, cloud-based ecommerce platform, building cost-effective SaaS infrastructure for online store management.",
    stack: ["Cloud Infrastructure", "SaaS", "DevOps"],
    active: false,
  },
];

const projects = [
  {
    name: "ksailnet",
    path: "~/src/ksailnet",
    href: "https://github.com/maazghani/ksailnet",
    description:
      "Inner-loop cloud-native development with a K3s dev container, automated deployments, and a Tailscale tailnet.",
    stack: ["K3s", "Dev Containers", "Tailscale"],
    className: "project-card--featured",
    index: "01",
    year: "2023",
  },
  {
    name: "PDFQuery",
    path: "~/src/pdfquery",
    href: "https://github.com/maazghani/pdfquery",
    description:
      "A command-line tool that builds vector databases from PDFs for intelligent GPT-powered documentation search.",
    stack: ["Python", "RAG"],
    className: "",
    index: "02",
    year: "2025",
  },
  {
    name: "Thinscale",
    path: "~/notes/thinscale.md",
    href: "https://blog.maaz.sh/blog/00-thinscale",
    description:
      "A minimalist Kubernetes thin-client setup using Raspberry Pi Zeros, Tailscale, and K3s for portable edge meshes.",
    stack: ["IoT", "Tailscale", "K3s"],
    className: "",
    index: "03",
    year: "2017",
  },
  {
    name: "git-to.dev",
    path: "~/src/git-to.dev",
    href: "https://git-to.dev",
    description:
      "Fuzzy URL shortener for GitHub repos. Type git-to.dev/oai/cx and it resolves to github.com/openai/codex — no URL shortener needed.",
    stack: ["Next.js", "GitHub API", "Fuzzy Search"],
    className: "",
    index: "04",
    year: "2026",
  },
];

const articles = [
  {
    date: "2026.08.01",
    title: "Introducing git-to.dev: search github via shortened URLs",
    description:
      "A fuzzy GitHub URL shortener: type git-to.dev/oai/cx and land on github.com/openai/codex. Resolves owner/repo pairs by scoring exact, prefix, and subsequence matches — no shortener service required.",
    href: "https://blog.maaz.sh/blog/04-git-to-dev",
    type: "3 min read",
  },
  {
    date: "2025.07.27",
    title: "Interacting with Kubernetes Clusters from Copilot using an MCP Server",
    description:
      "Testing a Kubernetes MCP server against a local k3d cluster with GitHub Copilot.",
    href: "https://blog.maaz.sh/blog/03-ksailnet-mcp",
    type: "8 min read",
  },
  {
    date: "2020.10.11",
    title: "thinscale: a thinclient setup using tailscale, k3s, rasbpi zeros",
    description:
      "A minimal, portable Kubernetes shell environment for secure work from anywhere.",
    href: "https://blog.maaz.sh/blog/00-thinscale",
    type: "2 min read",
  },
  {
    date: "2020.09.09",
    title: "tailk3scale — mesh VPN for IoT, run on IoT",
    description:
      "A lightweight Kubernetes and Tailscale mesh running on Raspberry Pi hardware.",
    href: "https://blog.maaz.sh/blog/01-k3s",
    type: "2 min read",
  },
];

function ExternalLabel() {
  return <span className="sr-only"> (opens in a new tab)</span>;
}

export default function Home() {
  return (
    <div className="site-wrap">
      <div className="ambient ambient--one" aria-hidden="true" />
      <div className="ambient ambient--two" aria-hidden="true" />

      <div className="terminal-shell">
        <header className="window-bar">
          <div className="window-controls" aria-hidden="true">
            <span className="dot dot--red" />
            <span className="dot dot--yellow" />
            <span className="dot dot--green" />
          </div>
          <p className="window-title">
            <span className="window-title__desktop">
              maaz@seattle: ~/portfolio
            </span>
            <span className="window-title__mobile">~/portfolio</span>
          </p>
          <div className="window-status">
            <span aria-hidden="true" />
            ONLINE
          </div>
        </header>

        <nav className="command-nav" aria-label="Primary navigation">
          <a href="#bio">
            <span>01</span> whoami
          </a>
          <a href="#experience">
            <span>02</span> logs
          </a>
          <a href="#thoughts">
            <span>03</span> thoughts
          </a>
          <a href="#work">
            <span>04</span> work
          </a>
          <a href="#contact">
            <span>05</span> connect
          </a>
        </nav>

        <main id="main-content">
          <section className="hero section-pad" id="bio" aria-labelledby="hero-title">
            <div className="hero__copy">
              <p className="eyebrow">
                <span className="prompt-user">maaz@seattle</span>
                <span className="prompt-path">:~$</span> whoami
              </p>
              <h1 id="hero-title">
                Maaz
                <span>Ghani</span>
              </h1>
              <p className="hero__role">
                Staff Kubernetes Engineer
                <span aria-hidden="true"> @ </span>
                <span>Lululemon</span>
              </p>
              <p className="hero__intro">
                Security-first engineer who enjoys gluing things together.
                I build secure, resilient, and maintainable platforms in a
                landscape where change is the only constant.
              </p>
              <p className="hero__context">
                Based in Seattle. Currently managing multi-region EKS clusters
                and driving service mesh initiatives at Lululemon.
              </p>

              <div className="hero__actions">
                <a className="button button--primary" href="#experience">
                  <span aria-hidden="true">./</span>view-career
                </a>
                <a
                  className="button button--secondary"
                  href="mailto:maazghani@gmail.com"
                >
                  mail maaz
                </a>
              </div>

              <ul className="skill-list" aria-label="Core technologies">
                {["Kubernetes", "Golang", "AWS", "Istio", "Terraform"].map(
                  (skill) => (
                    <li key={skill}>{skill}</li>
                  ),
                )}
              </ul>
            </div>

            <div className="hero__console">
              <TerminalConsole />
            </div>
          </section>

          <section
            className="experience section-pad"
            id="experience"
            aria-labelledby="experience-title"
          >
            <div className="section-heading">
              <div>
                <p className="section-command">
                  $ journalctl -u career --reverse
                </p>
                <h2 id="experience-title">Career History</h2>
              </div>
              <p>
                Building dependable systems across retail, SaaS, and cloud
                infrastructure.
              </p>
            </div>

            <ol className="timeline">
              {experience.map((item) => (
                <li key={item.company}>
                  <div className="timeline__marker" aria-hidden="true">
                    <span />
                  </div>
                  <p className="timeline__date">{item.period}</p>
                  <article className="timeline__entry">
                    <div className="timeline__meta">
                      <div>
                        <h3>{item.company}</h3>
                        <p>{item.role}</p>
                      </div>
                      <span
                        className={
                          item.active
                            ? "status-badge status-badge--active"
                            : "status-badge"
                        }
                      >
                        <i aria-hidden="true" />
                        {item.active ? "ACTIVE" : "COMPLETE"}
                      </span>
                    </div>
                    <p className="timeline__description">{item.description}</p>
                    <ul className="tag-list" aria-label={`${item.company} stack`}>
                      {item.stack.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  </article>
                </li>
              ))}
            </ol>
          </section>

          <section
            className="writing section-pad"
            id="thoughts"
            aria-labelledby="writing-title"
          >
            <div className="section-heading">
              <div>
                <p className="section-command">
                  $ tail -n 3 ~/thoughts/index
                </p>
                <h2 id="writing-title">Latest thoughts</h2>
              </div>
              <a
                className="text-link"
                href="https://blog.maaz.sh"
                target="_blank"
                rel="noopener noreferrer"
              >
                read the blog <span aria-hidden="true">↗</span>
                <ExternalLabel />
              </a>
            </div>

            <div className="article-list">
              {articles.map((article, index) => (
                <a
                  href={article.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="article-row"
                  key={article.href}
                >
                  <span className="article-row__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <time dateTime={article.date.replaceAll(".", "-")}>
                    {article.date}
                  </time>
                  <div>
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                  </div>
                  <span className="article-row__type">{article.type}</span>
                  <span className="article-row__arrow" aria-hidden="true">
                    ↗
                  </span>
                  <ExternalLabel />
                </a>
              ))}
            </div>
          </section>

          <section
            className="projects section-pad"
            id="work"
            aria-labelledby="projects-title"
          >
            <div className="section-heading">
              <div>
                <p className="section-command">$ ls -lah ~/projects</p>
                <h2 id="projects-title">Projects</h2>
              </div>
              <a
                className="text-link"
                href="https://github.com/maazghani"
                target="_blank"
                rel="noopener noreferrer"
              >
                view all repos <span aria-hidden="true">↗</span>
                <ExternalLabel />
              </a>
            </div>

            <div className="project-grid">
              {projects.map((project) => (
                <a
                  className={`project-card ${project.className}`}
                  key={project.name}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="project-card__top">
                    <span>{project.path}</span>
                    <span aria-hidden="true">↗</span>
                  </div>
                  <div className="project-card__content">
                    <div className="project-card__meta">
                      <span className="project-card__index">{project.index}</span>
                      <time dateTime={project.year}>{project.year}</time>
                    </div>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                  </div>
                  <ul className="tag-list" aria-label={`${project.name} stack`}>
                    {project.stack.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <ExternalLabel />
                </a>
              ))}
            </div>
          </section>

          <section
            className="contact section-pad"
            id="contact"
            aria-labelledby="contact-title"
          >
            <div className="contact__content">
              <p className="contact__kicker">OPEN TO CONVERSATION</p>
              <h2 id="contact-title">
                Let&apos;s build something <span>resilient.</span>
              </h2>
              <p>
                Whether it&apos;s Kubernetes architecture, platform reliability,
                or comparing notes on secure infrastructure, I&apos;m down to
                talk.
              </p>

              <div className="contact__actions">
                <a
                  className="button button--primary"
                  href="https://calendly.com/maazg/chat-with-maaz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a chat <span aria-hidden="true">↗</span>
                  <ExternalLabel />
                </a>
                <a
                  className="button button--secondary"
                  href="mailto:maazghani@gmail.com"
                >
                  maazghani@gmail.com
                </a>
                <a
                  className="button button--ghost"
                  href="https://maaz.sh/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  resume.pdf <span aria-hidden="true">↓</span>
                  <ExternalLabel />
                </a>
              </div>
            </div>

            <div className="contact__socials" aria-label="Social links">
              {[
                ["GitHub", "https://github.com/maazghani"],
                ["LinkedIn", "https://linkedin.com/in/maazg"],
                ["Twitter / X", "https://twitter.com/icepaani"],
                ["Blog", "https://blog.maaz.sh"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {label} <span aria-hidden="true">↗</span>
                  <ExternalLabel />
                </a>
              ))}
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <p>© 2026 Maaz Ghani</p>
        </footer>
      </div>
    </div>
  );
}
