import { useEffect, useRef, useState } from 'react';
import s from './Hero.module.css';
import { data } from '../data/data';
import akash from '../assets/akash.jpg';

const typeStrings = [
  'Full Stack Developer',
  'MERN Stack Engineer',
  'React + Node.js Dev',
  'Open to opportunities',
];

function Typewriter() {
  const [text, setText] = useState('');
  const [idx, setIdx] = useState(0);
  const [typing, setTyping] = useState(true);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const target = typeStrings[idx];
    let timeout;
    if (typing) {
      if (charIdx < target.length) {
        timeout = setTimeout(() => { setText(target.slice(0, charIdx + 1)); setCharIdx(c => c + 1); }, 55);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => { setText(target.slice(0, charIdx - 1)); setCharIdx(c => c - 1); }, 30);
      } else {
        setIdx(i => (i + 1) % typeStrings.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [charIdx, typing, idx]);

  return (
    <span className={s.typetext}>
      {text}<span className={s.cursor}>|</span>
    </span>
  );
}

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;

    const draw = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(255,255,255,0.06)';
      const gap = 30;
      for (let x = 0; x < canvas.width; x += gap) {
        for (let y = 0; y < canvas.height; y += gap) {
          ctx.beginPath();
          ctx.arc(x, y, 0.7, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    draw();
    const ro = new ResizeObserver(() => { cancelAnimationFrame(raf); raf = requestAnimationFrame(draw); });
    ro.observe(canvas);
    return () => { ro.disconnect(); cancelAnimationFrame(raf); };
  }, []);

  return (
    <section className={s.hero} id="hero">
      <canvas ref={canvasRef} className={s.canvas} />

      <div className={s.bento}>

        {/* Card 1 — Main intro */}
        <div className={`${s.card} ${s.cardMain}`}>
          <div className={s.statusChip}>
            <span className={s.statusDot} />
            {data.status}
          </div>
          <h1 className={s.name}>{data.name}</h1>
          <div className={s.typeline}>
            <span className={s.typePrefix}>$ </span>
            <Typewriter />
          </div>
          <p className={s.bio}>{data.bio}</p>
          <div className={s.cardActions}>
            <a href="#work"    className={s.btnPrimary}>View Projects</a>
            <a href={`mailto:${data.email}`} className={s.btnSecondary}>Email Me</a>
          </div>
        </div>

        {/* Card 2 — Photo */}
        <div className={`${s.card} ${s.cardPhoto}`}>
          <img src={akash} alt="Akash Mehar" className={s.photo} />
          <div className={s.photoOverlay}>
            <span className={s.photoName}>{data.name}</span>
            <span className={s.photoLoc}>📍 {data.location}</span>
          </div>
        </div>

        {/* Card 3 — Stats */}
        <div className={`${s.card} ${s.cardStats}`}>
          {[
            { n: '2+',  l: 'Projects' },
            { n: '4+',  l: 'Yrs Coding' },
            { n: 'MERN',l: 'Core Stack' },
          ].map((st, i) => (
            <div key={i} className={s.statItem}>
              <span className={s.statN}>{st.n}</span>
              <span className={s.statL}>{st.l}</span>
            </div>
          ))}
        </div>

        {/* Card 4 — Stack pills */}
        <div className={`${s.card} ${s.cardStack}`}>
          <div className={s.cardLabel}>Tech Stack</div>
          <div className={s.pills}>
            {data.stack.map((t, i) => (
              <span key={i} className={`${s.pill} ${s['pill_' + t.type]}`}>{t.label}</span>
            ))}
          </div>
        </div>

        {/* Card 5 — GitHub */}
        <div className={`${s.card} ${s.cardGithub}`}>
          <div className={s.cardLabel}>GitHub</div>
          <a href={data.github} target="_blank" rel="noreferrer" className={s.ghLink}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            <span>@Akashmehr</span>
            <span className={s.ghArrow}>↗</span>
          </a>
        </div>

        {/* Card 6 — Available */}
        <div className={`${s.card} ${s.cardAvail}`}>
          <div className={s.availInner}>
            <div className={s.availGlow} />
            <span className={s.availText}>Available for full-time &amp; freelance</span>
            <a href="mailto:akashmehar9021@gmail.com" className={s.availBtn}>Let's talk →</a>
          </div>
        </div>

      </div>
    </section>
  );
}
