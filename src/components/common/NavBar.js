import React from 'react';
import Btn from './Btn';

// Back + Home, visible at the top of every screen. `right` is optional text (progress, title…).
export default function NavBar({ onBack, onHome, right }) {
  return (
    <nav style={styles.nav}>
      <Btn kind="ghost" small onClick={onBack} style={{ marginBottom: 0 }}>← Back</Btn>
      <Btn kind="ghost" small onClick={onHome} style={{ marginBottom: 0 }}>⌂ Home</Btn>
      {right ? <span style={styles.right}>{right}</span> : null}
    </nav>
  );
}

const styles = {
  nav: {
    position: 'sticky',
    top: 0,
    zIndex: 10,
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    padding: '8px 0',
    marginBottom: 10,
    background: 'var(--bg)',
    borderBottom: '1px solid var(--line)',
  },
  right: { marginLeft: 'auto', color: 'var(--muted)', fontSize: 14, textAlign: 'right' },
};
