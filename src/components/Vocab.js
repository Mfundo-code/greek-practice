import React, { useState, useEffect } from 'react';
import { ALL, CHAPTERS } from '../data/vocabulary';
import shuffle from '../utils/shuffle';
import ChapterSetup from './vocab/ChapterSetup';
import Study from './vocab/Study';
import Finish from './vocab/Finish';

const chapterMap = (value) => {
  const o = {};
  CHAPTERS.forEach((n) => (o[n] = value));
  return o;
};

// Vocabulary flashcards: holds the state, the screens live in ./vocab
export default function Vocab({ onHome }) {
  const [stage, setStage] = useState('setup'); // setup | study | finish
  const [selected, setSelected] = useState(chapterMap(false)); // nothing marked at the start
  const [dir, setDir] = useState('ge');
  const [queue, setQueue] = useState([]);
  const [total, setTotal] = useState(0);
  const [done, setDone] = useState(0);
  const [missed, setMissed] = useState({});
  const [flipped, setFlipped] = useState(false);

  const count = ALL.filter((w) => selected[w.ch]).length;

  const begin = () => {
    const q = shuffle(ALL.filter((w) => selected[w.ch]));
    setQueue(q);
    setTotal(q.length);
    setDone(0);
    setMissed({});
    setFlipped(false);
    setStage('study');
  };

  const flip = () => {
    if (queue.length) setFlipped((f) => !f);
  };

  const got = () => {
    const rest = queue.slice(1);
    setQueue(rest);
    setDone((d) => d + 1);
    setFlipped(false);
    if (!rest.length) setStage('finish');
  };

  const miss = () => {
    const w = queue[0];
    const rest = queue.slice(1);
    rest.splice(Math.min(rest.length, 4 + Math.floor(Math.random() * 4)), 0, w);
    setQueue(rest);
    setMissed((m) => ({ ...m, [w.g]: true }));
    setFlipped(false);
  };

  // keyboard: space/enter flips, right arrow = got it, left arrow = missed it
  useEffect(() => {
    if (stage !== 'study') return undefined;
    const onKey = (e) => {
      if ((e.key === ' ' || e.key === 'Enter') && document.activeElement.tagName !== 'BUTTON') {
        e.preventDefault();
        flip();
      } else if (e.key === 'ArrowRight' && flipped) got();
      else if (e.key === 'ArrowLeft' && flipped) miss();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  });

  if (stage === 'setup') {
    return (
      <ChapterSetup
        selected={selected}
        dir={dir}
        count={count}
        onToggle={(n) => setSelected((s) => ({ ...s, [n]: !s[n] }))}
        onSelectAll={() => setSelected(chapterMap(true))}
        onClear={() => setSelected(chapterMap(false))}
        onDir={setDir}
        onStart={begin}
        onHome={onHome}
      />
    );
  }

  if (stage === 'study') {
    if (!queue[0]) return null;
    return (
      <Study
        word={queue[0]}
        dir={dir}
        flipped={flipped}
        done={done}
        total={total}
        onFlip={flip}
        onGot={got}
        onMiss={miss}
        onBack={() => setStage('setup')}
        onHome={onHome}
      />
    );
  }

  return (
    <Finish
      total={total}
      missedCount={Object.keys(missed).length}
      onAgain={begin}
      onChange={() => setStage('setup')}
      onHome={onHome}
    />
  );
}
