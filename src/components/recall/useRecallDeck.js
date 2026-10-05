import { useState, useEffect } from 'react';
import shuffle from '../../utils/shuffle';

// The flashcard engine shared by Roots and Appendix A: queue, got it / missed it, keyboard.
export default function useRecallDeck() {
  const [stage, setStage] = useState('setup'); // setup | study | finish
  const [queue, setQueue] = useState([]);
  const [total, setTotal] = useState(0);
  const [done, setDone] = useState(0);
  const [missed, setMissed] = useState({});
  const [flipped, setFlipped] = useState(false);

  const begin = (cards) => {
    const q = shuffle(cards);
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

  // a missed card comes back a few cards later
  const miss = () => {
    const c = queue[0];
    const rest = queue.slice(1);
    rest.splice(Math.min(rest.length, 4 + Math.floor(Math.random() * 4)), 0, c);
    setQueue(rest);
    setMissed((m) => ({ ...m, [c.id]: true }));
    setFlipped(false);
  };

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

  return {
    stage, setStage, card: queue[0], total, done, flipped,
    missedCount: Object.keys(missed).length, begin, flip, got, miss,
  };
}
