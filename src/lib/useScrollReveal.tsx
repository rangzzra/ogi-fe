/* Fungsi GSAP Scroll Reveal */
"use client"

import { useLayoutEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function useScrollReveal() {
  useLayoutEffect(() => {
    gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      )
    })
  }, [])

  return null
}
