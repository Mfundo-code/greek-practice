/* Paradigm tables, in the order of the Concise Greek Grammar Notes.
   cols = column headings. rows = [row label, answer, answer, ...]. */
export const PD = [
  {
    id: "phone",
    name: "η-pattern noun — φωνή",
    sec: "2. First declension nouns",
    cols: ["Case", "Singular", "Translation", "Plural", "Translation"],
    groups: [
      {
        head: "",
        rows: [
          ["Nominative", "ἡ φωνή", "the voice", "αἱ φωναί", "the voices"],
          ["Genitive", "τῆς φωνῆς", "of the voice", "τῶν φωνῶν", "of the voices"],
          ["Dative", "τῇ φωνῇ", "to the voice", "ταῖς φωναῖς", "to the voices"],
          ["Accusative", "τὴν φωνήν", "the voice", "τὰς φωνάς", "the voices"],
        ],
      },
    ],
  },
  {
    id: "hemera",
    name: "α-pattern noun — ἡμέρα",
    sec: "2. First declension nouns",
    cols: ["Case", "Singular", "Translation", "Plural", "Translation"],
    groups: [
      {
        head: "",
        rows: [
          ["Nominative", "ἡ ἡμέρα", "the day", "αἱ ἡμέραι", "the days"],
          ["Genitive", "τῆς ἡμέρας", "of the day", "τῶν ἡμερῶν", "of the days"],
          ["Dative", "τῇ ἡμέρᾳ", "to the day", "ταῖς ἡμέραις", "to the days"],
          ["Accusative", "τὴν ἡμέραν", "the day", "τὰς ἡμέρας", "the days"],
        ],
      },
    ],
  },
  {
    id: "logos",
    name: "Masculine 2nd declension — λόγος",
    sec: "3. Second declension nouns",
    cols: ["Case", "Singular", "Translation", "Plural", "Translation"],
    groups: [
      {
        head: "",
        rows: [
          ["Nominative", "ὁ λόγος", "the word", "οἱ λόγοι", "the words"],
          ["Genitive", "τοῦ λόγου", "of the word", "τῶν λόγων", "of the words"],
          ["Dative", "τῷ λόγῳ", "to/for the word", "τοῖς λόγοις", "to/for the words"],
          ["Accusative", "τὸν λόγον", "the word", "τοὺς λόγους", "the words"],
        ],
      },
    ],
  },
  {
    id: "teknon",
    name: "Neuter 2nd declension — τέκνον",
    sec: "3. Second declension nouns",
    cols: ["Case", "Singular", "Translation", "Plural", "Translation"],
    groups: [
      {
        head: "",
        rows: [
          ["Nominative", "τὸ τέκνον", "the child", "τὰ τέκνα", "the children"],
          ["Genitive", "τοῦ τέκνου", "of the child", "τῶν τέκνων", "of the children"],
          ["Dative", "τῷ τέκνῳ", "to/for the child", "τοῖς τέκνοις", "to/for the children"],
          ["Accusative", "τὸ τέκνον", "the child", "τὰ τέκνα", "the children"],
        ],
      },
    ],
  },
  {
    id: "nouns12",
    name: "Master chart — 1st & 2nd declension endings",
    sec: "3. Second declension nouns",
    cols: ["Case", "Fem (1st)", "Masc (2nd)", "Neut (2nd)"],
    groups: [
      {
        head: "Singular",
        rows: [
          ["Nominative", "-η / -α", "-ος", "-ον"],
          ["Genitive", "-ης / -ας", "-ου", "-ου"],
          ["Dative", "-ῃ / -ᾳ", "-ῳ", "-ῳ"],
          ["Accusative", "-ην / -αν", "-ον", "-ον"],
        ],
      },
      {
        head: "Plural",
        rows: [
          ["Nominative", "-αι", "-οι", "-α"],
          ["Genitive", "-ων", "-ων", "-ων"],
          ["Dative", "-αις", "-οις", "-οις"],
          ["Accusative", "-ας", "-ους", "-α"],
        ],
      },
    ],
  },
  {
    id: "articles",
    name: "Master chart — the article",
    sec: "3. Second declension nouns",
    cols: ["Case", "F (1st)", "M (2nd)", "N (2nd)"],
    groups: [
      {
        head: "Singular",
        rows: [
          ["Nominative", "ἡ", "ὁ", "τό"],
          ["Genitive", "τῆς", "τοῦ", "τοῦ"],
          ["Dative", "τῇ", "τῷ", "τῷ"],
          ["Accusative", "τήν", "τόν", "τό"],
        ],
      },
      {
        head: "Plural",
        rows: [
          ["Nominative", "αἱ", "οἱ", "τά"],
          ["Genitive", "τῶν", "τῶν", "τῶν"],
          ["Dative", "ταῖς", "τοῖς", "τοῖς"],
          ["Accusative", "τάς", "τούς", "τά"],
        ],
      },
    ],
  },
  {
    id: "eimiPres",
    name: "εἰμί — present (I am)",
    sec: "4. Introduction to verbs — εἰμί",
    cols: ["Pers", "Singular", "Translation", "Plural", "Translation"],
    groups: [
      {
        head: "",
        rows: [
          ["1", "εἰμί", "I am", "ἐσμέν", "We are"],
          ["2", "εἶ", "You are", "ἐστέ", "You are"],
          ["3", "ἐστίν", "He/She/It is", "εἰσίν", "They are"],
        ],
      },
    ],
  },
  {
    id: "primAct",
    name: "Primary active endings",
    sec: "5. Present indicative",
    cols: ["Pers", "Singular", "Translation", "Plural", "Translation"],
    groups: [
      {
        head: "",
        rows: [
          ["1", "-ω", "I...", "-ομεν", "We..."],
          ["2", "-εις", "You...", "-ετε", "You (pl)..."],
          ["3", "-ει", "He/She/It...", "-ουσιν", "They..."],
        ],
      },
    ],
  },
  {
    id: "primMP",
    name: "Primary middle/passive endings",
    sec: "5. Present indicative",
    cols: ["Pers", "Singular", "Translation", "Plural", "Translation"],
    groups: [
      {
        head: "",
        rows: [
          ["1", "-ομαι", "I...", "-ομεθα", "We..."],
          ["2", "-ῃ", "You...", "-εσθε", "You (pl)..."],
          ["3", "-εται", "He/She/It...", "-ονται", "They..."],
        ],
      },
    ],
  },
  {
    id: "presAct",
    name: "λύω — present active",
    sec: "5. Present indicative",
    cols: ["Pers", "Singular", "Translation", "Plural", "Translation"],
    groups: [
      {
        head: "",
        rows: [
          ["1", "λύω", "I loose/ am loosing", "λύομεν", "We loose/are loosing"],
          ["2", "λύεις", "You loose/are loosing", "λύετε", "You (pl) loose/are loosing"],
          ["3", "λύει", "He/She/It looses/is loosing", "λύουσιν", "They loose/are loosing"],
        ],
      },
    ],
  },
  {
    id: "presMid",
    name: "λύομαι — present middle",
    sec: "5. Present indicative",
    cols: ["Pers", "Singular", "Translation", "Plural", "Translation"],
    groups: [
      {
        head: "",
        rows: [
          ["1", "λύομαι", "I am loosing for myself", "λυόμεθα", "We are loosing for ourselves"],
          ["2", "λύῃ", "You are loosing for yourself", "λύεσθε", "You (pl) are loosing for yourselves"],
          ["3", "λύεται", "He/She/It is loosing for himself/herself/itself...", "λύονται", "They are loosing for themselves"],
        ],
      },
    ],
  },
  {
    id: "presPas",
    name: "λύομαι — present passive",
    sec: "5. Present indicative",
    cols: ["Pers", "Singular", "Translation", "Plural", "Translation"],
    groups: [
      {
        head: "",
        rows: [
          ["1", "λύομαι", "I am being loosed", "λυόμεθα", "We are being loosed"],
          ["2", "λύῃ", "You are being loosed", "λύεσθε", "You (pl) are being loosed"],
          ["3", "λύεται", "He/She/It is being loosed", "λύονται", "They are being loosed"],
        ],
      },
    ],
  },
  {
    id: "secAct",
    name: "Secondary active endings",
    sec: "6. Imperfect indicative",
    cols: ["Pers", "Singular", "Translation", "Plural", "Translation"],
    groups: [
      {
        head: "",
        rows: [
          ["1", "-ον", "I...", "-ομεν", "We..."],
          ["2", "-ες", "You...", "-ετε", "You (pl)..."],
          ["3", "-ε(ν)", "He/She/It...", "-ον", "They..."],
        ],
      },
    ],
  },
  {
    id: "secMP",
    name: "Secondary middle/passive endings",
    sec: "6. Imperfect indicative",
    cols: ["Pers", "Singular", "Translation", "Plural", "Translation"],
    groups: [
      {
        head: "",
        rows: [
          ["1", "-ομην", "I...", "-ομεθα", "We..."],
          ["2", "-ου (σο)", "You...", "-εσθε", "You (pl)..."],
          ["3", "-ετο", "He/She/It...", "-οντο", "They..."],
        ],
      },
    ],
  },
  {
    id: "impAct",
    name: "λύω — imperfect active",
    sec: "6. Imperfect indicative",
    cols: ["Pers", "Singular", "Translation", "Plural", "Translation"],
    groups: [
      {
        head: "",
        rows: [
          ["1", "ἔλυον", "I was loosing", "ἐλύομεν", "We were loosing"],
          ["2", "ἔλυες", "You were loosing", "ἐλύετε", "You (pl) were loosing"],
          ["3", "ἔλυε(ν)", "He/She/It was loosing", "ἔλυον", "They were loosing"],
        ],
      },
    ],
  },
  {
    id: "impMid",
    name: "λύομαι — imperfect middle",
    sec: "6. Imperfect indicative",
    cols: ["Pers", "Singular", "Translation", "Plural", "Translation"],
    groups: [
      {
        head: "",
        rows: [
          ["1", "ἐλυόμην", "I was loosing for myself", "ἐλυόμεθα", "We were loosing for ourselves"],
          ["2", "ἐλύου", "You were loosing for yourself", "ἐλύεσθε", "You (pl) were loosing for yourselves"],
          ["3", "ἐλύετο", "He/She/It was loosing for himself/herself/itself...", "ἐλύοντο", "They were loosing for themselves"],
        ],
      },
    ],
  },
  {
    id: "impPas",
    name: "λύομαι — imperfect passive",
    sec: "6. Imperfect indicative",
    cols: ["Pers", "Singular", "Translation", "Plural", "Translation"],
    groups: [
      {
        head: "",
        rows: [
          ["1", "ἐλυόμην", "I was being loosed", "ἐλυόμεθα", "We were being loosed"],
          ["2", "ἐλύου", "You were being loosed", "ἐλύεσθε", "You (pl) were being loosed"],
          ["3", "ἐλύετο", "He/She/It was being loosed", "ἐλύοντο", "They were being loosed"],
        ],
      },
    ],
  },
  {
    id: "contract",
    name: "Contraction chart (stem vowel + ending vowel)",
    sec: "7. Contract verbs",
    cols: ["Stem", "ε", "ει", "η", "ῃ", "ο", "ου", "ω"],
    groups: [
      {
        head: "",
        rows: [
          ["–α", "α", "ᾳ", "α", "ᾳ", "ω", "ω", "ω"],
          ["–ε", "ει", "ει", "η", "ῃ", "ου", "ου", "ω"],
          ["–ο", "ου", "οι", "ω", "οι", "ου", "ου", "ω"],
        ],
      },
    ],
  },
  {
    id: "agapao",
    name: "ἀγαπάω (-α) — love",
    sec: "7. Contract verbs",
    cols: ["Pers", "Contracted form", "Contraction"],
    groups: [
      {
        head: "",
        rows: [
          ["1s", "ἀγαπῶ", "-ά + ω"],
          ["2s", "ἀγαπᾷς", "-ά + εις"],
          ["3s", "ἀγαπᾷ", "-ά + ει"],
          ["1p", "ἀγαπῶμεν", "-ά + ομεν"],
          ["2p", "ἀγαπᾶτε", "-ά + ετε"],
          ["3p", "ἀγαπῶσι(ν)", "-ά + ουσι"],
        ],
      },
    ],
  },
  {
    id: "poieo",
    name: "ποιέω (-ε) — do / make",
    sec: "7. Contract verbs",
    cols: ["Pers", "Contracted form", "Contraction"],
    groups: [
      {
        head: "",
        rows: [
          ["1s", "ποιῶ", "-έ + ω"],
          ["2s", "ποιεῖς", "-έ + εις"],
          ["3s", "ποιεῖ", "-έ + ει"],
          ["1p", "ποιοῦμεν", "-έ + ομεν"],
          ["2p", "ποιεῖτε", "-έ + ετε"],
          ["3p", "ποιοῦσι(ν)", "-έ + ουσι"],
        ],
      },
    ],
  },
  {
    id: "plerao",
    name: "πληρόω (-ο) — fill / fulfill",
    sec: "7. Contract verbs",
    cols: ["Pers", "Contracted form", "Contraction"],
    groups: [
      {
        head: "",
        rows: [
          ["1s", "πληρῶ", "-ό + ω"],
          ["2s", "πληροῖς", "-ό + εις"],
          ["3s", "πληροῖ", "-ό + ει"],
          ["1p", "πληροῦμεν", "-ό + ομεν"],
          ["2p", "πληροῦτε", "-ό + ετε"],
          ["3p", "πληροῦσι(ν)", "-ό + ουσι"],
        ],
      },
    ],
  },
  {
    id: "eimiImp",
    name: "εἰμί — imperfect (I was)",
    sec: "7. Contract verbs",
    cols: ["Pers", "Singular", "Translation", "Plural", "Translation"],
    groups: [
      {
        head: "",
        rows: [
          ["1", "ἤμην", "I was", "ἦμεν", "We were"],
          ["2", "ἦς", "You were", "ἦτε", "You (pl) were"],
          ["3", "ἦν", "He/She/It was", "ἦσαν", "They were"],
        ],
      },
    ],
  },
  {
    id: "prepall",
    name: "All prepositions at a glance (case → meaning)",
    sec: "8. Prepositions",
    cols: ["Preposition", "Genitive", "Dative", "Accusative"],
    groups: [
      {
        head: "",
        rows: [
          ["ἀπό", "from, away from", "—", "—"],
          ["διά", "through", "—", "because of"],
          ["εἰς", "—", "—", "into, among, for"],
          ["ἐκ", "from, out of", "—", "—"],
          ["ἐν", "—", "in, on, at, by, with", "—"],
          ["ἐπί", "on, over", "on, at, in", "on, to, for"],
          ["κατά", "down, against", "—", "according to"],
          ["μετά", "with, among", "—", "after"],
          ["παρά", "from", "beside", "on, at"],
          ["περί", "about, concerning", "—", "around"],
          ["πρός", "—", "—", "to, toward"],
          ["σύν", "—", "with", "—"],
          ["ὑπέρ", "for", "—", "above, beyond"],
          ["ὑπό", "by", "—", "under, below"],
        ],
      },
    ],
  },
  {
    id: "prepgen",
    name: "Prepositions + genitive",
    sec: "8. Prepositions",
    cols: ["Preposition", "Meaning"],
    groups: [
      {
        head: "",
        rows: [
          ["ἀπό", "from, away from"],
          ["διά", "through"],
          ["ἐκ", "from, out of"],
          ["ἐπί", "on, over"],
          ["κατά", "down, against"],
          ["μετά", "with, among"],
          ["παρά", "from"],
          ["περί", "about, concerning"],
          ["ὑπέρ", "for"],
          ["ὑπό", "by"],
        ],
      },
    ],
  },
  {
    id: "prepdat",
    name: "Prepositions + dative",
    sec: "8. Prepositions",
    cols: ["Preposition", "Meaning"],
    groups: [
      {
        head: "",
        rows: [
          ["ἐν", "in, on, at, by, with"],
          ["ἐπί", "on, at, in"],
          ["παρά", "beside"],
          ["σύν", "with"],
        ],
      },
    ],
  },
  {
    id: "prepacc",
    name: "Prepositions + accusative",
    sec: "8. Prepositions",
    cols: ["Preposition", "Meaning"],
    groups: [
      {
        head: "",
        rows: [
          ["διά", "because of"],
          ["εἰς", "into, among, for"],
          ["ἐπί", "on, to, for"],
          ["κατά", "according to"],
          ["μετά", "after"],
          ["παρά", "on, at"],
          ["περί", "around"],
          ["πρός", "to, toward"],
          ["ὑπέρ", "above, beyond"],
          ["ὑπό", "under, below"],
        ],
      },
    ],
  },
  {
    id: "prepspell",
    name: "μετά — spelling changes",
    sec: "8. Prepositions",
    cols: ["Before…", "Form", "Example"],
    groups: [
      {
        head: "",
        rows: [
          ["a consonant", "μετά", "μετὰ τοῦ Ἰησοῦ (with Jesus)"],
          ["a rough breathing", "μεθ’", "μεθ’ ἡμῶν (with us)"],
          ["a smooth breathing", "μετ’", "μετ’ ἐμοῦ (with me)"],
        ],
      },
    ],
  },
  {
    id: "prepex",
    name: "Prepositional phrases from the notes",
    sec: "8. Prepositions",
    cols: ["Phrase", "Meaning"],
    groups: [
      {
        head: "",
        rows: [
          ["διὰ τὸν λόγον", "on account of the word"],
          ["διὰ τοῦ λόγου", "through the word"],
          ["μετὰ τοῦ Ἰησοῦ", "with Jesus"],
          ["μεθ’ ἡμῶν", "with us"],
          ["μετ’ ἐμοῦ", "with me"],
          ["ἐν τῷ ὀφθαλμῷ", "in the eye"],
          ["ὑπὸ θεοῦ", "by God"],
        ],
      },
    ],
  },
  {
    id: "prepverb",
    name: "Prepositions inside verbs",
    sec: "8. Prepositions",
    cols: ["Verb", "Parts / meaning"],
    groups: [
      {
        head: "",
        rows: [
          ["ἐκβάλλω", "cast out"],
          ["ἐκ", "from"],
          ["βάλλω", "throw"],
          ["ἐξ – ε – βαλλον", "ἐξέβαλλον"],
        ],
      },
    ],
  },
  {
    id: "pron1t",
    name: "Personal pronoun — 1st person (I, we)",
    sec: "9. Personal and relative pronouns",
    cols: ["Case", "Singular", "Translation", "Plural", "Translation"],
    groups: [
      {
        head: "",
        rows: [
          ["Nominative", "ἐγώ", "I", "ἡμεῖς", "we"],
          ["Genitive", "μου", "of me / my", "ἡμῶν", "of us / our"],
          ["Dative", "μοι", "to/for me", "ἡμῖν", "to/for us"],
          ["Accusative", "με", "me", "ἡμᾶς", "us"],
        ],
      },
    ],
  },
  {
    id: "pron2t",
    name: "Personal pronoun — 2nd person (you)",
    sec: "9. Personal and relative pronouns",
    cols: ["Case", "Singular", "Translation", "Plural", "Translation"],
    groups: [
      {
        head: "",
        rows: [
          ["Nominative", "σύ", "you", "ὑμεῖς", "you (all)"],
          ["Genitive", "σου", "of you / your", "ὑμῶν", "of you / your"],
          ["Dative", "σοι", "to/for you", "ὑμῖν", "to/for you"],
          ["Accusative", "σε", "you", "ὑμᾶς", "you"],
        ],
      },
    ],
  },
  {
    id: "pron3m",
    name: "αὐτός — 3rd person masculine",
    sec: "9. Personal and relative pronouns",
    cols: ["Case", "Singular", "Translation", "Plural", "Translation"],
    groups: [
      {
        head: "",
        rows: [
          ["Nominative", "αὐτός", "he", "αὐτοί", "they"],
          ["Genitive", "αὐτοῦ", "of him / his", "αὐτῶν", "of them"],
          ["Dative", "αὐτῷ", "to/for him", "αὐτοῖς", "to/for them"],
          ["Accusative", "αὐτόν", "him", "αὐτούς", "them"],
        ],
      },
    ],
  },
  {
    id: "pron3f",
    name: "αὐτή — 3rd person feminine",
    sec: "9. Personal and relative pronouns",
    cols: ["Case", "Singular", "Translation", "Plural", "Translation"],
    groups: [
      {
        head: "",
        rows: [
          ["Nominative", "αὐτή", "she", "αὐταί", "they"],
          ["Genitive", "αὐτῆς", "of her / her", "αὐτῶν", "of them"],
          ["Dative", "αὐτῇ", "to/for her", "αὐταῖς", "to/for them"],
          ["Accusative", "αὐτήν", "her", "αὐτάς", "them"],
        ],
      },
    ],
  },
  {
    id: "pron3n",
    name: "αὐτό — 3rd person neuter",
    sec: "9. Personal and relative pronouns",
    cols: ["Case", "Singular", "Translation", "Plural", "Translation"],
    groups: [
      {
        head: "",
        rows: [
          ["Nominative", "αὐτό", "it", "αὐτά", "they"],
          ["Genitive", "αὐτοῦ", "of it / its", "αὐτῶν", "of them"],
          ["Dative", "αὐτῷ", "to/for it", "αὐτοῖς", "to/for them"],
          ["Accusative", "αὐτό", "it", "αὐτά", "them"],
        ],
      },
    ],
  },
  {
    id: "pron3",
    name: "αὐτός — all genders together (extra practice, no meanings)",
    sec: "9. Personal and relative pronouns",
    cols: ["Case", "Masc sg", "Fem sg", "Neut sg", "Masc pl", "Fem pl", "Neut pl"],
    groups: [
      {
        head: "",
        rows: [
          ["Nominative", "αὐτός", "αὐτή", "αὐτό", "αὐτοί", "αὐταί", "αὐτά"],
          ["Genitive", "αὐτοῦ", "αὐτῆς", "αὐτοῦ", "αὐτῶν", "αὐτῶν", "αὐτῶν"],
          ["Dative", "αὐτῷ", "αὐτῇ", "αὐτῷ", "αὐτοῖς", "αὐταῖς", "αὐτοῖς"],
          ["Accusative", "αὐτόν", "αὐτήν", "αὐτό", "αὐτούς", "αὐτάς", "αὐτά"],
        ],
      },
    ],
  },
  {
    id: "relt",
    name: "Relative pronoun ὅς, ἥ, ὅ",
    sec: "9. Personal and relative pronouns",
    cols: ["Case", "Masc sg", "Fem sg", "Neut sg", "Masc pl", "Fem pl", "Neut pl", "Translation"],
    groups: [
      {
        head: "",
        rows: [
          ["Nominative", "ὅς", "ἥ", "ὅ", "οἵ", "αἵ", "ἅ", "who / which / that"],
          ["Genitive", "οὗ", "ἧς", "οὗ", "ὧν", "ὧν", "ὧν", "of whom / whose"],
          ["Dative", "ᾧ", "ᾗ", "ᾧ", "οἷς", "αἷς", "οἷς", "to/for whom / which"],
          ["Accusative", "ὅν", "ἥν", "ὅ", "οὕς", "ἅς", "ἅ", "whom / which / that"],
        ],
      },
    ],
  },
  {
    id: "stops",
    name: "Square of stops (σ + consonant)",
    sec: "10. Future indicative",
    cols: ["Kind of consonant", "Consonants", "Result", "Example"],
    groups: [
      {
        head: "",
        rows: [
          ["Velars = throat", "κ γ χ", "ξ", "ἄγω > ἄγ + σ + ω = ἄξω"],
          ["Labials = lips", "π β φ", "ψ", "βλέπω > βλέπ + σ + ω = βλέψω"],
          ["Dentals = teeth", "τ δ θ", "ς", "πείθω > πείθ + σ + ω = πείσω"],
        ],
      },
    ],
  },
  {
    id: "futAct",
    name: "λύσω — future active",
    sec: "10. Future indicative",
    cols: ["Pers", "Singular", "Translation", "Plural", "Translation"],
    groups: [
      {
        head: "",
        rows: [
          ["1", "λύσω", "I will loose", "λύσομεν", "We will loose"],
          ["2", "λύσεις", "You will loose", "λύσετε", "You (pl) will loose"],
          ["3", "λύσει", "He/She/It will loose", "λύσουσι(ν)", "They will loose"],
        ],
      },
    ],
  },
  {
    id: "futMid",
    name: "λύσομαι — future middle",
    sec: "10. Future indicative",
    cols: ["Pers", "Singular", "Translation", "Plural", "Translation"],
    groups: [
      {
        head: "",
        rows: [
          ["1", "λύσομαι", "I will loose for myself", "λυσόμεθα", "We will loose for ourselves"],
          ["2", "λύσῃ", "You will loose for yourself", "λύσεσθε", "You (pl) will loose for yourselves"],
          ["3", "λύσεται", "He/She/It will loose for himself/herself/itself...", "λύσονται", "They will loose for themselves"],
        ],
      },
    ],
  },
  {
    id: "futPas",
    name: "λυθήσομαι — future passive",
    sec: "10. Future indicative",
    cols: ["Pers", "Singular", "Translation", "Plural", "Translation"],
    groups: [
      {
        head: "",
        rows: [
          ["1", "λυθήσομαι", "I will be loosed", "λυθησόμεθα", "We will be loosed"],
          ["2", "λυθήσῃ", "You will be loosed", "λυθήσεσθε", "You (pl) will be loosed"],
          ["3", "λυθήσεται", "He/She/It will be loosed", "λυθήσονται", "They will be loosed"],
        ],
      },
    ],
  },
  {
    id: "eimiFut",
    name: "εἰμί — future (I will be)",
    sec: "10. Future indicative",
    cols: ["Pers", "Singular", "Translation", "Plural", "Translation"],
    groups: [
      {
        head: "",
        rows: [
          ["1", "ἔσομαι", "I will be", "ἐσόμεθα", "We will be"],
          ["2", "ἔσῃ", "You will be", "ἔσεσθε", "You (pl) will be"],
          ["3", "ἔσται", "He/She/It will be", "ἔσονται", "They will be"],
        ],
      },
    ],
  },
  {
    id: "aorActE",
    name: "Aorist active endings",
    sec: "11. 1st aorist indicative",
    cols: ["Pers", "Singular", "Translation", "Plural", "Translation"],
    groups: [
      {
        head: "",
        rows: [
          ["1", "-σα", "I...", "-σαμεν", "We..."],
          ["2", "-σας", "You...", "-σατε", "You (pl)..."],
          ["3", "-σε(ν)", "He/She/It...", "-σαν", "They..."],
        ],
      },
    ],
  },
  {
    id: "aorMPE",
    name: "Aorist middle/passive endings",
    sec: "11. 1st aorist indicative",
    cols: ["Pers", "Singular", "Translation", "Plural", "Translation"],
    groups: [
      {
        head: "",
        rows: [
          ["1", "-σαμην", "I...", "-σαμεθα", "We..."],
          ["2", "-σω (σο)", "You...", "-σασθε", "You (pl)..."],
          ["3", "-σατο", "He/She/It...", "-σαντο", "They..."],
        ],
      },
    ],
  },
  {
    id: "aorAct",
    name: "ἔλυσα — aorist active",
    sec: "11. 1st aorist indicative",
    cols: ["Pers", "Singular", "Translation", "Plural", "Translation"],
    groups: [
      {
        head: "",
        rows: [
          ["1", "ἔλυσα", "I loosed", "ἐλύσαμεν", "We loosed"],
          ["2", "ἔλυσας", "You loosed", "ἐλύσατε", "You (pl) loosed"],
          ["3", "ἔλυσε(ν)", "He/She/It loosed", "ἔλυσαν", "They loosed"],
        ],
      },
    ],
  },
  {
    id: "aorMid",
    name: "ἐλυσάμην — aorist middle",
    sec: "11. 1st aorist indicative",
    cols: ["Pers", "Singular", "Translation", "Plural", "Translation"],
    groups: [
      {
        head: "",
        rows: [
          ["1", "ἐλυσάμην", "I loosed for myself", "ἐλυσάμεθα", "We loosed for ourselves"],
          ["2", "ἐλύσω", "You loosed for yourself", "ἐλύσασθε", "You (pl) loosed for yourselves"],
          ["3", "ἐλύσατο", "He/She/It loosed for himself/herself/itself...", "ἐλύσαντο", "They loosed for themselves"],
        ],
      },
    ],
  },
  {
    id: "aorPas",
    name: "ἐλύθην — aorist passive",
    sec: "11. 1st aorist indicative",
    cols: ["Pers", "Singular", "Translation", "Plural", "Translation"],
    groups: [
      {
        head: "",
        rows: [
          ["1", "ἐλύθην", "I was loosed", "ἐλύθημεν", "We were loosed"],
          ["2", "ἐλύθης", "You were loosed", "ἐλύθητε", "You (pl) were loosed"],
          ["3", "ἐλύθη", "He/She/It was loosed", "ἐλύθησαν", "They were loosed"],
        ],
      },
    ],
  },
  {
    id: "a2Act",
    name: "ἔλαβον — 2nd aorist active",
    sec: "12. 2nd aorist indicative",
    cols: ["Pers", "Singular", "Translation", "Plural", "Translation"],
    groups: [
      {
        head: "",
        rows: [
          ["1", "ἔλαβον", "I took", "ἐλάβομεν", "We took"],
          ["2", "ἔλαβες", "You took", "ἐλάβετε", "You (pl) took"],
          ["3", "ἔλαβε(ν)", "He/She/It took", "ἔλαβον", "They took"],
        ],
      },
    ],
  },
  {
    id: "a2Mid",
    name: "ἐλαβόμην — 2nd aorist middle",
    sec: "12. 2nd aorist indicative",
    cols: ["Pers", "Singular", "Translation", "Plural", "Translation"],
    groups: [
      {
        head: "",
        rows: [
          ["1", "ἐλαβόμην", "I took for myself", "ἐλαβόμεθα", "We took for ourselves"],
          ["2", "ἐλάβου", "You took for yourself", "ἐλάβεσθε", "You (pl) took for yourselves"],
          ["3", "ἐλάβετο", "He/She/It took for himself/herself/itself...", "ἐλάβοντο", "They took for themselves"],
        ],
      },
    ],
  },
  {
    id: "a2Pas",
    name: "ἐλήφθην — aorist passive of λαμβάνω",
    sec: "12. 2nd aorist indicative",
    cols: ["Pers", "Singular", "Translation", "Plural", "Translation"],
    groups: [
      {
        head: "",
        rows: [
          ["1", "ἐλήφθην", "I was taken", "ἐλήφθημεν", "We were taken"],
          ["2", "ἐλήφθης", "You were taken", "ἐλήφθητε", "You (pl) were taken"],
          ["3", "ἐλήφθη", "He/She/It was taken", "ἐλήφθησαν", "They were taken"],
        ],
      },
    ],
  },
  {
    id: "roots",
    name: "2nd aorist forms and roots",
    sec: "12. 2nd aorist indicative",
    cols: ["Present", "Aorist", "Root"],
    groups: [
      {
        head: "",
        rows: [
          ["ἄγω", "ἤγαγον", "αγ"],
          ["ἀναβαίνω", "ἀνέβην", "ανα + βα"],
          ["ἀποθνῄσκω", "ἀπέθανον", "απο + θαν"],
          ["βάλλω", "ἔβαλον", "βαλ"],
          ["ὁράω (I see)", "εἶδον", "ιδ, οπ"],
          ["γίνομαι", "ἐγενόμην", "γεν"],
          ["γινώσκω", "ἔγνων", "γνω"],
          ["ἔρχομαι", "ἦλθον", "ελθ"],
          ["ἐσθίω", "ἔφαγον", "φαγ"],
          ["εὑρίσκω", "εὗρον", "εὑρ"],
          ["ἔχω", "ἔσχον", "σεχ"],
          ["λαμβάνω", "ἔλαβον", "λαβ"],
          ["λέγω", "εἶπον", "ιπ, ερ"],
          ["πίνω", "ἔπιον", "πι"],
          ["πίπτω", "ἔπεσον", "πετ"],
          ["φέρω", "ἤνεγκα", "ενεχ, οι"],
          ["συνάγω", "συνήγαγον", "συν + αγ"],
        ],
      },
    ],
  },
  {
    id: "liqFut",
    name: "μενῶ — liquid future active",
    sec: "13. Liquid verbs",
    cols: ["Pers", "Singular", "Translation", "Plural", "Translation"],
    groups: [
      {
        head: "",
        rows: [
          ["1", "μενῶ", "I will remain", "μενοῦμεν", "We will remain"],
          ["2", "μενεῖς", "You will remain", "μενεῖτε", "You (pl) will remain"],
          ["3", "μενεῖ", "He/She/It will remain", "μενοῦσιν", "They will remain"],
        ],
      },
    ],
  },
  {
    id: "liqAor",
    name: "ἔμεινα — liquid aorist active",
    sec: "13. Liquid verbs",
    cols: ["Pers", "Singular", "Translation", "Plural", "Translation"],
    groups: [
      {
        head: "",
        rows: [
          ["1", "ἔμεινα", "I remained", "ἐμείναμεν", "We remained"],
          ["2", "ἔμεινας", "You remained", "ἐμείνατε", "You (pl) remained"],
          ["3", "ἔμεινεν", "He/She/It remained", "ἔμειναν", "They remained"],
        ],
      },
    ],
  },
  {
    id: "sarx",
    name: "Feminine 3rd declension — σάρξ",
    sec: "14. Third declension nouns",
    cols: ["Case", "Singular", "Translation", "Plural", "Translation"],
    groups: [
      {
        head: "",
        rows: [
          ["Nominative", "ἡ σάρξ (-σ)", "the flesh", "αἱ σάρκες", "the fleshes"],
          ["Genitive", "τῆς σαρκός", "of the flesh", "τῶν σαρκῶν", "of the fleshes"],
          ["Dative", "τῇ σαρκί", "to/for the flesh", "ταῖς σαρξί(ν) (-σιν)", "to/for the fleshes"],
          ["Accusative", "τὴν σάρκα", "the flesh", "τὰς σάρκας", "the fleshes"],
        ],
      },
    ],
  },
  {
    id: "pneuma",
    name: "Neuter 3rd declension — πνεῦμα",
    sec: "14. Third declension nouns",
    cols: ["Case", "Singular", "Translation", "Plural", "Translation"],
    groups: [
      {
        head: "",
        rows: [
          ["Nominative", "τὸ πνεῦμα (-)", "the spirit", "τὰ πνεύματα", "the spirits"],
          ["Genitive", "τοῦ πνεύματος", "of the spirit", "τῶν πνευμάτων", "of the spirits"],
          ["Dative", "τῷ πνεύματι", "to/for the spirit", "τοῖς πνεύμασι(ν)", "to/for the spirits"],
          ["Accusative", "τὸ πνεῦμα (-)", "the spirit", "τὰ πνεύματα", "the spirits"],
        ],
      },
    ],
  },
  {
    id: "nouns123",
    name: "Master chart — 1st, 2nd & 3rd declension endings",
    sec: "14. Third declension nouns",
    cols: ["Case", "Fem (1st)", "Masc (2nd)", "Neut (2nd)", "Masc/Fem (3rd)", "Neut (3rd)"],
    groups: [
      {
        head: "Singular",
        rows: [
          ["Nominative", "-η / -α", "-ος", "-ον", "-ς or -none", "-none"],
          ["Genitive", "-ης / -ας", "-ου", "-ου", "-ος", "-ος"],
          ["Dative", "-ῃ / -ᾳ", "-ῳ", "-ῳ", "-ι", "-ι"],
          ["Accusative", "-ην / -αν", "-ον", "-ον", "-α / -ν", "-none"],
        ],
      },
      {
        head: "Plural",
        rows: [
          ["Nominative", "-αι", "-οι", "-α", "-ες", "-α"],
          ["Genitive", "-ων", "-ων", "-ων", "-ων", "-ων"],
          ["Dative", "-αις", "-οις", "-οις", "-σι(ν)", "-σι(ν)"],
          ["Accusative", "-ας", "-ους", "-α", "-ας", "-α"],
        ],
      },
    ],
  },
  {
    id: "perfE",
    name: "Perfect active endings",
    sec: "15. Perfect indicative",
    cols: ["Pers", "Singular", "Translation", "Plural", "Translation"],
    groups: [
      {
        head: "",
        rows: [
          ["1", "-κα", "I...", "-καμεν", "We..."],
          ["2", "-κας", "You...", "-κατε", "You (pl)..."],
          ["3", "-κε(ν)", "He/She/It...", "-καν / -κασι(ν)", "They..."],
        ],
      },
    ],
  },
  {
    id: "perfAct",
    name: "λέλυκα — perfect active",
    sec: "15. Perfect indicative",
    cols: ["Pers", "Singular", "Translation", "Plural", "Translation"],
    groups: [
      {
        head: "",
        rows: [
          ["1", "λέλυκα", "I have loosed", "λελύκαμεν", "We have loosed"],
          ["2", "λέλυκας", "You have loosed", "λελύκατε", "You (pl) have loosed"],
          ["3", "λέλυκε(ν)", "He/She/It has loosed", "λελύκασιν", "They have loosed"],
        ],
      },
    ],
  },
  {
    id: "perfMid",
    name: "λέλυμαι — perfect middle",
    sec: "15. Perfect indicative",
    cols: ["Pers", "Singular", "Translation", "Plural", "Translation"],
    groups: [
      {
        head: "",
        rows: [
          ["1", "λέλυμαι", "I have loosed for myself", "λελύμεθα", "We have loosed for ourselves"],
          ["2", "λέλυσαι", "You have loosed for yourself", "λέλυσθε", "You (pl) have loosed for yourselves"],
          ["3", "λέλυται", "He/She/It has loosed for himself/herself/itself...", "λέλυνται", "They have loosed for themselves"],
        ],
      },
    ],
  },
  {
    id: "perfPas",
    name: "λέλυμαι — perfect passive",
    sec: "15. Perfect indicative",
    cols: ["Pers", "Singular", "Translation", "Plural", "Translation"],
    groups: [
      {
        head: "",
        rows: [
          ["1", "λέλυμαι", "I have been loosed", "λελύμεθα", "We have been loosed"],
          ["2", "λέλυσαι", "You have been loosed", "λέλυσθε", "You (pl) have been loosed"],
          ["3", "λέλυται", "He/She/It has been loosed", "λέλυνται", "They have been loosed"],
        ],
      },
    ],
  },
  {
    id: "agathos",
    name: "ἀγαθός — good (2nd & 1st declension)",
    sec: "16. Adjectives and adverbs",
    cols: ["Case", "Masculine (2nd)", "Feminine (1st)", "Neuter (2nd)", "Translation (Masc.)"],
    groups: [
      {
        head: "Singular",
        rows: [
          ["Nominative", "ἀγαθός", "ἀγαθή", "ἀγαθόν", "a good (one)"],
          ["Genitive", "ἀγαθοῦ", "ἀγαθῆς", "ἀγαθοῦ", "of a good (one)"],
          ["Dative", "ἀγαθῷ", "ἀγαθῇ", "ἀγαθῷ", "to/for a good (one)"],
          ["Accusative", "ἀγαθόν", "ἀγαθήν", "ἀγαθόν", "a good (one)"],
        ],
      },
      {
        head: "Plural",
        rows: [
          ["Nominative", "ἀγαθοί", "ἀγαθαί", "ἀγαθά", "good (ones)"],
          ["Genitive", "ἀγαθῶν", "ἀγαθῶν", "ἀγαθῶν", "of good (ones)"],
          ["Dative", "ἀγαθοῖς", "ἀγαθαῖς", "ἀγαθοῖς", "to/for good (ones)"],
          ["Accusative", "ἀγαθούς", "ἀγαθάς", "ἀγαθά", "good (ones)"],
        ],
      },
    ],
  },
  {
    id: "pas",
    name: "πᾶς — all / every (3rd & 1st declension)",
    sec: "16. Adjectives and adverbs",
    cols: ["Case", "Masculine (3rd)", "Feminine (1st)", "Neuter (3rd)", "Translation (Masc.)"],
    groups: [
      {
        head: "Singular",
        rows: [
          ["Nominative", "πᾶς", "πᾶσα", "πᾶν", "all / every"],
          ["Genitive", "παντός", "πάσης", "παντός", "of all / of every"],
          ["Dative", "παντί", "πάσῃ", "παντί", "to/for all"],
          ["Accusative", "πάντα", "πᾶσαν", "πᾶν", "all / every"],
        ],
      },
      {
        head: "Plural",
        rows: [
          ["Nominative", "πάντες", "πᾶσαι", "πάντα", "all"],
          ["Genitive", "πάντων", "πασῶν", "πάντων", "of all"],
          ["Dative", "πᾶσι(ν)", "πάσαις", "πᾶσι(ν)", "to/for all"],
          ["Accusative", "πάντας", "πάσας", "πάντα", "all"],
        ],
      },
    ],
  },
  {
    id: "compw",
    name: "Comparison — helper words",
    sec: "16. Adjectives and adverbs",
    cols: ["Helper word", "Meaning"],
    groups: [
      {
        head: "",
        rows: [
          ["μείζων", "greater"],
          ["πλείων", "more"],
          ["χείρων", "worse"],
          ["κρείσσων", "better"],
        ],
      },
    ],
  },
  {
    id: "compe",
    name: "Comparison — endings and translation",
    sec: "16. Adjectives and adverbs",
    cols: ["", "Comparative", "Superlative"],
    groups: [
      {
        head: "",
        rows: [
          ["Special endings", "-τερος, -τερα, -τερον", "-τατος, -τατη, -τατον / -ιστος"],
          ["Translation", "-er / more x than", "-est / most x"],
        ],
      },
    ],
  },
  {
    id: "adv",
    name: "Adverbs (-ως)",
    sec: "16. Adjectives and adverbs",
    cols: ["Adverb", "Meaning"],
    groups: [
      {
        head: "",
        rows: [
          ["καλῶς", "well"],
          ["ἀληθῶς", "truly"],
          ["ταχέως", "quickly"],
        ],
      },
    ],
  },
  {
    id: "pp0",
    name: "Principal parts — Ch 3",
    sec: "Appendix A: principal parts of irregular verbs",
    cols: ["Present active", "Future active", "Aorist active", "Perfect active", "Perfect mid/pass", "Aorist pass"],
    groups: [
      {
        head: "",
        rows: [
          ["ἀκούω", "ἀκούσω", "ἤκουσα", "ἀκήκοα", "—", "ἠκούσθην"],
          ["ἀποκρίνομαι", "—", "ἀπεκρινάμην", "—", "—", "ἀπεκρίθην"],
          ["γίνομαι", "γενήσομαι", "ἐγενόμην", "γέγονα", "γεγέννημαι", "ἐγενήθην"],
          ["γινώσκω", "γνώσομαι", "ἔγνων", "ἔγνωκα", "ἔγνωσμαι", "ἐγνώσθην"],
          ["γράφω", "γράψω", "ἔγραψα", "γέγραφα", "γέγραμμαι", "ἐγράφη"],
          ["ἔρχομαι", "ἐλεύσομαι", "ἦλθον", "ἐλήλυθα", "—", "—"],
          ["ἔχω", "ἕξω", "ἔσχον", "ἔσχηκα", "—", "—"],
          ["λαμβάνω", "λήμψομαι", "ἔλαβον", "εἴληφα", "—", "—"],
          ["λέγω", "ἐρῶ", "εἶπον", "εἴρηκα", "εἴρημαι", "ἐρρέθην"],
        ],
      },
    ],
  },
  {
    id: "pp1",
    name: "Principal parts — Ch 4–6, 10",
    sec: "Appendix A: principal parts of irregular verbs",
    cols: ["Present active", "Future active", "Aorist active", "Perfect active", "Perfect mid/pass", "Aorist pass"],
    groups: [
      {
        head: "",
        rows: [
          ["ἄγω", "ἄξω", "ἤγαγον", "—", "—", "ἤχθην"],
          ["βλέπω", "βλέψω", "εἶδον", "ἑώρακα", "—", "ὤφθην"],
          ["ἐγείρω", "ἐγερῶ", "ἤγειρα", "—", "ἐγήγερμαι", "ἠγέρθην"],
          ["κρίνω", "κρινῶ", "ἔκρινα", "κέκρικα", "κέκριμαι", "ἐκρίθην"],
          ["κράζω", "κράξω", "ἔκραξα", "κέκραγα", "—", "—"],
          ["αἰτέω", "αἰτήσω", "ᾔτησα", "ᾔτηκα", "—", "—"],
          ["καλέω", "καλέσω", "ἐκάλεσα", "κέκληκα", "κέκλημαι", "ἐκλήθην"],
          ["ἀνοίγω", "ἀνοίξω", "ἤνοιξα", "ἀνέῳγα", "ἀνέῳγμαι", "ἀνεῴχθην"],
        ],
      },
    ],
  },
  {
    id: "pp2",
    name: "Principal parts — Ch 11",
    sec: "Appendix A: principal parts of irregular verbs",
    cols: ["Present active", "Future active", "Aorist active", "Perfect active", "Perfect mid/pass", "Aorist pass"],
    groups: [
      {
        head: "",
        rows: [
          ["ἀναβαίνω", "ἀναβήσομαι", "ἀνέβην", "ἀναβέβηκα", "—", "—"],
          ["ἀποθνῄσκω", "ἀποθανοῦμαι", "ἀπέθανον", "—", "—", "—"],
          ["βάλλω", "βαλῶ", "ἔβαλον", "βέβληκα", "βέβλημαι", "ἐβλήθην"],
          ["ἐσθίω", "φάγομαι", "ἔφαγον", "—", "—", "—"],
          ["εὑρίσκω", "εὑρήσω", "εὗρον", "εὕρηκα", "—", "εὑρέθην"],
          ["πίνω", "πίομαι", "ἔπιον", "πέπωκα", "—", "—"],
          ["πίπτω", "πεσοῦμαι", "ἔπεσον", "πέπτωκα", "—", "—"],
          ["φέρω", "οἴσω", "ἤνεγκα", "—", "—", "ἠνέχθην"],
        ],
      },
    ],
  },
  {
    id: "pp3",
    name: "Principal parts — Ch 12, 14",
    sec: "Appendix A: principal parts of irregular verbs",
    cols: ["Present active", "Future active", "Aorist active", "Perfect active", "Perfect mid/pass", "Aorist pass"],
    groups: [
      {
        head: "",
        rows: [
          ["αἴρω", "ἀρῶ", "ἦρα", "ἦρκα", "ἦρμαι", "ἤρθην"],
          ["ἀπαγγέλλω", "ἀπαγγελῶ", "ἀπήγγειλα", "—", "—", "ἀπηγγέλην"],
          ["ἀποκτείνω", "ἀποκτενῶ", "ἀπέκτεινα", "—", "—", "ἀπεκτάνθην"],
          ["ἀποστέλλω", "ἀποστελῶ", "ἀπέστειλα", "ἀπέσταλκα", "ἀπέσταλμαι", "ἀπεστάλην"],
          ["σπείρω", "—", "ἔσπειρα", "ἔσπαρκα", "ἔσπαρμαι", "ἐσπάρην"],
          ["ἐγγίζω", "ἐγγιῶ", "ἤγγισα", "ἤγγικα", "—", "—"],
          ["πείθω", "πείσω", "ἔπεισα", "πέποιθα", "πέπεισμαι", "ἐπείσθην"],
        ],
      },
    ],
  },
  {
    id: "pp4",
    name: "Principal parts — Ch 20–23",
    sec: "Appendix A: principal parts of irregular verbs",
    cols: ["Present active", "Future active", "Aorist active", "Perfect active", "Perfect mid/pass", "Aorist pass"],
    groups: [
      {
        head: "",
        rows: [
          ["ἁμαρτάνω", "ἁμαρτήσω", "ἥμαρτον", "ἡμάρτηκα", "—", "—"],
          ["δέχομαι", "—", "ἐδεξάμην", "—", "δέδεγμαι", "—"],
          ["ἀφίημι", "ἀφήσω", "ἀφῆκα", "—", "ἀφέωμαι", "ἀφέθην"],
          ["δίδωμι", "δώσω", "ἔδωκα", "δέδωκα", "δέδομαι", "ἐδόθην"],
          ["ἵστημι", "στήσω", "ἔστησα", "ἕστηκα", "—", "ἐστάθην"],
          ["τίθημι", "θήσω", "ἔθηκα", "τέθεικα", "τέθειμαι", "ἐτέθην"],
        ],
      },
    ],
  },
];
