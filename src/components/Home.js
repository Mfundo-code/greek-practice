import React from 'react';
import Btn from './common/Btn';

export default function Home({ onVocab, onParadigms, onParsing, onRoots, onParts }) {
  return (
    <section>
      <h1 style={styles.h1}>Greek trainer</h1>
      <p style={styles.sub}>Vocabulary, paradigms, parsing, roots and principal parts — semester 1</p>
      <Btn onClick={onVocab}>Vocabulary flashcards</Btn>
      <Btn kind="ghost" onClick={onParadigms}>Build a paradigm</Btn>
      <Btn kind="ghost" onClick={onParsing}>Parsing practice</Btn>
      <Btn kind="ghost" onClick={onRoots}>Roots vs stems (12.3)</Btn>
      <Btn kind="ghost" onClick={onParts}>Appendix A — principal parts</Btn>
    </section>
  );
}

const styles = {
  h1: { fontFamily: '"Gentium Plus", serif', fontSize: 26, margin: '6px 0 4px' },
  sub: { color: 'var(--muted)', margin: '0 0 16px' },
};
