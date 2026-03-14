import s from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={s.footer}>
      <span className={s.mono}>akash.dev © 2025</span>
      <span className={s.mono} style={{ color: 'var(--text3)' }}>built with React · deployed on Vercel</span>
      <a href="#" className={s.top}>↑ top</a>
    </footer>
  );
}
