"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { dict, DEFAULT_LANG, LANGS } from "@/lib/i18n";

const LanguageContext = createContext(null);
const STORAGE_KEY = "sbjlc.lang";
const VALID = new Set(LANGS.map((l) => l.code));

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(DEFAULT_LANG);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
    if (stored && VALID.has(stored)) {
      setLangState(stored);
      return;
    }
    const nav = typeof navigator !== "undefined" ? navigator.language?.slice(0, 2) : null;
    if (nav && VALID.has(nav)) setLangState(nav);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (code) => {
    if (!VALID.has(code)) return;
    setLangState(code);
    try {
      window.localStorage.setItem(STORAGE_KEY, code);
    } catch {}
  };

  const value = useMemo(() => ({ lang, setLang, t: dict[lang] }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useT() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useT must be used within LanguageProvider");
  return ctx;
}
