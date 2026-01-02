"use client"
import { useEffect, useState } from "react"

export function useScrollSignal() {
  const [level, setLevel] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight
      const percent = window.scrollY / max

      const newLevel = Math.min(10, Math.floor(percent * 10))
      setLevel(newLevel)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return level
}