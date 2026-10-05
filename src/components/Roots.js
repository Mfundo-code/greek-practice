import React, { useState } from 'react';
import { ROOTS, stemOf, buildRootCards } from '../data/roots';
import useRecallDeck from './recall/useRecallDeck';
import RecallSetup from './recall/RecallSetup';
import RecallStudy from './recall/RecallStudy';
import RecallFinish from './recall/RecallFinish';
import SimpleTable from './recall/SimpleTable';

// 12.3 Roots vs Stems: see the odd aorist form, recall the verb and its root (or the other way round).
export default function Roots({ onHome }) {
  const deck = useRecallDeck();
  const [dir, setDir] = useState('ap'); // ap: aorist -> present+root, pa: present -> aorist+root

  if (deck.stage === 'setup') {
    return (
      <RecallSetup
        title="Roots vs stems"
        subtitle="§12.3 — the 2nd aorist uses the root, not the stem. Recall it from memory."
        extra={
          <div style={styles.panel}>
            <h2 style={styles.h2}>Show first</h2>
            <div style={styles.seg}>
              <button
                aria-pressed={dir === 'ap'}
                onClick={() => setDir('ap')}
                style={{ ...styles.segBtn, ...(dir === 'ap' ? styles.segOn : null) }}
              >
                Aorist form
              </button>
              <button
                aria-pressed={dir === 'pa'}
                onClick={() => setDir('pa')}
                style={{ ...styles.segBtn, ...(dir === 'pa' ? styles.segOn : null) }}
              >
                Present form
              </button>
            </div>
          </div>
        }
        table={<SimpleTable cols={['Present', 'Stem', 'Aorist', 'Root']} rows={ROOTS.map(([p, a, r]) => [p, stemOf(p), a, r])} />}
        tableButton="the roots table"
        count={ROOTS.length}
        unit="cards"
        onStart={() => deck.begin(buildRootCards(dir))}
        onHome={onHome}
      />
    );
  }

  if (deck.stage === 'study') {
    return (
      <RecallStudy
        card={deck.card}
        flipped={deck.flipped}
        done={deck.done}
        total={deck.total}
        onFlip={deck.flip}
        onGot={deck.got}
        onMiss={deck.miss}
        onBack={() => deck.setStage('setup')}
        onHome={onHome}
      />
    );
  }

  return (
    <RecallFinish
      total={deck.total}
      missedCount={deck.missedCount}
      onAgain={() => deck.begin(buildRootCards(dir))}
      onChange={() => deck.setStage('setup')}
      onHome={onHome}
    />
  );
}

const styles = {
  h2: { fontSize: 15, margin: '0 0 10px', fontWeight: 600 },
  panel: { background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 14, padding: 14, marginBottom: 14 },
  seg: { display: 'flex', border: '1px solid var(--line)', borderRadius: 10, overflow: 'hidden' },
  segBtn: { flex: 1, border: 0, background: 'transparent', color: 'var(--ink)', padding: 10, font: 'inherit', cursor: 'pointer' },
  segOn: { background: 'var(--accent)', color: 'var(--accent-ink)' },
};
