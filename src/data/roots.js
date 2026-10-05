/* 12.3 Roots vs Stems — the 2nd aorist forms and roots from the notes.
   [present, aorist, root] */
export const ROOTS = [
  ['ἄγω', 'ἤγαγον', 'αγ'],
  ['ἀναβαίνω', 'ἀνέβην', 'ανα + βα'],
  ['ἀποθνῄσκω', 'ἀπέθανον', 'απο + θαν'],
  ['βάλλω', 'ἔβαλον', 'βαλ'],
  ['ὁράω (I see)', 'εἶδον', 'ιδ, οπ'],
  ['γίνομαι', 'ἐγενόμην', 'γεν'],
  ['γινώσκω', 'ἔγνων', 'γνω'],
  ['ἔρχομαι', 'ἦλθον', 'ελθ'],
  ['ἐσθίω', 'ἔφαγον', 'φαγ'],
  ['εὑρίσκω', 'εὗρον', 'εὑρ'],
  ['ἔχω', 'ἔσχον', 'σεχ'],
  ['λαμβάνω', 'ἔλαβον', 'λαβ'],
  ['λέγω', 'εἶπον', 'ιπ, ερ'],
  ['πίνω', 'ἔπιον', 'πι'],
  ['πίπτω', 'ἔπεσον', 'πετ'],
  ['φέρω', 'ἤνεγκα', 'ενεχ, οι'],
  ['συνάγω', 'συνήγαγον', 'συν + αγ'],
];

// The stem is the vocabulary word without its personal ending: λαμβάνω = λαμβάν- + ω.
export const stemOf = (present) => present.replace(/\s*\(.*\)$/, '').replace(/(ομαι|ω)$/, '') + '-';

/* Flashcards for the recall drill.
   dir "ap": you see the aorist form and recall the verb (present form) and its root.
   dir "pa": you see the present form and recall the aorist form and its root. */
export const buildRootCards = (dir) =>
  ROOTS.map(([present, aorist, root]) => {
    const subs = ['stem: ' + stemOf(present), 'root: ' + root];
    return dir === 'ap'
      ? { id: aorist, front: aorist, tag: '§12.3 — which verb is this from?', main: present, subs: [subs[1], subs[0], 'aorist: ' + aorist] }
      : { id: present, front: present, tag: '§12.3 — what is the aorist and the root?', main: aorist, subs: [subs[1], subs[0]] };
  });
