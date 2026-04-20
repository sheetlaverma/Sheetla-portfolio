"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const animationMode: "snappy" | "cinematic" = "cinematic";

const animationProfiles = {
  snappy: {
    ease: "power2.out",
    heroWordDuration: 0.46,
    heroStagger: 0.08,
    sectionDuration: 0.56,
    sectionStart: "top 88%",
    lenisLerp: 0.14,
  },
  cinematic: {
    ease: "power4.out",
    heroWordDuration: 0.82,
    heroStagger: 0.14,
    sectionDuration: 0.96,
    sectionStart: "top 82%",
    lenisLerp: 0.08,
  },
};

export default function AnimationProvider() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const profile = animationProfiles[animationMode];

    if (reducedMotion) {
      return;
    }

    document.documentElement.classList.add("motion-ready");

    const lenis = new Lenis({
      lerp: profile.lenisLerp,
      smoothWheel: true,
      syncTouch: true,
    });

    let rafId = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };

    rafId = window.requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);

    const ctx = gsap.context(() => {
      const heroWords = gsap.utils.toArray<HTMLElement>(".hero-word");

      gsap
        .timeline({ defaults: { ease: profile.ease } })
        .from(".hero-kicker", { autoAlpha: 0, y: 20, duration: 0.45 })
        .from(
          heroWords,
          {
            autoAlpha: 0,
            yPercent: 120,
            stagger: profile.heroStagger,
            duration: profile.heroWordDuration,
          },
          "-=0.2",
        )
        .from(".hero-role", { autoAlpha: 0, y: 24, duration: 0.45 }, "-=0.46")
        .from(
          ".hero-tagline, .hero-stack, .rotating-words, .hero-actions",
          { autoAlpha: 0, y: 20, stagger: 0.08, duration: 0.46 },
          "-=0.26",
        );

      gsap.utils.toArray<HTMLElement>(".js-reveal").forEach((section) => {
        gsap.fromTo(
          section,
          { autoAlpha: 0, y: 44 },
          {
            autoAlpha: 1,
            y: 0,
            duration: profile.sectionDuration,
            ease: profile.ease,
            scrollTrigger: {
              trigger: section,
              start: profile.sectionStart,
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    });

    return () => {
      document.documentElement.classList.remove("motion-ready");
      window.cancelAnimationFrame(rafId);
      lenis.destroy();
      ctx.revert();
    };
  }, []);

  return null;
}
