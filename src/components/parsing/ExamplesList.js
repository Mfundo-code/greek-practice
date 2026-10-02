import React from 'react';
import { EXAMPLES } from '../../data/parsing';

// Every parsing example printed in the notes, as written there.
export default function ExamplesList() {
  return (
    <div style={styles.panel}>
      <h2 style={styles.h2}>Parsing examples in the notes ({EXAMPLES.length})</h2>
      {EXAMPLES.map((e, i) => (
        <div key={i} style={styles.item}>
          <div>
            <span style={styles.form}>{e.form}</span>
            <span style={styles.sec}>  §{e.sec}</span>
          </div>
          <div style={styles.parse}>{e.parse}</div>
          {e.fix && <div style={styles.fix}>{e.fix}</div>}
        </div>
      ))}
    </div>
  );
}

const styles = {
  panel: { background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 14, padding: 14, marginBottom: 14 },
  h2: { fontSize: 15, margin: '0 0 10px', fontWeight: 600 },
  item: { padding: '10px 0', borderTop: '1px solid var(--line)' },
  form: { fontFamily: '"Gentium Plus", serif', fontSize: 22 },
  sec: { color: 'var(--muted)', fontSize: 13 },
  parse: { fontFamily: '"Gentium Plus", serif', fontSize: 17, marginTop: 2 },
  fix: { color: 'var(--bad)', fontSize: 13, marginTop: 4 },
};
