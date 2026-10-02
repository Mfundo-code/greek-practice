import React, { useState } from 'react';
import shuffle from '../utils/shuffle';
import { FORMS, NOUN_FIELDS, VERB_FIELDS, accepted, poolFor } from '../data/parsing';
import ParsingSetup from './parsing/ParsingSetup';
import ParsingQuiz from './parsing/ParsingQuiz';
import ParsingFinish from './parsing/ParsingFinish';

// Parsing practice: holds the state, the screens live in ./parsing
export default function Parsing({ onHome }) {
  const [stage, setStage] = useState('setup'); // setup | quiz | finish
  const [cats, setCats] = useState({}); // nothing marked at the start
  const [qs, setQs] = useState([]);
  const [i, setI] = useState(0);
  const [ans, setAns] = useState({});
  const [checked, setChecked] = useState(false);
  const [result, setResult] = useState(null); // { best, correct }
  const [score, setScore] = useState(0);

  const pool = poolFor(cats);

  const begin = () => {
    setQs(shuffle(pool).slice(0, 10));
    setI(0);
    setScore(0);
    setAns({});
    setChecked(false);
    setResult(null);
    setStage('quiz');
  };

  if (stage === 'setup') {
    return (
      <ParsingSetup
        cats={cats}
        poolCount={pool.length}
        onToggle={(c) => setCats((s) => ({ ...s, [c]: !s[c] }))}
        onStart={begin}
        onHome={onHome}
      />
    );
  }

  if (stage === 'finish') {
    return (
      <ParsingFinish
        score={score}
        total={qs.length}
        onAgain={begin}
        onChange={() => setStage('setup')}
        onHome={onHome}
      />
    );
  }

  const form = qs[i];
  const kind = FORMS[form][0].kind;
  const valid = FORMS[form].filter((r) => r.kind === kind);
  const fields = kind === 'n' ? NOUN_FIELDS : VERB_FIELDS;

  const check = () => {
    let best = valid[0];
    let bestN = -1;
    valid.forEach((r) => {
      const n = fields.filter((f) => accepted(r, f.key).includes(ans[f.key])).length;
      if (n > bestN) {
        bestN = n;
        best = r;
      }
    });
    const correct = bestN === fields.length;
    if (correct) setScore((s) => s + 1);
    setResult({ best, correct });
    setChecked(true);
  };

  const next = () => {
    if (i + 1 >= qs.length) {
      setStage('finish');
      return;
    }
    setI(i + 1);
    setAns({});
    setChecked(false);
    setResult(null);
  };

  return (
    <ParsingQuiz
      form={form}
      valid={valid}
      fields={fields}
      index={i}
      count={qs.length}
      ans={ans}
      checked={checked}
      result={result}
      onPick={(key, value) => setAns((a) => ({ ...a, [key]: value }))}
      onCheck={check}
      onNext={next}
      onBack={() => setStage('setup')}
      onHome={onHome}
    />
  );
}
