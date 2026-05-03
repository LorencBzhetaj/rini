"use client";
import { useRef, useState, ReactNode } from "react";

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
}

export default function Magnet({
  children,
  padding = 80,
  strength = 3,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    setPos({ x: dx / strength, y: dy / strength });
  };

  const handleMouseEnter = (e: React.MouseEvent) => {
    setActive(true);
    handleMouseMove(e);
  };

  const handleMouseLeave = () => {
    setActive(false);
    setPos({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        display: "inline-flex",
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        transition: active
          ? "transform 0.3s ease-out"
          : "transform 0.6s ease-in-out",
        willChange: "transform",
        padding: `${padding}px`,
        margin: `-${padding}px`,
      }}
    >
      {children}
    </div>
  );
}