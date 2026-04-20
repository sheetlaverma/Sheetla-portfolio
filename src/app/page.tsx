import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import RotatingWords from "@/components/RotatingWords";
import AnimationProvider from "@/components/AnimationProvider";
import {
  certifications,
  metrics,
  profile,
  projects,
  skillCategories,
  skills,
} from "@/lib/portfolio-data";

export default function Home() {
  const tickerItems = skillCategories.flatMap((group) => group.items).slice(0, 18);

  return (
    <>
      <AnimationProvider />
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
        <section className="hero with-video" id="home">
          <video
            className="section-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source src="/videos/hero-brand-loop.webm" type="video/webm" />
          </video>
          <div className="container">
            <div className="hero-content">
              <p className="hero-kicker">HELLO THERE</p>
              <h1 className="hero-title">
                {profile.name.split(" ").map((word) => (
                  <span key={word} className="hero-word">
                    {word}
                  </span>
                ))}
              </h1>
              <p className="hero-role">{profile.role}</p>
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
            </div>
          </div>
        </section>

        <section id="about" className="panel js-reveal">
          <div className="container">
            <SectionTitle label="01 / ABOUT" title="I Build Clarity From Chaos" />
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
          </div>
        </section>

        <section id="skills" className="panel tint js-reveal">
          <div className="container">
            <SectionTitle label="02 / SKILLS" title="My Creative + Technical Stack" />
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
            <div className="skills-marquee" aria-hidden="true">
              <div className="skills-marquee-track">
                {[...tickerItems, ...tickerItems].map((item, index) => (
                  <span key={`${item}-${index}`}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="panel with-video js-reveal">
          <video
            className="section-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source src="/videos/projects-brand-loop.webm" type="video/webm" />
          </video>
          <div className="container">
            <SectionTitle label="03 / PROJECTS" title="Selected Builds And Case Studies" />
            <div className="projects-grid">
              {projects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className="panel tint js-reveal">
          <div className="container">
            <SectionTitle label="04 / CERTIFICATIONS" title="Learning, Certifications, Momentum" />
            <div className="cert-grid">
              {certifications.map((certification) => (
                <article key={certification.title} className="cert-card">
                  <h3>{certification.title}</h3>
                  <p>{certification.issuer}</p>
                  <span>{certification.year}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="panel tint js-reveal">
          <div className="container">
            <SectionTitle label="05 / CONTACT" title="Let's Design, Code, And Ship" />
            <div className="contact-grid">
              <div>
                <p>
                  Open to full-time analyst roles, freelance builds, and cross-functional collaborations where data needs to drive clear action.
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
