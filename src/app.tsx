import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Phase = "loading" | "welcome" | "main";

function Particles() {
  const dots = Array.from({ length: 18 }, (_, i) => i);
  return (
    <div className="particles" aria-hidden="true">
      {dots.map((i) => (
        <div key={i} className="particle" style={{
          left: `${(i * 37 + 11) % 100}%`,
          top: `${(i * 53 + 7) % 100}%`,
          animationDelay: `${(i * 0.7) % 6}s`,
          animationDuration: `${5 + (i % 4)}s`,
          width: i % 3 === 0 ? "2px" : "1px",
          height: i % 3 === 0 ? "2px" : "1px",
        }} />
      ))}
    </div>
  );
}

function SweepLine() {
  return <div className="sweep-line" aria-hidden="true" />;
}

function CornerBrackets() {
  return (
    <div className="corner-brackets" aria-hidden="true">
      <span className="cb cb-tl" />
      <span className="cb cb-tr" />
      <span className="cb cb-bl" />
      <span className="cb cb-br" />
    </div>
  );
}

function HudOrbs() {
  return (
    <div className="hud-orbs" aria-hidden="true">
      <div className="hud-orb hud-orb-1" />
      <div className="hud-orb hud-orb-2" />
      <div className="hud-orb hud-orb-3" />
    </div>
  );
}

function LoadingScreen({ progress }: { progress: number }) {
  const status =
    progress < 20 ? "BOOTING KERNEL" :
    progress < 45
