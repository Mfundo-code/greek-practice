import React from 'react';
import Btn from '../common/Btn';
import NavBar from '../common/NavBar';

export default function ParsingFinish({ score, total, onAgain, onChange, onHome }) {
  return (
    <section>
      <NavBar onBack={onChange} onHome={onHome} />
      <div style={styles.panel}>
        <p style={styles.big}>{score} / {total}</p>
        <p style={styles.sub}>forms parsed completely correct</p>
        <Btn onClick={onAgain} style={{ marginBottom: 8 }}>Another round</Btn>
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
