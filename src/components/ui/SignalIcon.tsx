"use client"
import { useScrollSignal } from "../../lib/useScrollSignal"

export default function SignalBar() {
  const level = useScrollSignal()

  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-end gap-4">
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className={`rounded-full transition-all ${
            level > i ? "bg-lime-200/80" : "bg-gray-500/20 backdrop-blur-md"
          }`}
          style={{
            width: "42px",            
            height: `${(i + 1) * 40}px`,
          }}
        />
      ))}
    </div>
  )
}