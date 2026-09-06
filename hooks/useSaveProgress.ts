"use client";

import { useEffect } from "react";
import { updateCurrentPosition, type StepSection } from "@/lib/progress";

// Saves the current level/step/section as the user's position once per visit.
export function useSaveProgress(level: number, step: number, section: StepSection) {
  useEffect(() => {
    updateCurrentPosition(level, step, section);
  }, [level, step, section]);
}
