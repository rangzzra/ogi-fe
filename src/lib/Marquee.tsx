"use client";
import React from "react";

type Props = { speed?: number; className?: string; children: React.ReactNode };

export default function Marquee({
  speed = 12,
  className = "",
  children,
}: Props) {
  const duration = `${speed}s`;
  return (
    <div className={`overflow-hidden whitespace-nowrap relative ${className}`}>
      <div
        aria-hidden="true"
        style={{
          display: "inline-block",
          animation: `marquee ${duration} linear infinite`,
        }}
        className="leading-normal"
      >
        <span className="inline-block">{children}</span>
        <span className="inline-block">{children}</span>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
