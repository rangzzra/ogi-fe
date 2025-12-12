"use client"
import { useEffect, useState } from "react"

export function useScrollMove(speed: number = 0.3) {
  const [x, setX] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setX(window.scrollY * speed)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [speed])

  return x
}