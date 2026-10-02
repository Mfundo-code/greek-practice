import React from 'react';
import Btn from '../common/Btn';
import NavBar from '../common/NavBar';

// One paradigm: tap a form, then tap the cell it belongs in (drag and drop works too).
export default function ParadigmTable({
  game, placed, sel, checked, onSelect, onCell, onDrop, onCheck, onRetry, onBack, onHome,
}) {
  const { p, answers, tiles } = game;
  const textOf = (id) => tiles.find((t) => t.id === id).text;
  const used = new Set(placed.filter((x) => x !== null));
  const allFilled = placed.every((x) => x !== null);
  const right = checked ? placed.filter((id, i) => textOf(id) === answers[i]).length : 0;
  const pct = Math.round((right / answers.length) * 100);
  const title = p.name.length > 28 ? p.name.slice(0, 26) + '…' : p.name;

  let slotIdx = 0;
  return (
    <section>
      <NavBar onBack={onBack} onHome={onHome} right={title} />
      {!checked && <p style={styles.sub}>Tap a form below, then tap the cell it belongs in. Drag also works.</p>}

      <div style={styles.tscroll}>
        <table style={styles.table}>
          <thead>
            <tr>{p.cols.map((c, i) => <th key={i} style={styles.th}>{c}</th>)}</tr>
          </thead>
          <tbody>
            {p.groups.map((g, gi) => (
              <React.Fragment key={gi}>
                {g.head && <tr><td colSpan={p.cols.length} style={styles.lbl}>{g.head}</td></tr>}
                {g.rows.map((r, ri) => (
                  <tr key={ri}>
                    <td style={styles.lbl}>{r[0]}</td>
                    {r.slice(1).map((_, ci) => {
                      const idx = slotIdx++;
                      const id = placed[idx];
                      const filled = id !== null;
                      const ok = checked && filled && textOf(id) === answers[idx];
                      const no = checked && !ok;
                      return (
                        <td
                          key={ci}
                          style={styles.slot}
                          onClick={() => onCell(idx)}
                          onDragOver={(e) => e.preventDefault()}
                          onDrop={(e) => { e.preventDefault(); onDrop(idx, sel); }}
                        >
                          <span
                            style={{
                              ...styles.inner,
                              ...(!filled ? styles.empty : null),
                              ...(ok ? styles.ok : null),
                              ...(no ? styles.no : null),
                            }}
                          >
                            {filled ? textOf(id) : ''}
                          </span>
                          {no && <span style={styles.fix}>{answers[idx]}</span>}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {!checked && (
        <div style={styles.panel}>
          <h2 style={styles.h2}>Forms ({tiles.length})</h2>
          <div style={styles.bank}>
            {tiles.filter((t) => !used.has(t.id)).map((t) => (
              <button
                key={t.id}
                draggable
                onDragStart={(e) => { onSelect(t.id); e.dataTransfer.setData('text/plain', String(t.id)); }}
                onClick={() => onSelect(sel === t.id ? null : t.id)}
                style={{ ...styles.tile, ...(sel === t.id ? styles.tileSel : null) }}
              >
                {t.text}
              </button>
            ))}
          </div>
        </div>
      )}

      {!checked ? (
        <Btn disabled={!allFilled} onClick={onCheck}>Check my table</Btn>
      ) : (
        <div style={{ ...styles.panel, textAlign: 'center' }}>
          <p style={styles.score}>{right} / {answers.length}</p>
          <p style={styles.sub}>
            {pct === 100
              ? 'Whole table correct.'
              : pct + '% — green cells are right, the small green form under a red cell is what belonged there.'}
          </p>
          <Btn onClick={onRetry}>Try again</Btn>
          <Btn kind="ghost" onClick={onBack}>Another paradigm</Btn>
        </div>
      )}
    </section>
  );
}

const styles = {
  h2: { fontSize: 15, margin: '0 0 10px', fontWeight: 600 },
  sub: { color: 'var(--muted)', margin: '0 0 16px' },
  panel: { background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 14, padding: 14, marginBottom: 14 },
  tscroll: { overflowX: 'auto', WebkitOverflowScrolling: 'touch', marginBottom: 14 },
  table: { borderCollapse: 'collapse', width: '100%', minWidth: 320, background: 'var(--card)' },
  th: {
    border: '1px solid var(--line)', padding: '6px 8px', textAlign: 'left', fontSize: 15,
    background: 'var(--slot)', fontWeight: 600, whiteSpace: 'nowrap',
  },
  lbl: {
    border: '1px solid var(--line)', padding: '6px 8px', textAlign: 'left', fontSize: 15,
    background: 'var(--slot)', fontWeight: 600, whiteSpace: 'nowrap',
  },
  slot: { border: '1px solid var(--line)', minWidth: 76, height: 42, padding: 0, cursor: 'pointer' },
  inner: {
    width: '100%', height: '100%', minHeight: 42, display: 'flex', alignItems: 'center',
    justifyContent: 'center', fontFamily: '"Gentium Plus", serif', fontSize: 19, borderRadius: 6, padding: '0 6px',
  },
  empty: {
    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 5px, var(--slot) 5px, var(--slot) 10px)',
    border: '1px dashed var(--line)',
  },
  ok: { background: 'var(--goodbg)', color: 'var(--good)' },
  no: { background: 'var(--badbg)', color: 'var(--bad)', textDecoration: 'line-through' },
  fix: { display: 'block', fontFamily: '"Gentium Plus", serif', fontSize: 14, color: 'var(--good)', padding: '2px 4px' },
  bank: { display: 'flex', flexWrap: 'wrap', gap: 8, minHeight: 50 },
  tile: {
    fontFamily: '"Gentium Plus", serif', fontSize: 19, background: 'var(--card)', border: '1px solid var(--line)',
    borderRadius: 10, padding: '9px 13px', cursor: 'grab', color: 'inherit', touchAction: 'manipulation',
  },
  tileSel: { background: 'var(--accent)', color: 'var(--accent-ink)', border: '1px solid var(--accent)' },
  score: { fontFamily: '"Gentium Plus", serif', fontSize: 30, margin: '0 0 4px' },
};
