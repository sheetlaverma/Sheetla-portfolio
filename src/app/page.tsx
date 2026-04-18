import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import RotatingWords from "@/components/RotatingWords";
import {
  certifications,
  metrics,
  profile,
  projects,
  skillCategories,
  skills,
} from "@/lib/portfolio-data";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <nav className="top-nav" aria-label="Primary navigation">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#certifications">Certifications</a>
        <a href="#contact">Contact</a>
      </nav>

      <main id="main-content">
        <section className="hero" id="home">
          <p className="hero-kicker">HELLO THERE</p>
          <h1>
            {profile.name}
            <span>{profile.role}</span>
          </h1>
          <p className="hero-tagline">{profile.tagline}</p>
          <div className="hero-stack">
            {skills.map((skill) => (
              <span key={skill.name}>{skill.name}</span>
            ))}
          </div>
          <RotatingWords />
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Work
            </a>
            <a href="#contact" className="btn btn-ghost">
              Hire Me
            </a>
          </div>
        </section>

        <section id="about" className="panel">
          <SectionTitle label="01 / ABOUT" title="Data Analyst Focused On Business Outcomes" />
          <div className="about-grid">
            <div>
              {profile.about.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
            <ul className="mini-stats">
              {metrics.map((metric) => (
                <li key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="skills" className="panel tint">
          <SectionTitle label="02 / SKILLS" title="Tools, Analytics, And Communication" />
          <div className="skills-categories">
            {skillCategories.map((group) => (
              <article key={group.category} className="skill-category-card">
                <h3>{group.category}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="panel">
          <SectionTitle label="03 / PROJECTS" title="Featured Projects" />
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article key={project.title} className="project-card">
                <span className="project-index">0{index + 1}</span>
                <h3>{project.title}</h3>
                <p className="project-impact-badge">{project.category}</p>
                <p>{project.summary}</p>
                <p className="project-impact-text">{project.impact}</p>
                <div className="project-stack">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    Live
                  </a>
                  <a href={project.repoUrl} target="_blank" rel="noreferrer">
                    Code
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="certifications" className="panel tint">
          <SectionTitle label="04 / CERTIFICATIONS" title="Learning And Credentials" />
          <div className="cert-grid">
            {certifications.map((certification) => (
              <article key={certification.title} className="cert-card">
                <h3>{certification.title}</h3>
                <p>{certification.issuer}</p>
                <span>{certification.year}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="panel tint">
          <SectionTitle label="05 / CONTACT" title="Let's Build Something Together" />
          <div className="contact-grid">
            <div>
              <p>
                Open to analyst roles, freelance analytics consulting, and cross-functional collaboration.
              </p>
              <div className="contact-links">
                <a href={profile.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a href={profile.instagram} target="_blank" rel="noreferrer">
                  Instagram
                </a>
                <a href={profile.repository} target="_blank" rel="noreferrer">
                  Repository
                </a>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
