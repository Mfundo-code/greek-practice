import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import Vocab from './components/Vocab';
import Paradigms from './components/Paradigms';
import Parsing from './components/Parsing';

/* ============================================================
   Greek Trainer — App shell.
   screens:  home | vocab | paradigms | parsing
   ============================================================ */
export default function App() {
  const [screen, setScreen] = useState('home');
  const [dark, setDark] = useState(
    () => typeof window !== 'undefined' && !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  // follow the device's light / dark setting
  useEffect(() => {
    if (!window.matchMedia) return undefined;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e) => setDark(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (!document.getElementById('greek-fonts')) {
      const link = document.createElement('link');
      link.id = 'greek-fonts';
      link.rel = 'stylesheet';
      link.href =
        'https://fonts.googleapis.com/css2?family=Gentium+Plus:wght@400;700&family=Source+Sans+3:wght@400;600&display=swap';
      document.head.appendChild(link);
    }
  }, []);

  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.background = dark ? themes.dark['--bg'] : themes.light['--bg'];
  }, [dark]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [screen]);

  const goHome = () => setScreen('home');

  return (
    <div style={{ ...styles.root, ...(dark ? themes.dark : themes.light) }}>
      <style>{globalCss}</style>
      <div style={styles.wrap}>
        {screen === 'home' && (
          <Home
            onVocab={() => setScreen('vocab')}
            onParadigms={() => setScreen('paradigms')}
            onParsing={() => setScreen('parsing')}
          />
        )}
        {screen === 'vocab' && <Vocab onHome={goHome} />}
        {screen === 'paradigms' && <Paradigms onHome={goHome} />}
        {screen === 'parsing' && <Parsing onHome={goHome} />}
      </div>
    </div>
  );
}

/* ---------------- Styles ---------------- */
const themes = {
  light: {
    '--bg': '#eef1f5', '--card': '#fff', '--ink': '#1c2433', '--muted': '#65708a', '--line': '#d5dbe6',
    '--accent': '#2b4c9b', '--accent-ink': '#fff', '--good': '#2f7d4f', '--goodbg': '#e6f3ec',
    '--bad': '#b3402f', '--badbg': '#fbe9e6', '--slot': '#f4f6fa',
  },
  dark: {
    '--bg': '#131826', '--card': '#1c2336', '--ink': '#e8ecf5', '--muted': '#93a0bd', '--line': '#2e3852',
    '--accent': '#7d9cf0', '--accent-ink': '#0f1524', '--good': '#6cc48f', '--goodbg': '#1d3529',
    '--bad': '#f08a78', '--badbg': '#3a1f1b', '--slot': '#161d2e',
  },
};

const globalCss = `
*{box-sizing:border-box}
@keyframes flip{from{transform:rotateX(70deg);opacity:.2}to{transform:none;opacity:1}}
@media (prefers-reduced-motion:reduce){.flip-card{animation:none!important}}
button:focus-visible{outline:3px solid var(--accent);outline-offset:2px}
`;

const styles = {
  root: {
    minHeight: '100vh',
    background: 'var(--bg)',
    color: 'var(--ink)',
    fontFamily: '"Source Sans 3", system-ui, sans-serif',
    fontSize: 16,
    lineHeight: 1.4,
    WebkitTextSizeAdjust: '100%',
  },
  wrap: { maxWidth: 640, margin: '0 auto', padding: 16 },
};
