import React, { useState } from 'react';
import Btn from '../common/Btn';
import NavBar from '../common/NavBar';

// Setup screen for a recall drill. Optional pieces: chapter chips, an `extra` panel, a table to look at.
export default function RecallSetup({
  title, subtitle, chips, chipLabel, selected, onToggle, onSelectAll, onClear,
  extra, table, tableButton, count, unit, onStart, onHome,
}) {
  const [showTable, setShowTable] = useState(false);
  return (
    <section>
      <NavBar onBack={onHome} onHome={onHome} />
      <h1 style={styles.h1}>{title}</h1>
      <p style={styles.sub}>{subtitle}</p>

      {chips && (
        <div style={styles.panel}>
          <h2 style={styles.h2}>{chipLabel}</h2>
          <div style={styles.chips}>
            {chips.map((c) => (
              <button
                key={c}
                aria-pressed={!!selected[c]}
                onClick={() => onToggle(c)}
                style={{ ...styles.chip, ...(selected[c] ? styles.chipOn : null) }}
              >
                {c}
              </button>
            ))}
          </div>
          <div style={styles.row}>
            <button style={styles.link} onClick={onSelectAll}>Select all</button>
            <button style={styles.link} onClick={onClear}>Clear</button>
          </div>
        </div>
      )}

      {extra}

      <p style={styles.count}>{count} {unit}</p>
      <Btn disabled={count === 0} onClick={onStart}>Start</Btn>
      <Btn kind="ghost" onClick={() => setShowTable((s) => !s)}>{showTable ? 'Hide' : 'See'} {tableButton}</Btn>
      {showTable && table}
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
  row: { display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 10 },
  link: { background: 'none', border: 0, color: 'var(--accent)', font: 'inherit', cursor: 'pointer', padding: '4px 0' },
  count: { color: 'var(--muted)', margin: '0 0 10px' },
};
