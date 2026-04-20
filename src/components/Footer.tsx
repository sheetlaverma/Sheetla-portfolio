import { profile } from "@/lib/portfolio-data";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          {new Date().getFullYear()} {profile.name}. Data Analyst Portfolio.
        </p>
        <div>
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
            Repo
          </a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}
