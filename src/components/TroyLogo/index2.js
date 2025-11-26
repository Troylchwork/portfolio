import React, { useEffect, useRef } from 'react';
import './TroyLogo.css'; // We'll create this CSS next

const TroyLogo = ({ loop = false, size = 340 }) => {
  const svgRef = useRef(null);

  // Optional: restart animation on mount or when loop changes
  useEffect(() => {
    if (!svgRef.current) return;
    const paths = svgRef.current.querySelectorAll('.letter');
    paths.forEach(path => {
      path.style.animation = 'none';
      path.offsetHeight; // trigger reflow
      path.style.animation = null;
    });
  }, [loop]);

  return (
    <div className="troy-container">
      <svg
        ref={svgRef}
        viewBox="0 0 340 112"
        width={size}
        height="auto"
        className={loop ? 'loop' : ''}
        aria-labelledby="troy-title"
      >
        <title id="troy-title">TROY – Animated Logo</title>

        {/* T */}
        <g id="T">
          <polyline className="letter" points="20 22 20 90 37 90 37 22 20 22" />
          <path
            className="letter"
            d="M20 90V56.136C19.66 46.48 12.225 39 3 39c-9.389 0-17 7.611-17 17s7.611 17 17 17h8.5v17H3C-15.778 90-31 74.778-31 56s15.222-34 34-34c18.61 0 33.433 14.994 34 33.875V90H20z"
          />
        </g>

        {/* R */}
        <g id="R" transform="translate(80,0)">
          <polyline className="letter" points="0 22 0 90 17 90 17 22 0 22" />
          <path
            className="letter"
            d="M0 90V55.74C.567 36.993 15.39 22 34 22c18.778 0 34 15.222 34 34v34h-17V56c0-9.389-7.611-17-17-17-9.225 0-16.66 7.48-17 17.136V90H0z"
          />
          <path className="letter" d="M-8.5 22a8.5 8.5 0 1 1-8.477 9.067v-1.134c.283-4.42 3.966-7.933 8.477-7.933z" />
          <path className="letter" d="M17 73c-9.389 0-17-7.611-17-17v-8.5h-17V56c0 18.778 15.222 34 34 34V73z" />
        </g>

        {/* O */}
        <g id="O" transform="translate(170,0)">
          <path
            className="letter"
            d="M0 90V55.74C.567 36.993 15.39 22 34 22c18.778 0 34 15.222 34 34v34h-17V56c0-9.389-7.611-17-17-17-9.225 0-16.66 7.48-17 17.136V90H0z"
          />
        </g>

        {/* Y */}
        <g id="Y" transform="translate(250,0)">
          <path
            className="letter"
            d="M13 73c-9.389 0-17-7.611-17-17s7.611-17 17-17c9.18 0 16.58 7.4 17 17h-17v17h34V55.875C46.433 36.994 31.61 22 13 22c-18.778 0-34 15.222-34 34s15.222 34 34 34V73z"
          />
          <path className="letter" d="M38.477 73A8.5 8.5 0 1 1 30 82.067v-1.134c.295-4.42 3.967-7.933 8.477-7.933z" />
        </g>

        {/* Glow filter */}
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feFlood floodColor="#a8e6cf" floodOpacity="0.8" />
            <feComposite in2="blur" operator="in" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default TroyLogo;