"use client";

import { useEffect, useState } from "react";

export function useCourseProgress() {
  const [completedModules, setCompletedModules] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("course-progress");
    if (saved) {
      setCompletedModules(JSON.parse(saved));
    }
  }, []);

  function markComplete(slug: string) {
    if (completedModules.includes(slug)) return;

    const updated = [...completedModules, slug];
    setCompletedModules(updated);
    localStorage.setItem("course-progress", JSON.stringify(updated));
  }

  function isCompleted(slug: string) {
    return completedModules.includes(slug);
  }

  return {
    completedModules,
    markComplete,
    isCompleted,
  };
}
