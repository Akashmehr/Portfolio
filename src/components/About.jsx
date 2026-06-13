import s from './About.module.css';
import { data } from '../data/data';

const typeColors = {
  fe: '#93c5fd',
  be: '#00e599',
  db: '#fdba74',
  tools: '#888',
};

export default function About() {
  return (
    <section id="about" className={s.section}>
      <div className={s.container}>

        <div className={s.topRow}>
          <div className={s.bio}>
            <div className={s.label}><span className={s.labelLine} /> about</div>
            <h2 className={s.title}>About <span>Me</span></h2>
            <p className={s.text}>{data.bio}</p>
            <p className={s.text} style={{ marginTop: '1rem' }}>
              Currently interning at <strong style={{ color: 'var(--green)' }}>Geta AI</strong> — building AI-powered product interfaces.
              Graduated B.E. in IT with a 7.59 CGPA. Certified in the full MERN stack.
            </p>
          </div>

          <div className={s.exp}>
            <div className={s.expLabel}>Experience</div>
            {data.experience.map((job, i) => (
              <div key={i} className={s.expCard}>
                <div className={s.expTop}>
                  <div>
                    <div className={s.expRole}>{job.role}</div>
                    <div className={s.expCompany}>{job.company} · {job.location}</div>
                  </div>
                  <span className={s.expPeriod}>{job.period}</span>
                </div>
                <ul className={s.expList}>
                  {job.bullets.slice(0, 3).map((b, j) => (
                    <li key={j}><span className={s.arrow}>›</span> {b}</li>
                  ))}
                </ul>
                <div className={s.expTags}>
                  {job.tags.map((t, j) => (
                    <span key={j} className={s.expTag}>{t}</span>
                  ))}
                </div>
              </div>
            ))}

            <div className={s.eduCard}>
              <div className={s.expRole}>{data.education.degree}</div>
              <div className={s.expCompany}>{data.education.period} · GPA {data.education.gpa}</div>
              <div className={s.cert}>{data.education.cert}</div>
            </div>
          </div>
        </div>

        <div className={s.skillsBlock}>
          <div className={s.skillsLabel}>Full Stack — everything I work with</div>
          <div className={s.skillGrid}>
            {data.stack.map((t, i) => (
              <div key={i} className={s.skillChip} style={{ '--c': typeColors[t.type] }}>
                <span className={s.skillDot} />
                {t.label}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
