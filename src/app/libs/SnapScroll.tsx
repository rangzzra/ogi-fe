/* Fungsi Scroll Section Snap */
"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SectionSnap() {
  useLayoutEffect(() => {
    const sections = gsap.utils.toArray(".panel");
    const totalSections = sections.length;

    gsap.to(sections, {
      xPercent: -100 * (totalSections - 1), // geser ke samping
      ease: "none",
      scrollTrigger: {
        trigger: ".horizontal-wrapper",
        pin: true,
        scrub: 1,
        snap: 1 / (totalSections - 1),
        end: () => `+=${window.innerWidth * (totalSections - 1)}`,
      },
    });
  }, []);

  return null;
}
