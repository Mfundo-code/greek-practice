/* Appendix A — principal parts of irregular verbs (Merkle & Plummer, as printed in the notes).
   "—" means there is no such form. Columns after the chapter:
   present, future, aorist, perfect active, perfect middle/passive, aorist passive */
const TABLE = `
3 ἀκούω ἀκούσω ἤκουσα ἀκήκοα — ἠκούσθην
3 ἀποκρίνομαι — ἀπεκρινάμην — — ἀπεκρίθην
3 γίνομαι γενήσομαι ἐγενόμην γέγονα γεγέννημαι ἐγενήθην
3 γινώσκω γνώσομαι ἔγνων ἔγνωκα ἔγνωσμαι ἐγνώσθην
3 γράφω γράψω ἔγραψα γέγραφα γέγραμμαι ἐγράφη
3 ἔρχομαι ἐλεύσομαι ἦλθον ἐλήλυθα — —
3 ἔχω ἕξω ἔσχον ἔσχηκα — —
3 λαμβάνω λήμψομαι ἔλαβον εἴληφα — —
3 λέγω ἐρῶ εἶπον εἴρηκα εἴρημαι ἐρρέθην
4 ἄγω ἄξω ἤγαγον — — ἤχθην
4 βλέπω βλέψω εἶδον ἑώρακα — ὤφθην
4 ἐγείρω ἐγερῶ ἤγειρα — ἐγήγερμαι ἠγέρθην
4 κρίνω κρινῶ ἔκρινα κέκρικα κέκριμαι ἐκρίθην
5 κράζω κράξω ἔκραξα κέκραγα — —
6 αἰτέω αἰτήσω ᾔτησα ᾔτηκα — —
6 καλέω καλέσω ἐκάλεσα κέκληκα κέκλημαι ἐκλήθην
10 ἀνοίγω ἀνοίξω ἤνοιξα ἀνέῳγα ἀνέῳγμαι ἀνεῴχθην
11 ἀναβαίνω ἀναβήσομαι ἀνέβην ἀναβέβηκα — —
11 ἀποθνῄσκω ἀποθανοῦμαι ἀπέθανον — — —
11 βάλλω βαλῶ ἔβαλον βέβληκα βέβλημαι ἐβλήθην
11 ἐσθίω φάγομαι ἔφαγον — — —
11 εὑρίσκω εὑρήσω εὗρον εὕρηκα — εὑρέθην
11 πίνω πίομαι ἔπιον πέπωκα — —
11 πίπτω πεσοῦμαι ἔπεσον πέπτωκα — —
11 φέρω οἴσω ἤνεγκα — — ἠνέχθην
12 αἴρω ἀρῶ ἦρα ἦρκα ἦρμαι ἤρθην
12 ἀπαγγέλλω ἀπαγγελῶ ἀπήγγειλα — — ἀπηγγέλην
12 ἀποκτείνω ἀποκτενῶ ἀπέκτεινα — — ἀπεκτάνθην
12 ἀποστέλλω ἀποστελῶ ἀπέστειλα ἀπέσταλκα ἀπέσταλμαι ἀπεστάλην
12 σπείρω — ἔσπειρα ἔσπαρκα ἔσπαρμαι ἐσπάρην
14 ἐγγίζω ἐγγιῶ ἤγγισα ἤγγικα — —
14 πείθω πείσω ἔπεισα πέποιθα πέπεισμαι ἐπείσθην
20 ἁμαρτάνω ἁμαρτήσω ἥμαρτον ἡμάρτηκα — —
21 δέχομαι — ἐδεξάμην — δέδεγμαι —
23 ἀφίημι ἀφήσω ἀφῆκα — ἀφέωμαι ἀφέθην
23 δίδωμι δώσω ἔδωκα δέδωκα δέδομαι ἐδόθην
23 ἵστημι στήσω ἔστησα ἕστηκα — ἐστάθην
23 τίθημι θήσω ἔθηκα τέθεικα τέθειμαι ἐτέθην
`;

export const PART_LABELS = [
  'Present active', 'Future active', 'Aorist active', 'Perfect active', 'Perfect mid/pass', 'Aorist pass',
];

export const PARTS = TABLE.trim().split('\n').map((line) => {
  const t = line.trim().split(/\s+/);
  return { ch: parseInt(t[0], 10), forms: t.slice(1) };
});

export const PP_CHAPTERS = [...new Set(PARTS.map((r) => r.ch))];

/* Flashcards: for every irregular form (not the present, not "—") of the chosen chapters,
   you see the form (e.g. εἴληφα) and must recall the verb it comes from (λαμβάνω). */
export const buildPartCards = (selected) => {
  const cards = [];
  PARTS.filter((r) => selected[r.ch]).forEach((r) => {
    r.forms.forEach((form, k) => {
      if (k === 0 || form === '—') return;
      cards.push({
        id: r.forms[0] + '-' + k,
        front: form,
        tag: 'Chapter ' + r.ch + ' — which verb is this from?',
        main: r.forms[0],
        subs: [PART_LABELS[k] + ' of ' + r.forms[0], r.forms.join('  ·  ')],
      });
    });
  });
  return cards;
};
