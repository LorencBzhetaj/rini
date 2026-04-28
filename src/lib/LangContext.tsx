"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import type { Lang } from "@/lib/data";

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (it: string, en: string) => string;
}

const LangContext = createContext<LangContextType>({
  lang: "it",
  setLang: () => {},
  t: (it) => it,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("it");
  const t = (it: string, en: string) => (lang === "it" ? it : en);
  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
