import React from 'react';
import Btn from '../common/Btn';
import NavBar from '../common/NavBar';

// One recall card: you see the odd form, think of the verb, press Show answer, then Got it / Missed it.
export default function RecallStudy({ card, flipped, done, total, onFlip, onGot, onMiss, onBack, onHome }) {
  return (
    <section>
      <NavBar onBack={onBack} onHome={onHome} right={done + ' of ' + total + ' learned'} />
      <div style={styles.bar}>
        <i style={{ ...styles.barFill, width: (total ? (done / total) * 100 : 0) + '%' }} />
      </div>
      <div style={styles.flash}>
        <button
          key={card.id + String(flipped)}
          onClick={onFlip}
          aria-live="polite"
          className="flip-card"
          style={styles.face}
        >
          <span style={styles.tag}>{card.tag}</span>
          {!flipped ? (
            <>
              <span style={styles.big}>{card.front}</span>
              <span style={styles.hint}>Think of the answer, then tap to flip</span>
            </>
          ) : (
            <>
              <span style={styles.small}>{card.front}</span>
              <span style={styles.arrow}>↓</span>
              <span style={styles.big}>{card.main}</span>
              {card.subs.map((s, i) => <span key={i} style={styles.sub}>{s}</span>)}
            </>
          )}
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
    position: 'relative', minHeight: 280, width: '100%', border: '1px solid var(--line)', background: 'var(--card)',
    borderRadius: 18, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    padding: '36px 20px 40px', textAlign: 'center', font: 'inherit', color: 'inherit', cursor: 'pointer',
    animation: 'flip .28s ease',
  },
  tag: { position: 'absolute', top: 12, left: 16, right: 16, color: 'var(--muted)', fontSize: 13, textAlign: 'left' },
  hint: { position: 'absolute', bottom: 12, color: 'var(--muted)', fontSize: 13 },
  big: { fontFamily: '"Gentium Plus", serif', fontSize: 42, lineHeight: 1.2, overflowWrap: 'anywhere' },
  small: { fontFamily: '"Gentium Plus", serif', fontSize: 22, color: 'var(--muted)' },
  arrow: { color: 'var(--muted)', margin: '2px 0' },
  sub: { fontFamily: '"Gentium Plus", serif', fontSize: 18, color: 'var(--muted)', marginTop: 6, overflowWrap: 'anywhere' },
  answers: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 },
  answerBtn: {
    border: '2px solid var(--line)', borderRadius: 12, padding: '14px 16px', font: 'inherit', fontWeight: 600,
    cursor: 'pointer', background: 'var(--card)', color: 'var(--ink)',
  },
  miss: { border: '2px solid var(--bad)', color: 'var(--bad)' },
  got: { border: '2px solid var(--good)', color: 'var(--good)' },
};
