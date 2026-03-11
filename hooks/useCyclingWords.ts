"use client";

import { useState, useEffect } from "react";

export function useCyclingWords(words: string[], interval: number = 2500) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (words.length <= 1) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words, interval]);

  return {
    currentWord: words[index],
    nextWord: words[(index + 1) % words.length],
    index,
  };
}
