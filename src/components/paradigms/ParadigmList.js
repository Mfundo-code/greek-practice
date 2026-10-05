import React from 'react';
import { PD } from '../../data/paradigms';
import Btn from '../common/Btn';
import NavBar from '../common/NavBar';

// Two levels, so there is no long scrolling:
//   1. the chapter headings as buttons (with how many paradigms each holds)
//   2. press a heading to open it and see only its paradigms
export default function ParadigmList({ section, onSection, onPick, onHome }) {
  // headings in the order of the notes, with how many paradigms each has
  const sections = [];
  PD.forEach((p) => {
    const found = sections.find((s) => s.name === p.sec);
    if (found) found.count += 1;
    else sections.push({ name: p.sec, count: 1 });
  });

  if (section) {
    return (
      <section>
        <NavBar onBack={() => onSection(null)} onHome={onHome} />
        <h1 style={styles.h1}>{section}</h1>
        <div style={styles.panel}>
          {PD.filter((p) => p.sec === section).map((p) => (
            <Btn key={p.id} kind="ghost" onClick={() => onPick(p)} style={styles.item}>
              {p.name}
            </Btn>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section>
      <NavBar onBack={onHome} onHome={onHome} right="Paradigms" />
      <p style={styles.sub}>Choose a chapter</p>
      <div style={styles.panel}>
        {sections.map((s) => (
          <Btn key={s.name} kind="ghost" onClick={() => onSection(s.name)} style={styles.item}>
            <span>{s.name}</span>
            <span style={styles.count}>{s.count} ›</span>
          </Btn>
        ))}
      </div>
    </section>
  );
}

const styles = {
  h1: { fontFamily: '"Gentium Plus", serif', fontSize: 24, margin: '6px 0 12px' },
  sub: { color: 'var(--muted)', margin: '0 0 12px' },
  panel: { background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 14, padding: 14, marginBottom: 14 },
  item: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, textAlign: 'left' },
  count: { color: 'var(--muted)', whiteSpace: 'nowrap' },
};
