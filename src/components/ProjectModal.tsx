"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLang } from "@/lib/LangContext";
import { Project } from "@/lib/data";

export default function ProjectModal({ project, onClose }: {project: Project; onClose: () => void}) {
  const { t } = useLang();
  const [index, setIndex] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const touchStart = useRef<number | null>(null);
  const length = project.media.length;
  const move = (offset: number) => setIndex(i => (i + offset + length) % length);
  useEffect(() => {
    const element = dialog.current;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    element?.showModal();
    document.body.style.overflow = "hidden";
    return () => {element?.close(); document.body.style.overflow = previousOverflow; previousFocus?.focus();};
  }, []);
  const media = project.media[index];
  return <dialog ref={dialog} className="album-dialog" aria-labelledby="album-title" onCancel={onClose} onClick={event => {if (event.target === event.currentTarget) onClose();}} onKeyDown={event => {if (event.key === "ArrowRight") {event.preventDefault(); move(1);} if (event.key === "ArrowLeft") {event.preventDefault(); move(-1);}}}>
    <div className="album-header"><div><p className="eyebrow">{t("Raccolta fotografica", "Photo collection")}</p><h2 id="album-title">{t(project.titleIT,project.titleEN)}</h2></div><button autoFocus className="icon-button" onClick={onClose} aria-label={t("Chiudi raccolta", "Close collection")}>✕</button></div>
    <div className="album-media" onTouchStart={event => {touchStart.current = event.touches[0].clientX;}} onTouchEnd={event => {if(touchStart.current !== null) {const delta = event.changedTouches[0].clientX - touchStart.current; if(Math.abs(delta)>50) move(delta<0?1:-1);} touchStart.current = null;}}>
      {media.type === "img" ? <Image key={media.src} src={media.src} alt={media.alt || t(project.titleIT, project.titleEN)} fill sizes="(max-width: 1000px) 96vw, 1000px" style={{objectFit:"contain"}} loading="eager" /> : <video key={media.src} src={media.src} controls playsInline preload="metadata" />}
    </div>
    <div className="album-controls"><button className="icon-button" onClick={() => move(-1)} disabled={length<2} aria-label={t("Foto precedente", "Previous photo")}>←</button><p aria-live="polite" aria-atomic="true">{index+1} / {length}</p><button className="icon-button" onClick={() => move(1)} disabled={length<2} aria-label={t("Foto successiva", "Next photo")}>→</button></div>
    <p className="album-description">{t(project.descIT, project.descEN)}</p>
  </dialog>;
}
