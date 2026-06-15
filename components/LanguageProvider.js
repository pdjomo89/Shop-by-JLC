"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { dict, DEFAULT_LANG, LANGS } from "@/lib/i18n";

const LanguageContext = createContext(null);

const STORAGE_KEY = "sbjlc.lang";
const VALID = new Set(LANGS.map((l) => l.code));

function resolveInitialLang() {
  if (typeof window === "undefined") return DEFAULT_LANG;

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && VALID.has(stored)) return stored;

  const browserLang = window.navigator?.language?.slice(0, 2);
  if (browserLang && VALID.has(browserLang)) return browserLang;

  return DEFAULT_LANG;
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(DEFAULT_LANG);

  useEffect(() => {
    const initialLang = resolveInitialLang();
    setLangState(initialLang);
    document.documentElement.lang = initialLang;
  }, []);

  const setLang = useCallback((code) => {
    if (!VALID.has(code)) {
      console.warn("Invalid language:", code);
      return;
    }


    setLangState(code);
    document.documentElement.lang = code;

    try {
      window.localStorage.setItem(STORAGE_KEY, code);
    } catch {
      // ignore storage failure
    }
  }, []);

  const value = useMemo(() => {
    const safeLang = VALID.has(lang) ? lang : DEFAULT_LANG;

    return {
      lang: safeLang,
      setLang,
      t: dict[safeLang] ?? dict[DEFAULT_LANG],
      langs: LANGS,
    };
  }, [lang, setLang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useT() {
  const ctx = useContext(LanguageContext);

  if (!ctx) {
    throw new Error("useT must be used within LanguageProvider");
  }

  return ctx;
}