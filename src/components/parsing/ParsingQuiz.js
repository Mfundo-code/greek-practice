import React from 'react';
import { EXAMPLES, accepted, parseText } from '../../data/parsing';
import Btn from '../common/Btn';
import NavBar from '../common/NavBar';

// One form to parse: pick a button for every field, press Check, see the full parse.
export default function ParsingQuiz({
  form, valid, fields, index, count, ans, checked, result, onPick, onCheck, onNext, onBack, onHome,
}) {
  const ready = fields.every((f) => ans[f.key]);
  const isVerb = valid[0].kind === 'v';
  const distinct = [...new Set(valid.map(parseText))];
  const fromNotes = EXAMPLES.filter((e) => e.form === form);

  const chipStyle = (f, o) => {
    const picked = ans[f.key] === o;
    if (!checked) return { ...styles.chip, ...(picked ? styles.chipOn : null) };
    const right = accepted(result.best, f.key).includes(o);
    if (picked && right) return { ...styles.chip, ...styles.chipOk };
    if (picked) return { ...styles.chip, ...styles.chipBad };
    if (right) return { ...styles.chip, ...styles.chipShow };
    return styles.chip;
  };

  return (
    <section>
      <NavBar onBack={onBack} onHome={onHome} right={index + 1 + ' of ' + count} />
      <div style={{ ...styles.panel, textAlign: 'center' }}>
        <p style={styles.sub}>Parse this form{isVerb ? ' (indicative mood)' : ''}</p>
        <div style={styles.bigForm}>{form}</div>
      </div>

      <div style={styles.panel}>
        {fields.map((f) => (
          <div key={f.key} style={styles.fieldRow}>
            <div style={styles.fieldLabel}>{f.label}</div>
            <div style={styles.chips}>
              {f.opts.map((o) => (
                <button key={o} disabled={checked} onClick={() => onPick(f.key, o)} style={chipStyle(f, o)}>
                  {o}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {!checked ? (
        <Btn disabled={!ready} onClick={onCheck}>Check</Btn>
      ) : (
        <div style={styles.panel}>
          <p style={{ ...styles.h2, color: result.correct ? 'var(--good)' : 'var(--bad)' }}>
            {result.correct ? 'Correct' : 'Not quite'}
          </p>
          <p style={styles.parseLine}>{distinct.join('  —or—  ')}</p>
          {fromNotes.map((e, k) => (
            <div key={k} style={styles.notes}>
              <strong>From your notes (§{e.sec}):</strong> {e.parse}
              {e.fix && <div style={styles.fix}>{e.fix}</div>}
            </div>
          ))}
          <Btn onClick={onNext} style={{ marginBottom: 0, marginTop: 12 }}>
            {index + 1 >= count ? 'Finish' : 'Next form'}
          </Btn>
        </div>
      )}
    </section>
  );
}

const styles = {
  h2: { fontSize: 15, margin: '0 0 10px', fontWeight: 600 },
  sub: { color: 'var(--muted)', margin: '0 0 16px' },
  panel: { background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 14, padding: 14, marginBottom: 14 },
  bigForm: { fontFamily: '"Gentium Plus", serif', fontSize: 44, lineHeight: 1.2, overflowWrap: 'anywhere' },
  fieldRow: { marginBottom: 12 },
  fieldLabel: { fontSize: 13, color: 'var(--muted)', marginBottom: 4 },
  chips: { display: 'flex', flexWrap: 'wrap', gap: 6 },
  chip: {
    border: '1px solid var(--line)', background: 'transparent', color: 'var(--ink)', borderRadius: 999,
    minWidth: 44, padding: '8px 10px', font: 'inherit', cursor: 'pointer',
  },
  chipOn: { background: 'var(--accent)', color: 'var(--accent-ink)', border: '1px solid var(--accent)' },
  chipOk: { background: 'var(--goodbg)', color: 'var(--good)', border: '1px solid var(--good)' },
  chipBad: { background: 'var(--badbg)', color: 'var(--bad)', border: '1px solid var(--bad)', textDecoration: 'line-through' },
  chipShow: { color: 'var(--good)', border: '2px solid var(--good)' },
  parseLine: { fontFamily: '"Gentium Plus", serif', fontSize: 19, margin: '0 0 12px' },
  notes: { fontFamily: '"Gentium Plus", serif', fontSize: 16, marginTop: 8, padding: '8px 10px', background: 'var(--slot)', borderRadius: 8 },
  fix: { color: 'var(--bad)', fontSize: 13, marginTop: 4, fontFamily: '"Source Sans 3", system-ui, sans-serif' },
};
