"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";

type TechSphereProps = {
  skills: string[];
  radius?: number;   // px
  baseSpeed?: number; // rad / sec when idle (yaw)
  maxSpeed?: number;  // cap on mouse-driven speed (rad / sec)
};

function fibonacciSphere(n: number, r: number) {
  const pts: { x: number; y: number; z: number }[] = [];
  const phi = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / Math.max(1, n - 1)) * 2; // 1..-1
    const rad = Math.sqrt(1 - y * y);
    const theta = phi * i;
    const x = Math.cos(theta) * rad;
    const z = Math.sin(theta) * rad;
    pts.push({ x: x * r, y: y * r, z: z * r });
  }
  return pts;
}

// rotate point around Y (yaw), then around X (pitch)
function rotate(p: { x: number; y: number; z: number }, yaw: number, pitch: number) {
  const cy = Math.cos(yaw), sy = Math.sin(yaw);
  let x1 = p.x * cy + p.z * sy;
  let z1 = -p.x * sy + p.z * cy;

  const cx = Math.cos(pitch), sx = Math.sin(pitch);
  let y2 = p.y * cx - z1 * sx;
  let z2 = p.y * sx + z1 * cx;

  return { x: x1, y: y2, z: z2 };
}

const TechSphere: React.FC<TechSphereProps> = ({
  skills,
  radius = 170,
  baseSpeed = 0.25,   // ~0.25 rad/sec idle spin
  maxSpeed = 1.6      // speed cap when dragging mouse
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // base points (unrotated)
  const basePts = useMemo(() => fibonacciSphere(skills.length, radius), [skills.length, radius]);

  // angles (radians)
  const yawRef = useRef(0);
  const pitchRef = useRef(0);

  // velocities (radians/sec)
  const vyawRef = useRef(baseSpeed);
  const vpitchRef = useRef(0);

  // targets for easing
  const vyawTarget = useRef(baseSpeed);
  const vpitchTarget = useRef(0);

  // re-render trigger each frame (positions are computed on render)
  const [, setTick] = useState(0);

  useEffect(() => {
    let raf = 0;
    let last = performance.now();

    const loop = (t: number) => {
      const dt = (t - last) / 1000;
      last = t;

      // ease velocities toward targets (smooth follow)
      const ease = 0.08;
      vyawRef.current += (vyawTarget.current - vyawRef.current) * ease;
      vpitchRef.current += (vpitchTarget.current - vpitchRef.current) * ease;

      // integrate angles
      yawRef.current += vyawRef.current * dt;
      pitchRef.current += vpitchRef.current * dt;

      // clamp pitch to avoid flipping upside down
      const maxPitch = Math.PI / 3; // ~60°
      pitchRef.current = Math.max(-maxPitch, Math.min(maxPitch, pitchRef.current));

      setTick((n) => (n + 1) % 1000000);
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  // mouse → velocity
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;   // -0.5..0.5
      const dy = (e.clientY - cy) / rect.height;  // -0.5..0.5

      // map mouse direction to rotation speed (yaw ← dx, pitch ← -dy)
      vyawTarget.current = Math.max(-maxSpeed, Math.min(maxSpeed, dx * 2.0));
      vpitchTarget.current = Math.max(-maxSpeed, Math.min(maxSpeed, -dy * 2.0));
    };

    const onLeave = () => {
      vyawTarget.current = baseSpeed;
      vpitchTarget.current = 0;
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("touchmove", (te) => {
      if (!te.touches[0]) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (te.touches[0].clientX - cx) / rect.width;
      const dy = (te.touches[0].clientY - cy) / rect.height;
      vyawTarget.current = Math.max(-maxSpeed, Math.min(maxSpeed, dx * 2.0));
      vpitchTarget.current = Math.max(-maxSpeed, Math.min(maxSpeed, -dy * 2.0));
    }, { passive: true });
    el.addEventListener("touchend", onLeave);
    el.addEventListener("touchcancel", onLeave);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("touchend", onLeave);
      el.removeEventListener("touchcancel", onLeave);
    };
  }, [baseSpeed, maxSpeed]);

  const yaw = yawRef.current;
  const pitch = pitchRef.current;

  return (
    <div
      ref={containerRef}
      className="relative mx-auto select-none"
      style={{ width: radius * 2, height: radius * 2, perspective: 900 }}
    >
      {/* We do NOT rotate this wrapper; we rotate points in JS.
          That keeps text always left-to-right (no mirroring). */}
      <div className="absolute inset-0 [transform-style:preserve-3d]">
        {basePts.map((p, i) => {
          const rp = rotate(p, yaw, pitch);

          // depth-based shading/scale
          const zNorm = (rp.z + radius) / (2 * radius); // 0..1
          const opacity = 0.50 + zNorm * 0.50;
          const scale = 0.90 + zNorm * 0.30;

          return (
            <span
              key={`${skills[i]}-${i}`}
              className="absolute px-3 py-1 rounded-full border text-xs md:text-sm"
              style={{
                left: `calc(50% + ${rp.x}px)`,
                top: `calc(50% + ${-rp.y}px)`,
                transform: `translate(-50%, -50%) translate3d(0,0,${rp.z}px) scale(${scale})`,
                // palette: glass + border
                borderColor: "rgba(255,255,255,0.125)",
                background: "rgba(17,25,40,0.75)",
                color: "rgba(190, 193, 221, 0.95)",
                opacity,
                whiteSpace: "nowrap",
                backfaceVisibility: "hidden",
                willChange: "transform",
                pointerEvents: "none",
              }}
            >
              {skills[i]}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default TechSphere;
