import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import RotatingWords from "@/components/RotatingWords";
import { profile, projects, skills } from "@/lib/portfolio-data";

export default function Home() {
  return (
    <>
      <nav className="top-nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <main>
        <section className="hero" id="home">
          <p className="hero-kicker">HELLO THERE</p>
          <h1>
            {profile.name}
            <span>{profile.role}</span>
          </h1>
          <p className="hero-tagline">{profile.tagline}</p>
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
          <SectionTitle label="01 / ABOUT" title="Creative Engineer With Product Mindset" />
          <div className="about-grid">
            <div>
              {profile.about.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
            <ul className="mini-stats">
              <li>
                <strong>10+</strong>
                <span>Projects</span>
              </li>
              <li>
                <strong>2+</strong>
                <span>Years Learning</span>
              </li>
              <li>
                <strong>100%</strong>
                <span>Dedication</span>
              </li>
            </ul>
          </div>
        </section>

        <section id="skills" className="panel tint">
          <SectionTitle label="02 / SKILLS" title="Tech Stack & Tools" />
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-chip">
                {skill.name}
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="panel">
          <SectionTitle label="03 / PROJECTS" title="Selected Work" />
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article key={project.title} className="project-card">
                <span className="project-index">0{index + 1}</span>
                <h3>{project.title}</h3>
                <p>{project.category}</p>
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

        <section id="contact" className="panel tint">
          <SectionTitle label="04 / CONTACT" title="Let's Build Something Together" />
          <div className="contact-grid">
            <div>
              <p>
                Open to internships, freelance opportunities, and collaborations.
              </p>
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
