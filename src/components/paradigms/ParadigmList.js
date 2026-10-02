import React from 'react';
import { PD } from '../../data/paradigms';
import Btn from '../common/Btn';
import NavBar from '../common/NavBar';

// All paradigms, grouped under the chapter headings of the notes.
export default function ParadigmList({ onPick, onHome }) {
  let last = null;
  return (
    <section>
      <NavBar onBack={onHome} onHome={onHome} right="Paradigms" />
      <div style={styles.panel}>
        {PD.map((p) => {
          const head = p.sec && p.sec !== last ? p.sec : null;
          last = p.sec;
          return (
            <React.Fragment key={p.id}>
              {head && <div style={styles.secHead}>{head}</div>}
              <Btn kind="ghost" onClick={() => onPick(p)} style={{ textAlign: 'left' }}>{p.name}</Btn>
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}

const styles = {
  panel: { background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 14, padding: 14, marginBottom: 14 },
  secHead: { margin: '16px 0 6px', fontWeight: 600, textAlign: 'left', color: 'var(--muted)' },
};
