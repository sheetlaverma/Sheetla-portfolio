"use client";

import { useEffect, useState } from "react";

const words = ["DESIGN", "CODE", "CREATE"];

export default function RotatingWords() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 1800);

    return () => clearInterval(timer);
  }, []);

  return (
    <p className="rotating-words" aria-live="polite">
      {words[index]}
    </p>
  );
}
