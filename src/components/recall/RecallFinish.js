import React from 'react';
import Btn from '../common/Btn';
import NavBar from '../common/NavBar';

export default function RecallFinish({ total, missedCount, onAgain, onChange, onHome }) {
  return (
    <section>
      <NavBar onBack={onChange} onHome={onHome} />
      <div style={styles.panel}>
        <p style={styles.big}>Deck complete</p>
        <p style={styles.sub}>{total} cards done. {missedCount} needed a second look.</p>
        <Btn onClick={onAgain} style={{ marginBottom: 8 }}>Study again</Btn>
        <Btn kind="ghost" onClick={onChange} style={{ marginBottom: 0 }}>Change what I practise</Btn>
      </div>
    </section>
  );
}

const styles = {
  panel: { background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 14, marginBottom: 14, textAlign: 'center', padding: '24px 14px' },
  big: { fontFamily: '"Gentium Plus", serif', fontSize: 34, margin: '0 0 6px' },
  sub: { color: 'var(--muted)', margin: '0 0 16px' },
};
