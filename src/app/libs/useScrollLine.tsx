/* Fungsi ScrollLine untuk section tertentu */
"use client"
import { useEffect, useState } from "react"

export function useScrollLine(
  maxHeight: number = 300,
  step: number = 100,
  sectionId: string = "business-service"
) {
  const [h, setH] = useState(0)

  useEffect(() => {
    const el = document.getElementById(sectionId)
    if (!el) return

    const onScroll = () => {
      const rect = el.getBoundingClientRect()

      // tinggi section
      const sectionHeight = el.offsetHeight

      // jarak yang sudah discroll DI DALAM section
      const progress = Math.min(
        Math.max(0, sectionHeight - rect.bottom), // bagian yang sudah dilewati
        sectionHeight
      )

      // convert ke tinggi garis
      const newHeight = (progress / sectionHeight) * maxHeight

      setH(newHeight)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [sectionId, maxHeight])

  return h
}
