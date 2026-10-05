import React from 'react';

// A plain read-only table (used to look at Appendix A and the roots table).
export default function SimpleTable({ cols, rows }) {
  return (
    <div style={styles.scroll}>
      <table style={styles.table}>
        <thead>
          <tr>{cols.map((c, i) => <th key={i} style={styles.th}>{c}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>{r.map((c, k) => <td key={k} style={k === 0 ? styles.first : styles.td}>{c}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const cell = { border: '1px solid var(--line)', padding: '6px 8px', textAlign: 'left', fontSize: 15, whiteSpace: 'nowrap' };
const styles = {
  scroll: { overflowX: 'auto', WebkitOverflowScrolling: 'touch', marginBottom: 14 },
  table: { borderCollapse: 'collapse', width: '100%', background: 'var(--card)', fontFamily: '"Gentium Plus", serif' },
  th: { ...cell, background: 'var(--slot)', fontWeight: 600, fontFamily: '"Source Sans 3", system-ui, sans-serif' },
  first: { ...cell, background: 'var(--slot)', fontWeight: 600 },
  td: cell,
};
