import { useState } from 'react';
import s from './Contact.module.css';
import { data } from '../data/data';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(data.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className={s.section}>
      <div className={s.container}>

        <div className={s.label}><span className={s.labelLine} /> contact</div>
        <h2 className={s.title}>Let's <span>build</span> together</h2>
        <p className={s.sub}>
          Open to full-time roles, freelance gigs, or just a good tech conversation.
          Drop a message — I reply fast.
        </p>

        <div className={s.terminal}>
          <div className={s.termBar}>
            <div className={s.termDots}>
              <span /><span /><span />
            </div>
          </div>
          <div className={s.termBody}>
            <div className={s.termLine}>
              <span className={s.prompt}>~</span>
              <span className={s.cmd}>whoami</span>
            </div>
            <div className={s.termOut}>Akash Mehar — Full Stack Developer, Pune IN</div>

            <div className={s.contactCards}>
              <button className={s.contactCard} onClick={copyEmail}>
                <span className={s.contactIcon}>@</span>
                <div>
                  <div className={s.contactKey}>email</div>
                  <div className={s.contactVal}>{data.email}</div>
                </div>
                <span className={s.copyHint}>{copied ? '✓ copied' : 'click to copy'}</span>
              </button>

              <a href={`tel:${data.phone}`} className={s.contactCard}>
                <span className={s.contactIcon}>☏</span>
                <div>
                  <div className={s.contactKey}>phone</div>
                  <div className={s.contactVal}>{data.phone}</div>
                </div>
              </a>

              <a href={data.github} target="_blank" rel="noreferrer" className={s.contactCard}>
                <span className={s.contactIcon}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
                </span>
                <div>
                  <div className={s.contactKey}>github</div>
                  <div className={s.contactVal}>@Akashmehr</div>
                </div>
                <span className={s.copyHint}>↗ open</span>
              </a>
            </div>
          </div>
        </div>

        <div className={s.cta}>
          <a href={`mailto:${data.email}`} className={s.ctaBtn}>
            Send me an email →
          </a>
        </div>

      </div>
    </section>
  );
}
