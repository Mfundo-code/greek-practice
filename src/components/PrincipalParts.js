import React, { useState } from 'react';
import { PARTS, PART_LABELS, PP_CHAPTERS, buildPartCards } from '../data/principalParts';
import useRecallDeck from './recall/useRecallDeck';
import RecallSetup from './recall/RecallSetup';
import RecallStudy from './recall/RecallStudy';
import RecallFinish from './recall/RecallFinish';
import SimpleTable from './recall/SimpleTable';

const chapterMap = (value) => {
  const o = {};
  PP_CHAPTERS.forEach((n) => (o[n] = value));
  return o;
};

// Appendix A: you see an odd form (e.g. εἴληφα) and recall the verb it comes from (λαμβάνω).
export default function PrincipalParts({ onHome }) {
  const deck = useRecallDeck();
  const [selected, setSelected] = useState(chapterMap(false)); // nothing marked at the start
  const count = buildPartCards(selected).length;

  if (deck.stage === 'setup') {
    return (
      <RecallSetup
        title="Appendix A — principal parts"
        subtitle="You get an irregular form. Recall the verb it comes from, then check."
        chips={PP_CHAPTERS}
        chipLabel="Chapters"
        selected={selected}
        onToggle={(n) => setSelected((s) => ({ ...s, [n]: !s[n] }))}
        onSelectAll={() => setSelected(chapterMap(true))}
        onClear={() => setSelected(chapterMap(false))}
        table={<SimpleTable cols={['Ch', ...PART_LABELS]} rows={PARTS.map((r) => [r.ch, ...r.forms])} />}
        tableButton="the Appendix A table"
        count={count}
        unit="cards (forms to recognise)"
        onStart={() => deck.begin(buildPartCards(selected))}
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
      onAgain={() => deck.begin(buildPartCards(selected))}
      onChange={() => deck.setStage('setup')}
      onHome={onHome}
    />
  );
}
