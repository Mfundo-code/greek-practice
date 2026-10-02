import React, { useState } from 'react';
import shuffle from '../utils/shuffle';
import ParadigmList from './paradigms/ParadigmList';
import ParadigmTable from './paradigms/ParadigmTable';

// Build-the-paradigm game: holds the state, the screens live in ./paradigms
export default function Paradigms({ onHome }) {
  const [section, setSection] = useState(null); // chapter heading that is open, or null for the list of headings
  const [game, setGame] = useState(null); // { p, answers, tiles }
  const [placed, setPlaced] = useState([]); // tile id (or null) for each cell
  const [sel, setSel] = useState(null); // tile that is selected
  const [checked, setChecked] = useState(false);

  const start = (p) => {
    const answers = [];
    p.groups.forEach((g) => g.rows.forEach((r) => r.slice(1).forEach((a) => answers.push(a))));
    const tiles = shuffle(answers.map((text, id) => ({ id, text })));
    setGame({ p, answers, tiles });
    setPlaced(answers.map(() => null));
    setSel(null);
    setChecked(false);
  };

  const place = (idx, id) => {
    if (checked || placed[idx] !== null || id === null) return;
    setPlaced((arr) => arr.map((v, i) => (i === idx ? id : v)));
    setSel(null);
  };

  const clickCell = (idx) => {
    if (checked) return;
    if (placed[idx] !== null) {
      setPlaced((arr) => arr.map((v, i) => (i === idx ? null : v)));
      return;
    }
    place(idx, sel);
  };

  if (!game) {
    return <ParadigmList section={section} onSection={setSection} onPick={start} onHome={onHome} />;
  }

  return (
    <ParadigmTable
      game={game}
      placed={placed}
      sel={sel}
      checked={checked}
      onSelect={setSel}
      onCell={clickCell}
      onDrop={place}
      onCheck={() => setChecked(true)}
      onRetry={() => start(game.p)}
      onBack={() => setGame(null)}
      onHome={onHome}
    />
  );
}