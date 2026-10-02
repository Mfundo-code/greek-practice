import React, { useState } from 'react';
import { PARSE_CATS } from '../../data/parsing';
import Btn from '../common/Btn';
import NavBar from '../common/NavBar';
import ExamplesList from './ExamplesList';

// Choose what to practise (nothing is marked at first), or read the notes' examples.
export default function ParsingSetup({ cats, poolCount, onToggle, onStart, onHome }) {
  const [showExamples, setShowExamples] = useState(false);
  return (
    <section>
      <NavBar onBack={onHome} onHome={onHome} />
      <h1 style={styles.h1}>Parsing practice</h1>
      <p style={styles.sub}>
        You get an inflected form and parse it: case, number and gender for nouns, articles, pronouns and
        adjectives; tense, voice, person and number for verbs.
      </p>
      <div style={styles.panel}>
        <h2 style={styles.h2}>What do you want to practise?</h2>
        <div style={styles.chips}>
          {PARSE_CATS.map((c) => (
            <button
              key={c}
              aria-pressed={!!cats[c]}
              onClick={() => onToggle(c)}
              style={{ ...styles.chip, ...(cats[c] ? styles.chipOn : null) }}
            >
              {c}
            </button>
          ))}
        </div>
        <p style={styles.count}>{poolCount} different forms</p>
      </div>
      <Btn disabled={poolCount === 0} onClick={onStart}>Start parsing</Btn>
      <Btn kind="ghost" onClick={() => setShowExamples((s) => !s)}>
        {showExamples ? 'Hide' : 'Read'} all the parsing examples from the notes
      </Btn>
      {showExamples && <ExamplesList />}
    </section>
  );
}

const styles = {
  h1: { fontFamily: '"Gentium Plus", serif', fontSize: 26, margin: '6px 0 4px' },
  h2: { fontSize: 15, margin: '0 0 10px', fontWeight: 600 },
  sub: { color: 'var(--muted)', margin: '0 0 16px' },
  panel: { background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 14, padding: 14, marginBottom: 14 },
  chips: { display: 'flex', flexWrap: 'wrap', gap: 6 },
  chip: {
    border: '1px solid var(--line)', background: 'transparent', color: 'var(--ink)', borderRadius: 999,
    minWidth: 44, padding: '8px 10px', font: 'inherit', cursor: 'pointer',
  },
  chipOn: { background: 'var(--accent)', color: 'var(--accent-ink)', border: '1px solid var(--accent)' },
  count: { color: 'var(--muted)', margin: '10px 0 0' },
};
