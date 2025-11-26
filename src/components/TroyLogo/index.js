// AnimationDemo.jsx   (pure JavaScript, no TypeScript)
import React, { useEffect, useRef } from 'react';
import './AnimationDemo.css';   // <-- the CSS file below

export default function AnimationDemo() {
  const pathRef = useRef(null);

  // -----------------------------------------------------------------
  // 1. Build the three keyframes that Anime used:
  //    "0 0"  → nothing drawn
  //    "0 1"  → vertical line (top → bottom)
  //    "1 1"  → full shape
  // -----------------------------------------------------------------
  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    // Total length of the path (needed for stroke-dasharray/offset)
    const totalLength = path.getTotalLength();

    // Helper to set a specific dash state
    const setDash = (start, end) => {
      const dash = totalLength * start;               // start point
      const gap  = totalLength * (1 - end + start);   // gap after end
      path.style.strokeDasharray  = `${dash} ${gap}`;
      path.style.strokeDashoffset = totalLength - dash;
    };

    // Initial state – nothing drawn
    setDash(0, 0);

    // -------------------------------------------------------------
    // 2. Animation loop with requestAnimationFrame + manual timing
    // -------------------------------------------------------------
    let startTime = null;
    const duration = 5000;          // total per cycle
    const segment = duration / 3;   // each keyframe lasts ~666ms
    const staggerDelay = 100;       // same stagger as animejs

    const animate = (now) => {
      if (!startTime) startTime = now;
      const elapsed = now - startTime;

      // Determine which segment we are in (0-1-2)
      const phase = Math.floor(elapsed / (segment + staggerDelay)) % 3;

      // Local time inside the current segment (0 → segment)
      const local = Math.min(elapsed % (segment + staggerDelay), segment);

      // EaseInOutQuad (same as anime's `inOutQuad`)
      const t = local / segment;                     // 0 → 1
      const eased = t < 0.5
        ? 2 * t * t
        : 1 - Math.pow(-2 * t + 2, 2) / 2;

      // Map eased value to the three keyframes
      let start, end;
      if (phase === 0) {            // 0 0 → 0 1
        start = 0;
        end   = eased;              // 0 → 1
      } else if (phase === 1) {     // 0 1 → 1 1
        start = eased;              // 0 → 1
        end   = 1;
      } else {                      // 1 1 → 0 0 (reset)
        start = 1 - eased;          // 1 → 0
        end   = 0;
      }

      setDash(start, end);

      // Loop forever
      requestAnimationFrame(animate);
    };

    const rafId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className="docs-demo-html">
      <svg viewBox="0 0 304 112">
        <g
          stroke="currentColor"
          fill="none"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          {/* The path we animate */}
          <path
            ref={pathRef}
            className="line"
            d="M32 22h68v17H76v51 H59v-51H32z"
          />
        </g>
      </svg>
    </div>
  );
}