import React from 'react';
import Btn from './common/Btn';

export default function Home({ onVocab, onParadigms, onParsing }) {
  return (
    <section>
      <h1 style={styles.h1}>Greek trainer</h1>
      <p style={styles.sub}>Vocabulary, paradigms and parsing, semester 1</p>
      <Btn onClick={onVocab}>Vocabulary flashcards</Btn>
      <Btn kind="ghost" onClick={onParadigms}>Build a paradigm</Btn>
      <Btn kind="ghost" onClick={onParsing}>Parsing practice</Btn>
    </section>
  );
}

const styles = {
  h1: { fontFamily: '"Gentium Plus", serif', fontSize: 26, margin: '6px 0 4px' },
  sub: { color: 'var(--muted)', margin: '0 0 16px' },
};
