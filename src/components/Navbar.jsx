import { useState, useEffect, useRef } from 'react';
import s from './Navbar.module.css';

const navLinks = ['work', 'about', 'contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const tick = () => {
      const t = new Date().toLocaleTimeString('en-IN', {
        hour: '2-digit', minute: '2-digit', second: '2-digit',
        timeZone: 'Asia/Kolkata'
      });
      setTime(t + ' IST');
    };
    tick();
    const id = setInterval(tick, 1000);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => { clearInterval(id); window.removeEventListener('scroll', onScroll); };
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const nav = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className={`${s.bar} ${scrolled ? s.solid : ''}`} ref={menuRef}>
      <div className={s.left}>
        <span className={s.logo}>akash.dev</span>
        <span className={s.sep}>/</span>
        <span className={s.time}>{time}</span>
      </div>

      <nav className={s.links}>
        {navLinks.map(l => (
          <button key={l} className={s.link} onClick={() => nav(l)}>{l}</button>
        ))}
      </nav>

      <a href="mailto:akashmehar9021@gmail.com" className={s.hire}>
        <span className={s.dot} /> Hire me
      </a>

      <button
        className={`${s.hamburger} ${menuOpen ? s.open : ''}`}
        onClick={() => setMenuOpen(v => !v)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      {menuOpen && (
        <div className={s.mobileMenu}>
          {navLinks.map(l => (
            <button key={l} className={s.mobileLink} onClick={() => nav(l)}>{l}</button>
          ))}
          <a
            href="mailto:akashmehar9021@gmail.com"
            className={s.mobileLink}
            style={{ color: 'var(--green)', borderBottom: 'none' }}
            onClick={() => setMenuOpen(false)}
          >
            hire me →
          </a>
        </div>
      )}
    </header>
  );
}
