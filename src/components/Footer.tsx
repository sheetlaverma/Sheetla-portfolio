import { profile } from "@/lib/portfolio-data";

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>
        {new Date().getFullYear()} {profile.name}. Built with Next.js for Vercel.
      </p>
      <div>
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={`mailto:${profile.email}`}>Email</a>
      </div>
    </footer>
  );
}
