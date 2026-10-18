"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/LangContext";
import { WHATSAPP_URL } from "@/lib/data";

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const menu = useRef<HTMLDialogElement>(null);
  const links = [
    { href: "/#work", it: "Lavori", en: "Our work" },
    { href: "/#services", it: "Servizi", en: "Services" },
    { href: "/#why", it: "Chi siamo", en: "About us" },
    { href: "/#contact", it: "Contatti", en: "Contact" },
  ];
  const close = () => menu.current?.close();
  return <>
    <header className="site-header">
      <Link className="brand" href="/#home" aria-label="M.B Cartongesso — home"><Image src="/images/logo-transparent.png" alt="" width={64} height={49} /><span>M.B Cartongesso<small>Cartongesso & LED</small></span></Link>
      <nav className="desktop-nav" aria-label={t("Navigazione principale", "Main navigation")}>{links.map(link => <Link href={link.href} key={link.href}>{t(link.it,link.en)}</Link>)}</nav>
      <div className="header-controls"><div className="languages" role="group" aria-label={t("Lingua", "Language")}>{(["it","en"] as const).map(language => <button key={language} onClick={() => setLang(language)} aria-pressed={lang === language} lang={language} aria-label={language === "it" ? "Italiano" : "English"}>{language.toUpperCase()}</button>)}</div><a className="header-quote" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">{t("Parliamone", "Let's talk")} ↗</a><button className="menu-toggle icon-button" aria-label={t("Apri menu", "Open menu")} aria-haspopup="dialog" onClick={() => menu.current?.showModal()}>☰</button></div>
    </header>
    <dialog ref={menu} className="mobile-menu" aria-label={t("Menu di navigazione", "Navigation menu")} onClick={event => {if(event.target === event.currentTarget)close();}}><div className="mobile-menu-top"><span>M.B Cartongesso</span><button className="icon-button" onClick={close} aria-label={t("Chiudi menu", "Close menu")}>✕</button></div><nav>{links.map(link => <Link href={link.href} onClick={close} key={link.href}>{t(link.it,link.en)} <span aria-hidden="true">↗</span></Link>)}</nav><a className="button" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={close}>{t("Scrivici su WhatsApp", "Message on WhatsApp")} ↗</a><a className="menu-phone" href="tel:+393889995326">+39 388 999 5326</a></dialog>
  </>;
}
