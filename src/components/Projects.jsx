import { useState } from 'react';
import s from './Projects.module.css';
import { data } from '../data/data';

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section id="work" className={s.section}>
      <div className={s.container}>
        <div className={s.header}>
          <div className={s.label}>
            <span className={s.labelLine} /> projects
          </div>
          <h2 className={s.title}>Selected <span>Work</span></h2>
          <p className={s.sub}>Things I've built. More on GitHub.</p>
        </div>

        <div className={s.grid}>
          {data.projects.map((p, i) => (
            <div
              key={i}
              className={`${s.card} ${active === i ? s.cardOpen : ''}`}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              style={{ '--accent': p.accent }}
            >
              {/* Terminal top bar */}
              <div className={s.termBar}>
                <div className={s.termDots}>
                  <span /><span /><span />
                </div>
              </div>

              <div className={s.body}>
                <h3 className={s.projName}>{p.name}</h3>
                <p className={s.tagline}>{p.tagline}</p>
                <p className={s.desc}>{p.desc}</p>

                <div className={s.features}>
                  {p.features.map((f, j) => (
                    <span key={j} className={s.feature}>
                      <span className={s.featureDot} style={{ background: p.accent }} />
                      {f}
                    </span>
                  ))}
                </div>

                <div className={s.footer}>
                  <div className={s.techStack}>
                    {p.stack.map((t, j) => (
                      <span key={j} className={s.tech}>{t}</span>
                    ))}
                  </div>
                  <a href={p.link} className={s.viewBtn}>
                    View →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
