import { PD } from './paradigms';

/* ============================================================
   Parsing data.
   Every inflected form in the paradigm tables becomes a parsing
   question; its parse comes from the row / column / table it sits
   in. The examples printed in the notes are added on top (EXAMPLES).
   ============================================================ */

const ARTICLES = new Set(
  ['ὁ', 'ἡ', 'τό', 'τὸ', 'τοῦ', 'τῆς', 'τῷ', 'τῇ', 'τόν', 'τὸν', 'τήν', 'τὴν', 'οἱ', 'αἱ', 'τά', 'τὰ',
    'τῶν', 'τοῖς', 'ταῖς', 'τούς', 'τοὺς', 'τάς', 'τὰς'].map((x) => x.normalize('NFC'))
);
// "ἡ φωνή" -> "φωνή", "ταῖς σαρξί(ν) (-σιν)" -> "σαρξί(ν)"
const cleanForm = (s) => {
  let t = s.normalize('NFC').replace(/\s*\(-[^)]*\)$/, '').trim();
  const w = t.split(' ');
  if (w.length > 1 && ARTICLES.has(w[0])) t = w.slice(1).join(' ');
  return t;
};
const CASE_ABBR = { Nominative: 'Nom', Genitive: 'Gen', Dative: 'Dat', Accusative: 'Acc' };
const byId = (id) => PD.find((p) => p.id === id);

export const RECORDS = [];

/* ---- nouns and personal pronouns: [paradigm id, lexical form, gender, category] */
[
  ['phone', 'φωνή', 'Fem', 'Nouns'],
  ['hemera', 'ἡμέρα', 'Fem', 'Nouns'],
  ['logos', 'λόγος', 'Masc', 'Nouns'],
  ['teknon', 'τέκνον', 'Neut', 'Nouns'],
  ['sarx', 'σάρξ', 'Fem', 'Nouns'],
  ['pneuma', 'πνεῦμα', 'Neut', 'Nouns'],
  ['pron1t', 'ἐγώ', null, 'Pronouns'],
  ['pron2t', 'σύ', null, 'Pronouns'],
  ['pron3m', 'αὐτός', 'Masc', 'Pronouns'],
  ['pron3f', 'αὐτός', 'Fem', 'Pronouns'],
  ['pron3n', 'αὐτός', 'Neut', 'Pronouns'],
].forEach(([id, lex, gen, cat]) => {
  byId(id).groups[0].rows.forEach((r) => {
    RECORDS.push({ kind: 'n', cat, lex, form: cleanForm(r[1]), case: CASE_ABBR[r[0]], num: 'Sg', gen, tr: r[2] });
    RECORDS.push({ kind: 'n', cat, lex, form: cleanForm(r[3]), case: CASE_ABBR[r[0]], num: 'Pl', gen, tr: r[4] });
  });
});

/* ---- the article (master chart: columns F, M, N) */
const ART_TR = { Nom: 'the', Gen: 'of the', Dat: 'to/for the', Acc: 'the' };
byId('articles').groups.forEach((g, gi) =>
  g.rows.forEach((r) =>
    [['Fem', 'ἡ', 1], ['Masc', 'ὁ', 2], ['Neut', 'τό', 3]].forEach(([gen, lex, c]) => {
      const cs = CASE_ABBR[r[0]];
      RECORDS.push({ kind: 'n', cat: 'Articles', lex, form: cleanForm(r[c]), case: cs, num: gi === 0 ? 'Sg' : 'Pl', gen, tr: ART_TR[cs] });
    })
  )
);

/* ---- relative pronoun: columns 1-6 are Sg Masc/Fem/Neut then Pl Masc/Fem/Neut */
byId('relt').groups[0].rows.forEach((r) => {
  [[1, 'Sg', 'Masc'], [2, 'Sg', 'Fem'], [3, 'Sg', 'Neut'], [4, 'Pl', 'Masc'], [5, 'Pl', 'Fem'], [6, 'Pl', 'Neut']].forEach(
    ([c, num, gen]) =>
      RECORDS.push({ kind: 'n', cat: 'Relative pronoun', lex: 'ὅς ἥ ὅ', form: cleanForm(r[c]), case: CASE_ABBR[r[0]], num, gen, tr: r[7] })
  );
});

/* ---- adjectives: group 0 = singular, group 1 = plural; translation is for the masculine only */
[['agathos', 'ἀγαθός'], ['pas', 'πᾶς']].forEach(([id, lex]) => {
  byId(id).groups.forEach((g, gi) =>
    g.rows.forEach((r) =>
      ['Masc', 'Fem', 'Neut'].forEach((gen, k) =>
        RECORDS.push({
          kind: 'n', cat: 'Adjectives', lex, form: cleanForm(r[k + 1]), case: CASE_ABBR[r[0]],
          num: gi === 0 ? 'Sg' : 'Pl', gen, tr: gen === 'Masc' ? r[4] : null,
        })
      )
    )
  );
});

/* ---- verbs: [paradigm id, lexical form, tense(s) accepted, voice, category]
   The notes call the 1st aorist "1Aor", the 2nd aorist "2Aor" and the liquid aorist "Aor". */
[
  ['presAct', 'λύω', 'Pres', 'Act', 'Present'],
  ['presPas', 'λύω', 'Pres', 'Midd/Pass', 'Present'],
  ['impAct', 'λύω', 'Impf', 'Act', 'Imperfect'],
  ['impPas', 'λύω', 'Impf', 'Midd/Pass', 'Imperfect'],
  ['futAct', 'λύω', 'Fut', 'Act', 'Future'],
  ['futMid', 'λύω', 'Fut', 'Midd', 'Future'],
  ['futPas', 'λύω', 'Fut', 'Pass', 'Future'],
  ['liqFut', 'μένω', 'Fut', 'Act', 'Future'],
  ['aorAct', 'λύω', ['1Aor', 'Aor'], 'Act', 'Aorist'],
  ['aorMid', 'λύω', ['1Aor', 'Aor'], 'Midd', 'Aorist'],
  ['aorPas', 'λύω', ['1Aor', 'Aor'], 'Pass', 'Aorist'],
  ['a2Act', 'λαμβάνω', ['2Aor', 'Aor'], 'Act', 'Aorist'],
  ['a2Mid', 'λαμβάνω', ['2Aor', 'Aor'], 'Midd', 'Aorist'],
  ['a2Pas', 'λαμβάνω', ['2Aor', 'Aor'], 'Pass', 'Aorist'],
  ['liqAor', 'μένω', ['Aor', '1Aor'], 'Act', 'Aorist'],
  ['perfAct', 'λύω', 'Perf', 'Act', 'Perfect'],
  ['perfPas', 'λύω', 'Perf', 'Midd/Pass', 'Perfect'],
].forEach(([id, lex, tense, voice, cat]) => {
  byId(id).groups[0].rows.forEach((r) => {
    RECORDS.push({ kind: 'v', cat, lex, form: cleanForm(r[1]), tense, voice, person: r[0], num: 'Sg', tr: r[2] });
    RECORDS.push({ kind: 'v', cat, lex, form: cleanForm(r[3]), tense, voice, person: r[0], num: 'Pl', tr: r[4] });
  });
});

/* ---- contract verbs (present active): person like "1s" / "3p" */
[['agapao', 'ἀγαπάω'], ['poieo', 'ποιέω'], ['plerao', 'πληρόω']].forEach(([id, lex]) => {
  byId(id).groups[0].rows.forEach((r) => {
    RECORDS.push({
      kind: 'v', cat: 'Present', lex, form: cleanForm(r[1]), tense: 'Pres', voice: 'Act',
      person: r[0][0], num: r[0][1] === 's' ? 'Sg' : 'Pl', tr: null,
    });
  });
});

/* ---- forms that appear in the notes' parsing examples but not in a paradigm table */
const EX = 'Notes examples';
RECORDS.push(
  { kind: 'n', cat: EX, lex: 'γραφή', form: 'γραφαί', case: 'Nom', num: 'Pl', gen: 'Fem', tr: 'writings' },
  { kind: 'v', cat: EX, lex: 'πληρόω', form: 'ἐπλήρουν', tense: 'Impf', voice: 'Act', person: '1', num: 'Sg', tr: 'I was filling' },
  { kind: 'v', cat: EX, lex: 'πληρόω', form: 'ἐπλήρουν', tense: 'Impf', voice: 'Act', person: '3', num: 'Pl', tr: 'They were filling' },
  { kind: 'v', cat: EX, lex: 'λαμβάνω', form: 'ἔλαβε', tense: ['2Aor', 'Aor'], voice: 'Act', person: '3', num: 'Sg', tr: 'He/she/it took' },
  { kind: 'v', cat: EX, lex: 'λύω', form: 'ἐλελύκεισαν', tense: 'Plu', voice: 'Act', person: '3', num: 'Pl', tr: 'They had loosed' }
);

/* ============================================================
   Every parsing example printed in the notes (section in brackets).
   `parse` is copied from the notes; `fix` points out a slip in the notes.
   ============================================================ */
export const EXAMPLES = [
  { sec: '2.2', form: 'γραφαί', parse: 'γραφή, Nom, Pl, Fem, writings' },
  { sec: '2.5', form: 'ἡμέρας', parse: 'ἡμέρα, Gen, Sg, Fem, of a day' },
  { sec: '2.5', form: 'τῇ', parse: 'ἡ, Dat, Sg, Fem, to the' },
  { sec: '3.3', form: 'τέκνων', parse: 'τέκνον, Gen, Pl, Neut, of children' },
  { sec: '3.3', form: 'τοῦ', parse: 'ὁ, Gen, Sg, Masc/Neut, of the…' },
  { sec: '3.3', form: 'λόγοις', parse: 'λόγος, Dat, Pl, Masc, for words' },
  { sec: '5.4', form: 'λύεσθε', parse: 'λύω, Pres, Midd/Pass, Ind, 2, Pl, You are being loosed' },
  { sec: '5.4', form: 'λύουσιν', parse: 'λύω, Pres, Act, Ind, 3, Pl, They are loosing' },
  { sec: '6.4', form: 'ἐλυόμην', parse: 'λύω, Impf, Midd/Pass, Ind, 1, Sg, I was loosing (or: I was being loosed)' },
  { sec: '6.4', form: 'ἐλύομεν', parse: 'λύω, Impf, Act, Ind, 1, Pl, We were loosing' },
  { sec: '7.4', form: 'πληροῖ', parse: 'πληρόω, Pres, Act, Ind, 3, Sg, He is filling (πληρό + ει)' },
  { sec: '7.4', form: 'ἐπλήρουν', parse: 'πληρόω, Impf, Act, Ind, 1, s, I was filling — or — 3, p, They were filling (ε + πληρό + ον)' },
  { sec: '9.2', form: 'αὐτά', parse: 'αὐτός, Nom/Acc, Pl, Neut, they / them' },
  { sec: '9.2', form: 'ἡμῖν', parse: 'ἐγώ, Dat, Pl, to us' },
  { sec: '9.3', form: 'ἧς', parse: 'ὅς ἥ ὅ, Gen, Sg, Fem, of whom' },
  { sec: '9.3', form: 'οὕς', parse: 'ὅς ἥ ὅ, Acc, Pl, Masc, whom' },
  { sec: '10.5', form: 'λύσουσι(ν)', parse: 'λύω, Fut, Act, Ind, 3, Pl, They will loose' },
  { sec: '10.5', form: 'λύσῃ', parse: 'λύω, Fut, Midd*, Ind, 2, Sg, You will loose' },
  { sec: '10.5', form: 'λυθήσεσθε', parse: 'λύω, Fut, Pas, Ind, 2, Pl, You will be loosed' },
  { sec: '11.4', form: 'ἐλύθησαν', parse: 'λύω, 1Aor, Pass, Ind, 3, Pl, They were loosed' },
  { sec: '11.4', form: 'ἐλύσατε', parse: 'λύω, 1Aor, Act, Ind, 2, Pl, You loosed' },
  { sec: '11.4', form: 'ἐλύσω', parse: 'λύω, 1Aor, Midd, Ind, 2, Sg, You loosed (for yourself)' },
  { sec: '12.5', form: 'ἐλήφθημεν', parse: 'λαμβάνω, 2Aor, Pass, Ind, 1, Pl, We were taken' },
  { sec: '12.5', form: 'ἔλαβε', parse: 'λαμβάνω, 2Aor, Act, Ind, 3, Sg, He/she/it took (no movable ν)' },
  { sec: '12.5', form: 'ἐλάβου', parse: 'λαμβάνω, 2Aor, Midd, Ind, 2, Sg, You took (for yourself)' },
  { sec: '13.5', form: 'ἐμείνατε', parse: 'μένω, Aor, Act, Ind, 2, Pl, You remained' },
  { sec: '13.5', form: 'μενῶ', parse: 'μένω, Fut, Act, Ind, 1, Sg, I will remain' },
  {
    sec: '14.3', form: 'πνεύματος', parse: 'τὸ πνεῦμα, Gen, Pl, Neut, of the spirit  (from: τοῦ πνεύματος)',
    fix: 'The notes print “Pl”, but τοῦ πνεύματος is genitive singular, so the quiz marks Sg as correct.',
  },
  { sec: '14.3', form: 'σαρκί', parse: 'σάρξ, Dat, Sg, Fem, to [a] flesh' },
  {
    sec: '15.1', form: 'λέλυσαι', parse: 'λύω, Perf, Midd/Pass, Ind, 1, Sg, You have loosed (or: You have been loosed)',
    fix: 'The notes print person “1”, but λέλυσαι is 2nd person singular, so the quiz marks 2 as correct.',
  },
  { sec: '15.1', form: 'λελύκαμεν', parse: 'λύω, Perf, Act, Ind, 1, Pl, We have loosed' },
  { sec: '15.2', form: 'ἐλελύκεισαν', parse: 'λύω, Plu, Act, Ind, 3, Pl, They had loosed' },
];
export const EXAMPLE_FORMS = new Set(EXAMPLES.map((e) => e.form));

/* ---- lookups and quiz helpers */
export const FORMS = {};
RECORDS.forEach((r) => {
  (FORMS[r.form] = FORMS[r.form] || []).push(r);
});

export const PARSE_CATS = [
  'Notes examples', 'Nouns', 'Articles', 'Pronouns', 'Relative pronoun', 'Adjectives',
  'Present', 'Imperfect', 'Future', 'Aorist', 'Perfect',
];

export const NOUN_FIELDS = [
  { key: 'case', label: 'Case', opts: ['Nom', 'Gen', 'Dat', 'Acc'] },
  { key: 'num', label: 'Number', opts: ['Sg', 'Pl'] },
  { key: 'gen', label: 'Gender', opts: ['Masc', 'Fem', 'Neut', 'None'] },
];
export const VERB_FIELDS = [
  { key: 'tense', label: 'Tense', opts: ['Pres', 'Impf', 'Fut', 'Aor', '1Aor', '2Aor', 'Perf', 'Plu'] },
  { key: 'voice', label: 'Voice', opts: ['Act', 'Midd', 'Pass', 'Midd/Pass'] },
  { key: 'person', label: 'Person', opts: ['1', '2', '3'] },
  { key: 'num', label: 'Number', opts: ['Sg', 'Pl'] },
];

// the answer(s) accepted for a field of a record
export const accepted = (r, key) => {
  const v = r[key];
  if (Array.isArray(v)) return v;
  return [v === null || v === undefined ? 'None' : v];
};

// "λύω, Pres, Midd/Pass, Ind, 2, Pl, You (pl) are being loosed" (the order used in the notes)
export const parseText = (r) =>
  (r.kind === 'n'
    ? [r.lex, r.case, r.num, r.gen || '(no gender)']
    : [r.lex, accepted(r, 'tense')[0], r.voice, 'Ind', r.person, r.num]
  ).join(', ') + (r.tr ? ', ' + r.tr : '');

// the forms available for the chosen categories
export const poolFor = (cats) => [
  ...new Set(
    RECORDS.filter((r) => cats[r.cat] || (cats[EX] && EXAMPLE_FORMS.has(r.form))).map((r) => r.form)
  ),
];
