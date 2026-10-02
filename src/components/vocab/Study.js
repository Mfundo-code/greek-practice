import React from 'react';
import Btn from '../common/Btn';
import NavBar from '../common/NavBar';

// One flashcard: tap to flip, then "Missed it" or "Got it".
export default function Study({ word, dir, flipped, done, total, onFlip, onGot, onMiss, onBack, onHome }) {
  const showGreek = dir === 'ge' ? !flipped : flipped;
  return (
    <section>
      <NavBar onBack={onBack} onHome={onHome} right={done + ' of ' + total + ' learned'} />
      <div style={styles.bar}>
        <i style={{ ...styles.barFill, width: (total ? (done / total) * 100 : 0) + '%' }} />
      </div>
      <div style={styles.flash}>
        <button
          key={word.g + String(flipped)}
          onClick={onFlip}
          aria-live="polite"
          className="flip-card"
          style={styles.face}
        >
          <span style={styles.tag}>Chapter {word.ch}</span>
          <span style={showGreek ? styles.greek : styles.eng}>{showGreek ? word.g : word.e}</span>
          <span style={styles.hint}>{flipped ? '' : 'Tap to flip'}</span>
        </button>
      </div>
      {flipped ? (
        <div style={styles.answers}>
          <button style={{ ...styles.answerBtn, ...styles.miss }} onClick={onMiss}>Missed it</button>
          <button style={{ ...styles.answerBtn, ...styles.got }} onClick={onGot}>Got it</button>
        </div>
      ) : (
        <Btn onClick={onFlip} style={{ marginBottom: 0 }}>Show answer</Btn>
      )}
    </section>
  );
}

const styles = {
  bar: { height: 6, background: 'var(--line)', borderRadius: 6, overflow: 'hidden', marginBottom: 14 },
  barFill: { display: 'block', height: '100%', background: 'var(--accent)', transition: 'width .25s' },
  flash: { perspective: 1200, marginBottom: 14 },
  face: {
    position: 'relative',
    minHeight: 260,
    width: '100%',
    border: '1px solid var(--line)',
    background: 'var(--card)',
    borderRadius: 18,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    textAlign: 'center',
    font: 'inherit',
    color: 'inherit',
    cursor: 'pointer',
    animation: 'flip .28s ease',
  },
  tag: { position: 'absolute', top: 12, left: 16, color: 'var(--muted)', fontSize: 13 },
  hint: { position: 'absolute', bottom: 12, color: 'var(--muted)', fontSize: 13 },
  greek: { fontFamily: '"Gentium Plus", serif', fontSize: 40, lineHeight: 1.2, overflowWrap: 'anywhere' },
  eng: { fontSize: 26 },
  answers: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 },
  answerBtn: {
    border: '2px solid var(--line)',
    borderRadius: 12,
    padding: '14px 16px',
    font: 'inherit',
    fontWeight: 600,
    cursor: 'pointer',
    background: 'var(--card)',
    color: 'var(--ink)',
  },
  miss: { border: '2px solid var(--bad)', color: 'var(--bad)' },
  got: { border: '2px solid var(--good)', color: 'var(--good)' },
};
