import { useEffect, useRef, useState, useCallback } from 'react';
import './TextSplit3D.css';

const EASING = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'; // inOutQuad
const DURATION = 750;
const STAGGER_MAX = 320; // 8 × 40ms

export default function TextSplit3D() {
  const containerRef = useRef(null);
  const originalRef = useRef(null);
  const cloneRef = useRef(null);
  const wordsRef = useRef([]);
  const [showClone, setShowClone] = useState(false);
  const animating = useRef(false);

  // -------------------------------------------------
  // 1. Split text into <span class="word">
  // -------------------------------------------------
  const split = useCallback(() => {
    const p = originalRef.current;
    const raw = p.textContent;
    const html = raw
      .split(/(\s+|<br\s*\/?>)/gi)
      .map((part) => {
        if (!part.trim() || /<br/i.test(part)) return part;
        return part
          .trim()
          .split(/\s+/)
          .map((w) => `<span class="word">${w}</span>`)
          .join(' ');
      })
      .join('')
      .replace(/<br\s*\/?>/gi, '<br>');

    p.innerHTML = html;
    wordsRef.current = Array.from(p.querySelectorAll('.word'));
  }, []);

  // -------------------------------------------------
  // 2. Create accessible clone
  // -------------------------------------------------
  const createClone = useCallback(() => {
    const clone = document.createElement('p');
    clone.className = 'accessible-clone';
    clone.textContent = originalRef.current.textContent.replace(/\s+/g, ' ').trim();
    clone.setAttribute('aria-hidden', 'true');
    containerRef.current.appendChild(clone);
    cloneRef.current = clone;
  }, []);

  // -------------------------------------------------
  // 3. Staggered word animation (WAAPI)
  // -------------------------------------------------
  const animateWords = useCallback(
    (forward) => {
      if (animating.current) return;
      animating.current = true;

      const direction = forward ? 1 : -1;
      const targets = forward ? wordsRef.current : [...wordsRef.current].reverse();

      targets.forEach((el) => {
        const delay = Math.random() * STAGGER_MAX;
        const keyframes = [
          {
            transform: 'translateZ(0) rotateX(0) rotateY(0)',
            opacity: 1,
            outlineColor: 'transparent',
          },
          {
            transform: `translateZ(${6 * direction}rem) rotateY(${60 * direction}deg)`,
            opacity: 0.75,
            outlineColor: '#FFF0',
          },
        ];

        if (!forward) keyframes.reverse();

        el.animate(keyframes, {
          duration: DURATION,
          delay,
          easing: EASING,
          fill: 'forwards',
        });
      });

      setTimeout(() => (animating.current = false), DURATION + STAGGER_MAX);
    },
    []
  );

  // -------------------------------------------------
  // 4. Toggle handler
  // -------------------------------------------------
  const toggle = useCallback(() => {
    const next = !showClone;
    setShowClone(next);

    // container 3D rotate
    const cont = containerRef.current;
    cont.style.transition = 'transform 0.6s ease';
    cont.style.transform = next ? 'rotateX(0deg) rotateY(60deg)' : 'rotateX(0deg) rotateY(0deg)';

    // clone fade + z-move
    const clone = cloneRef.current;
    clone.classList.toggle('active', next);
    clone.style.transition = 'transform 0.6s ease, opacity 0.6s ease';
    clone.style.transform = next ? 'translateZ(-2rem)' : 'translateZ(0)';

    animateWords(next);
  }, [showClone, animateWords]);

  // -------------------------------------------------
  // Init
  // -------------------------------------------------
  useEffect(() => {
    split();
    createClone();

    // reduced-motion cleanup
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = () => {
      if (media.matches) {
        wordsRef.current.forEach((w) => w.getAnimations?.().forEach((a) => a.cancel()));
      }
    };
    media.addEventListener('change', handler);
    return () => media.removeEventListener('change', handler);
  }, [split, createClone]);

  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <div className="demo">
      <div ref={containerRef} className="large centered row">
        <p ref={originalRef} className="text-xl">
          Split text by words.<br />単語ごとに分割します。
        </p>
      </div>

      <div className="medium row">
        <fieldset className="controls">
          <button onClick={toggle} aria-pressed={showClone}>
            {showClone ? 'Hide' : 'Show'} accessible clone
          </button>
        </fieldset>
      </div>
    </div>
  );
}
