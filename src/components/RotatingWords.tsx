"use client";

import { useEffect, useState } from "react";

const words = ["DESIGN", "CODE", "CREATE"];

export default function RotatingWords() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2200);

    return () => clearInterval(timer);
  }, []);

  return (
    <p className="rotating-words" aria-live="polite">
      <span key={words[index]} className="rotating-word">
        {words[index]}
      </span>
    </p>
  );
}
