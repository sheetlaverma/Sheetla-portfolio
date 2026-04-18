"use client";

import { useState } from "react";
import type { Project } from "@/lib/portfolio-data";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="project-card">
      <span className="project-index">0{index + 1}</span>
      <h3>{project.title}</h3>
      <p className="project-impact-badge">{project.category}</p>
      <p className="project-impact-text">{project.impact}</p>

      <button
        type="button"
        className="project-toggle"
        aria-expanded={expanded}
        onClick={() => setExpanded((prev) => !prev)}
      >
        {expanded ? "Hide project brief" : "Read project brief"}
      </button>

      {expanded ? <p>{project.summary}</p> : null}

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
  );
}
