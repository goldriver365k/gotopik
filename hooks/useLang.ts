"use client";

import { useEffect, useState } from "react";
import { getSavedLanguage } from "@/lib/languages";

// Returns "en" on the server and on the client's first render (so SSR output
// and initial hydration match exactly), then updates to the real saved
// language from localStorage right after mount.
export function useLang(): string {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing client-only localStorage data after hydration
    setLang(getSavedLanguage());
  }, []);

  return lang;
}
