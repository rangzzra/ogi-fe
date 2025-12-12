/* Fungsi Scroll Section Snap */
"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SectionSnap() {
  useLayoutEffect(() => {
    gsap.utils.toArray(".panel").forEach((panel: any, i: number) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false,
        snap: 1,
        onUpdate: (self) => {
          console.log(
            "progress:",
            self.progress.toFixed(3),
            "direction:",
            self.direction,
            "velocity",
            self.getVelocity()
          );
        },
      });
    });
  }, []);

  return null;
}
