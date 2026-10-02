import React from 'react';
import { CHAPTERS } from '../../data/vocabulary';
import Btn from '../common/Btn';
import NavBar from '../common/NavBar';

// Choose the chapters (none are marked at first) and which side to show first.
export default function ChapterSetup({ selected, dir, count, onToggle, onSelectAll, onClear, onDir, onStart, onHome }) {
  return (
    <section>
      <NavBar onBack={onHome} onHome={onHome} />
      <h1 style={styles.h1}>Greek vocabulary</h1>
      <p style={styles.sub}>Merkle &amp; Plummer, chapters 1–23</p>

      <div style={styles.panel}>
        <h2 style={styles.h2}>Chapters</h2>
        <div style={styles.chips}>
          {CHAPTERS.map((n) => (
            <button
              key={n}
              aria-label={'Chapter ' + n}
              aria-pressed={!!selected[n]}
              onClick={() => onToggle(n)}
              style={{ ...styles.chip, ...(selected[n] ? styles.chipOn : null) }}
            >
              {n}
            </button>
          ))}
        </div>
        <div style={styles.row}>
          <button style={styles.link} onClick={onSelectAll}>Select all</button>
          <button style={styles.link} onClick={onClear}>Clear</button>
        </div>
        <p style={styles.count}>{count} words selected</p>
      </div>

      <div style={styles.panel}>
        <h2 style={styles.h2}>Show first</h2>
        <div style={styles.seg}>
          <button
            aria-pressed={dir === 'ge'}
            onClick={() => onDir('ge')}
            style={{ ...styles.segBtn, ...(dir === 'ge' ? styles.segOn : null) }}
          >
            Greek
          </button>
          <button
            aria-pressed={dir === 'eg'}
            onClick={() => onDir('eg')}
            style={{ ...styles.segBtn, ...(dir === 'eg' ? styles.segOn : null) }}
          >
            English
          </button>
        </div>
      </div>

      <Btn disabled={count === 0} onClick={onStart} style={{ marginBottom: 0 }}>Start studying</Btn>
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
    border: '1px solid var(--line)',
    background: 'transparent',
    color: 'var(--ink)',
    borderRadius: 999,
    minWidth: 44,
    padding: '8px 10px',
    font: 'inherit',
    cursor: 'pointer',
  },
  chipOn: { background: 'var(--accent)', color: 'var(--accent-ink)', border: '1px solid var(--accent)' },
  row: { display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 10 },
  link: { background: 'none', border: 0, color: 'var(--accent)', font: 'inherit', cursor: 'pointer', padding: '4px 0' },
  count: { color: 'var(--muted)', margin: '10px 0 0' },
  seg: { display: 'flex', border: '1px solid var(--line)', borderRadius: 10, overflow: 'hidden' },
  segBtn: { flex: 1, border: 0, background: 'transparent', color: 'var(--ink)', padding: 10, font: 'inherit', cursor: 'pointer' },
  segOn: { background: 'var(--accent)', color: 'var(--accent-ink)' },
};
