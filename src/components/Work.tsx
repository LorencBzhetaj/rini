"use client";
import Image from "next/image";
import { useState } from "react";
import { useLang } from "@/lib/LangContext";
import { projects, Project } from "@/lib/data";
import ProjectModal from "./ProjectModal";

export default function Work() {
  const { t } = useLang();
  const [selected, setSelected] = useState<Project | null>(null);
  return (
    <section id="work" className="section work-section">
      <div className="section-heading">
        <div><p className="eyebrow">01 / {t("Lavori e dettagli", "Work and details")}</p><h2>{t("La luce, fatta", "Light, made")} <em>{t("materia.", "tangible.")}</em></h2></div>
        <p>{t("Una selezione dei nostri lavori. Apri le raccolte per osservare soluzioni, dettagli e fasi di posa.", "A selection of our work. Open each collection to explore solutions, details and installation stages.")}</p>
      </div>
      <div className="work-grid">
        {projects.map((project, index) => (
          <article className={`work-card ${index < 2 ? "work-card-featured" : ""}`} key={project.id}>
            <details><summary className="work-open" onClick={event => {event.preventDefault(); setSelected(project);}} aria-label={`${t("Apri raccolta", "Open collection")}: ${t(project.titleIT, project.titleEN)}`}>
              <span className="work-image"><Image src={project.coverImage} alt={t(project.titleIT, project.titleEN)} fill sizes="(max-width: 600px) 100vw, 50vw" /><span className="album-count">{project.media.length} {project.media.length === 1 ? t("foto", "photo") : t("foto", "photos")} <span aria-hidden="true">↗</span></span></span>
              <span className="work-caption"><span><span className="eyebrow">{String(index + 1).padStart(2, "0")} / {index < 2 ? t("Raccolta lavori", "Work collection") : t("Dettagli del lavoro", "Work details")}</span><span className="work-title">{t(project.titleIT, project.titleEN)}</span></span><span aria-hidden="true">↗</span></span>
            </summary><ul className="album-fallback">{project.media.map((media,index) => <li key={media.src}><a href={media.src}>{media.alt || `${t("Foto", "Photo")} ${index+1}`} ↗</a></li>)}</ul></details>
          </article>
        ))}
      </div>
      {selected && <ProjectModal key={selected.id} project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
