import React, { useState, useEffect } from 'react';

/* ============================================================
   Greek Trainer — one-file React app (browser).
   Styles are the `const styles` object at the bottom of this file.
   ============================================================ */

/* ---------------- vocabulary data ---------------- */
const RAW = `
#1
ἀγάπη, ἡ|love
γῆ, ἡ|earth, land, ground
ζωή, ἡ|life
φωνή, ἡ|voice, sound
ἀλήθεια, ἡ|truth
ἁμαρτία, ἡ|sin
βασιλεία, ἡ|kingdom, reign
δόξα, ἡ|glory, majesty
ἐκκλησία, ἡ|congregation, assembly, church
ἡμέρα, ἡ|day
καρδία, ἡ|heart
δέ|and, but, now
καί|and, even, also
μέν|on the one hand, indeed
ὁ, ἡ, τό|the
#2
ἀδελφός, ὁ|brother (and sister)
ἄνθρωπος, ὁ|man, human being, husband
θεός, ὁ|God
κόσμος, ὁ|world, universe; adornment
κύριος, ὁ|Lord, master, sir
λόγος, ὁ|word, message, account
νόμος, ὁ|law, principle
οὐρανός, ὁ|heaven, sky
υἱός, ὁ|son, descendant
Χριστός, ὁ|Christ, Messiah, Anointed One
ἔργον, τό|work, deed
εὐαγγέλιον, τό|good news, gospel
ἱερόν, τό|temple, sanctuary
σημεῖον, τό|sign
τέκνον, τό|child, son, descendant
#3
εἰμί|I am, exist
ἀκούω|I hear, listen to, obey
γινώσκω|I know, understand, acknowledge
γράφω|I write
ἔχω|I have, hold
λέγω|I say, speak
λαμβάνω|I take, receive
λύω|I loose, destroy
πιστεύω|I believe, have faith/trust in
ἀποκρίνομαι|I answer, reply
γίνομαι|I become, come, exist, am born
ἔρχομαι|I come, go
πορεύομαι|I go, travel
ἀλλά|but, yet, nevertheless
ὅτι|that, because
#4
ἄγω|I lead, bring
βλέπω|I see, look at
διδάσκω|I teach
ἐγείρω|I raise up
κρίνω|I judge, condemn
μένω|I remain, abide, dwell
ὑπάγω|I go away, depart
δοῦλος, ὁ|slave
θάνατος, ὁ|death
ψυχή, ἡ|soul, life, living being
ὥρα, ἡ|hour
εἰ|if, whether
εἴτε|if, whether
καθώς|as, just as, even as
ὡς|as, like
#5
βαπτίζω|I baptize, immerse, dip
θεραπεύω|I heal
κράζω|I cry out
ἄγγελος, ὁ|angel, messenger
μαθητής, ὁ|disciple, follower
ὄχλος, ὁ|crowd
προφήτης, ὁ|prophet
γάρ|for, because
ἐκεῖ|there, in that place
κἀγώ|and I (καί + ἐγώ)
οὖν|then, so, therefore
οὕτως|in this manner, thus, so
τέ|and, but
οὐ, οὐκ, οὐχ|no, not
οὐχί|no! (emphatic)
#6
ἀγαπάω|I love
γεννάω|I give birth to, bear, beget
ἐπερωτάω|I ask
ἐρωτάω|I ask, question, request
αἰτέω|I ask, demand
ἀκολουθέω|I follow
ζητέω|I seek, look for
καλέω|I call, invite, name
λαλέω|I speak, say
μαρτυρέω|I testify, bear witness
παρακαλέω|I call, urge, comfort
περιπατέω|I walk, live
ποιέω|I do, make
φοβέομαι|I am afraid, fear, respect
πληρόω|I fill, fulfill, complete
#7
ἀπό|from, away from (gen)
διά|through (gen); because of (acc)
εἰς|into, among, for (acc)
ἐκ|from, out of (gen)
ἐν|in, on, at, by, with (dat)
ἐπί|on, over (gen); on, at, in (dat); on, to, for (acc)
κατά|down, against (gen); according to (acc)
μετά|with, among (gen); after (acc)
παρά|from (gen); beside (dat); on, at (acc)
περί|about, concerning (gen); around (acc)
πρός|to, toward (acc)
σύν|with (dat)
ὑπέρ|for (gen); above, beyond (acc)
ὑπό|by (gen); under, below (acc)
ἐνώπιον|before, in the presence of
#8
αὐτός, -ή, -ό|he, she, it; self, same
ἐγώ, ἡμεῖς|I; we
ὅς, ἥ, ὅ|who, which, that
σύ, ὑμεῖς|you (sg); you (pl)
ἄρτος, ὁ|bread, food
δικαιοσύνη, ἡ|righteousness, justice
εἰρήνη, ἡ|peace
ἐξουσία, ἡ|authority, right, power
θάλασσα, ἡ|lake, sea
λαός, ὁ|people, crowd
ὁδός, ἡ|way, road
οἰκία, ἡ|home, dwelling, family
οἶκος, ὁ|house, household, family
ὀφθαλμός, ὁ|eye
τόπος, ὁ|place
#9
διώκω|I pursue, persecute
δοξάζω|I glorify, praise
πέμπω|I send
πράσσω|I do, practice
σῴζω|I save, rescue, heal
τηρέω|I keep, guard, obey
ἀπόστολος, ὁ|apostle, messenger
ἐντολή, ἡ|command
καιρός, ὁ|time, season
κεφαλή, ἡ|head
πρόσωπον, τό|face, appearance
σάββατον, τό|Sabbath, week
ἔτι|still, yet, more
μᾶλλον|more, rather
οὐκέτι|no longer
#10
ἀνοίγω|I open
ἀπολύω|I set free, dismiss, divorce
ἄρχω|I rule, begin (mid)
προσεύχομαι|I pray
προσκυνέω|I worship
συνάγω|I gather, bring together
ἀρχή, ἡ|beginning
δαιμόνιον, τό|demon
διδάσκαλος, ὁ|teacher
θρόνος, ὁ|throne
ἱμάτιον, τό|clothing, garment
καρπός, ὁ|fruit, crop
πλοῖον, τό|ship, boat
συναγωγή, ἡ|synagogue, assembly
χαρά, ἡ|joy
#11
ἀναβαίνω|I go up, ascend
ἀπέρχομαι|I go away, depart
ἀποθνῄσκω|I die
βάλλω|I throw, cast out
εἰσέρχομαι|I go in, enter
ἐκβάλλω|I drive/send out
ἐσθίω|I eat
ἐξέρχομαι|I go out, depart, leave
εὑρίσκω|I find, discover
καταβαίνω|I go down, descend
πίνω|I drink
πίπτω|I fall
προσέρχομαι|I go to, approach
φέρω|I bear, carry
ἐπαγγελία, ἡ|promise
#12
αἴρω|I take up/away
ἀπαγγέλλω|I announce, report
ἀποκτείνω|I kill, put to death
ἀποστέλλω|I send out
σπείρω|I sow, plant
γλῶσσα, ἡ|language, tongue
γραφή, ἡ|writing, Scripture
λίθος, ὁ|stone
ναός, ὁ|temple, sanctuary
παραβολή, ἡ|parable
σοφία, ἡ|wisdom
σωτηρία, ἡ|salvation, deliverance
χρόνος, ὁ|time
διό|therefore, for this reason
εὐθύς|immediately
#13
αἰών, -ῶνος, ὁ|eternity, age, world
ἀνήρ, ἀνδρός, ὁ|man, husband
ἀρχιερεύς, -έως, ὁ|high priest
βασιλεύς, -έως, ὁ|king
πατήρ, πατρός, ὁ|father, ancestor
γυνή, γυναικός, ἡ|woman, wife
μήτηρ, -τρός, ἡ|mother
πίστις, -εως, ἡ|faith, trust
πόλις, -εως, ἡ|city, town
σάρξ, σαρκός, ἡ|flesh, body, mortal nature
χάρις, -ιτος, ἡ|grace, thanks
ἔθνος, -ους, τό|nation, people; Gentiles (pl)
ὄνομα, -ατος, τό|name
πνεῦμα, -ατος, τό|Spirit, spirit, wind
σῶμα, -ατος, τό|body
#14
ἐγγίζω|I approach, draw near
ζάω|I live
οἶδα|I know, understand
ὁράω|I see, perceive
πείθω|I persuade, convince
αἷμα, -ατος, τό|blood
γραμματεύς, -εως, ὁ|scribe
δύναμις, -εως, ἡ|power, miracle
πούς, ποδός, ὁ|foot
πῦρ, -ός, τό|fire
ῥῆμα, -ατος, τό|word, saying
στόμα, -ατος, τό|mouth
ὕδωρ, -ατος, τό|water
φῶς, φωτός, τό|light
χείρ, χειρός, ἡ|hand
#15
ἀγαθός, -ή, -όν|good
ἅγιος, -α, -ον|holy; saints (pl subst)
ἄλλος, -η, -ο|other, another, different
δίκαιος, -α, -ον|righteous, just
ἕτερος, -α, -ον|other, another, different
καλός, -ή, -όν|good, beautiful
μέγας, μεγάλη, μέγα|large, great
νεκρός, -ά, -όν|dead
πᾶς, πᾶσα, πᾶν|every, all
πιστός, -ή, -όν|faithful, believing
πολύς, πολλή, πολύ|much, many, large, great
πονηρός, -ά, -όν|evil, wicked
νῦν|now, at present
πάλιν|again
ἤ|or, than
#16
εὐαγγελίζω|I announce good news, preach
θεωρέω|I gaze, behold, look at
κάθημαι|I sit
κηρύσσω|I herald, proclaim, preach
ὑπάρχω|I exist, am
αἰώνιος, -α, -ον|eternal
ἕκαστος, -η, -ον|each
οὐδείς, οὐδεμία, οὐδέν|no one, nothing (subst)
πρεσβύτερος, -α, -ον|elder, older
ἀμήν|amen, truly, so be it
ἔξω|outside
ἕως|until, while
οὐδέ|and not, neither, nor
οὔτε|and not, neither, nor
τότε|then
#17
φανερόω|I reveal, make known, manifest
κρατέω|I grasp, seize, arrest
εἷς, μία, ἕν|one
δύο|two
τρεῖς|three
τέσσαρες|four
πέντε|five
ἑπτά|seven
δέκα|ten
δώδεκα|twelve
πρῶτος, -η, -ον|first
δεύτερος, -α, -ον|second
τρίτος, -η, -ον|third
τέταρτος, -η, -ον|fourth
μή|no, not
#18
προσφέρω|I bring to, offer
ἑτοιμάζω|I prepare
δέω|I bind
παιδίον, τό|child
ὄρος, -ους, τό|mountain, hill
ἐλπίς, -ίδος, ἡ|hope
μόνος, -η, -ον|only, single, alone
ὅλος, -η, -ον|whole, entire, complete
ἀγαπητός, -ή, -όν|beloved
μέσος, -η, -ον|middle, midst
λοιπός, -ή, -όν|remaining, rest
δεξιός, -ά, -όν|right
ἄρα|so then
ἤδη|already, now
ὧδε|here
#19
ἀλλήλων|of one another (alien)
ἑαυτοῦ, -ῆς, -οῦ|(of) himself, herself, itself
ἐκεῖνος, -η, -ο|that; those (pl)
ἐμαυτοῦ, -ῆς|myself
οὗτος, αὕτη, τοῦτο|this; these (pl)
σεαυτοῦ, -ῆς|(of) yourself
τις, τι|someone, certain
τίς, τί|who? which? what?
ἐμός, -ή, -όν|my, mine
ἔσχατος, -η, -ον|last
ἴδιος, -α, -ον|one’s own, peculiar
κακός, -ή, -όν|bad, evil
ὅσος, -η, -ον|as much as
τοιοῦτος, -αύτη, -οῦτον|of such a kind, such as this
πῶς|how?
#20
ἁμαρτάνω|I sin (ἥμαρτον)
βούλομαι|I wish, want, desire
δεῖ|It is necessary, one must/should
δοκέω|I seem, suppose, think
δύναμαι|I am able, can
θέλω|I want, wish, desire
μέλλω|I am about to, am going to
θέλημα, -ατος, τό|will, wish, desire
νύξ, νυκτός, ἡ|night
μακάριος, -α, -ον|blessed, happy
μηδείς, μηδεμία, μηδέν|no one, nothing (subst)
τυφλός, -ή, -όν|blind; blind person (subst)
πρό|before, in front of (gen)
μηδέ|and not, nor
ὥστε|so that
#21
δέχομαι|I take, receive, welcome
δικαιόω|I declare righteous, justify
λογίζομαι|I consider, reckon
σταυρόω|I crucify
χαίρω|I rejoice; greetings
ἄν|(particle of indefiniteness: untranslated)
ἐάν|if, when
ἐὰν μή|unless
ἵνα|in order that, so that, that
ὅπου|where
ὅπως|in order that, that
ὅστις, ἥτις, ὅ τι|whoever, whatever, who
ὅταν|whenever, when (ὅτε + ἄν)
ὅτε|when
ποῦ|where?
#22
ἀσπάζομαι|I greet
ἐπιγινώσκω|I know, understand
ἐργάζομαι|I work, do, perform
καθίζω|I sit
κατοικέω|I live, dwell
γενεά, ἡ|generation, family
ἔτος, -ους, τό|year
θηρίον, τό|animal, beast
θλῖψις, -εως, ἡ|tribulation, affliction
χρεία, ἡ|need
κρίσις, -εως, ἡ|judgment, condemnation
φόβος, ὁ|fear, reverence, respect
φυλακή, ἡ|watch, guard, prison
ἔμπροσθεν|in front of, before
ἰδού|behold, look, see
#23
ἀνίστημι|I stand up, arise
ἀποδίδωμι|I give back, pay
ἀπόλλυμι|I destroy, am lost (mid)
ἀφίημι|I forgive, let go, divorce
δίδωμι|I give
ἵστημι|I stand, set
παραδίδωμι|I hand over, betray, entrust
τίθημι|I put, place, appoint
φημί|I say, affirm
ἁμαρτωλός, -όν|sinful, sinner (subst)
ἔρημος, -όν|desolate, desert, wilderness (subst)
μικρός, -ά, -όν|small
ὅμοιος, -α, -ον|same nature, similar
ἄχρι|until
οὐαί|woe
`;

const ALL = [];
(() => {
  let ch = 0;
  RAW.split('\n').forEach((line) => {
    const l = line.trim();
    if (!l) return;
    if (l[0] === '#') {
      ch = parseInt(l.slice(1), 10);
      return;
    }
    const p = l.split('|');
    ALL.push({ g: p[0].trim(), e: p[1].trim(), ch });
  });
})();

/* ---------------- paradigm data ----------------
   cols: header labels. rows: [label, answer, answer, ...] */
const PD = [
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
    id: "prepcase",
    name: "Prepositions — case changes the meaning",
    sec: "8. Prepositions",
    cols: ["Preposition + case", "Meaning", "Example"],
    groups: [
      {
        head: "",
        rows: [
          ["διά + accusative", "on account of", "διὰ τὸν λόγον = on account of the word"],
          ["διά + genitive", "through", "διὰ τοῦ λόγου = through the word"],
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

const CHAPTERS = Array.from({ length: 23 }, (_, i) => i + 1);

const shuffle = (a) => {
  const b = a.slice();
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
};

const chapterMap = (value) => {
  const o = {};
  CHAPTERS.forEach((n) => (o[n] = value));
  return o;
};

/* ---------------- small button ---------------- */
function Btn({ kind, small, disabled, onClick, style, children }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        ...styles.btn,
        ...(kind === 'ghost' ? styles.btnGhost : null),
        ...(small ? styles.btnSmall : null),
        ...(disabled ? styles.btnDisabled : null),
        ...style,
      }}
    >
      {children}
    </button>
  );
}

/* ---------------- home ---------------- */
function Home({ onVocab, onParadigms }) {
  return (
    <section>
      <h1 style={styles.h1}>Greek trainer</h1>
      <p style={styles.sub}>Vocabulary and paradigms, semester 1</p>
      <Btn onClick={onVocab}>Vocabulary flashcards</Btn>
      <Btn kind="ghost" onClick={onParadigms}>Build a paradigm</Btn>
    </section>
  );
}

/* ---------------- vocabulary ---------------- */
function Vocab({ onHome }) {
  const [stage, setStage] = useState('setup'); // setup | study | finish
  const [selected, setSelected] = useState(chapterMap(false));
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
      <section>
        <h1 style={styles.h1}>Greek vocabulary</h1>
        <p style={styles.sub}>Merkle &amp; Plummer, chapters 1–23</p>

        <div style={styles.panel}>
          <h2 style={styles.h2}>Chapters</h2>
          <div style={styles.chips}>
            {CHAPTERS.map((n) => (
              <button
                key={n}
                aria-label={'Chapter ' + n}
                aria-pressed={!!selected[n]}
                onClick={() => setSelected((s) => ({ ...s, [n]: !s[n] }))}
                style={{ ...styles.chip, ...(selected[n] ? styles.chipOn : null) }}
              >
                {n}
              </button>
            ))}
          </div>
          <div style={styles.row}>
            <button style={styles.link} onClick={() => setSelected(chapterMap(true))}>Select all</button>
            <button style={styles.link} onClick={() => setSelected(chapterMap(false))}>Clear</button>
          </div>
          <p style={styles.count}>{count} words selected</p>
        </div>

        <div style={styles.panel}>
          <h2 style={styles.h2}>Show first</h2>
          <div style={styles.seg}>
            <button
              aria-pressed={dir === 'ge'}
              onClick={() => setDir('ge')}
              style={{ ...styles.segBtn, ...(dir === 'ge' ? styles.segOn : null) }}
            >
              Greek
            </button>
            <button
              aria-pressed={dir === 'eg'}
              onClick={() => setDir('eg')}
              style={{ ...styles.segBtn, ...(dir === 'eg' ? styles.segOn : null) }}
            >
              English
            </button>
          </div>
        </div>

        <Btn disabled={count === 0} onClick={begin} style={{ marginBottom: 0 }}>Start studying</Btn>
        <button style={{ ...styles.link, marginTop: 12 }} onClick={onHome}>← Home</button>
      </section>
    );
  }

  if (stage === 'study') {
    const w = queue[0];
    if (!w) return null;
    const showGreek = dir === 'ge' ? !flipped : flipped;
    return (
      <section>
        <div style={styles.top}>
          <Btn kind="ghost" small onClick={() => setStage('setup')} style={{ marginBottom: 0 }}>Chapters</Btn>
          <span style={{ ...styles.sub, margin: 0 }}>{done} of {total} learned</span>
        </div>
        <div style={styles.bar}>
          <i style={{ ...styles.barFill, width: (total ? (done / total) * 100 : 0) + '%' }} />
        </div>
        <div style={styles.flash}>
          <button
            key={w.g + String(flipped)}
            onClick={flip}
            aria-live="polite"
            className="flip-card"
            style={styles.face}
          >
            <span style={styles.tag}>Chapter {w.ch}</span>
            <span style={showGreek ? styles.greek : styles.eng}>{showGreek ? w.g : w.e}</span>
            <span style={styles.hint}>{flipped ? '' : 'Tap to flip'}</span>
          </button>
        </div>
        {flipped ? (
          <div style={styles.answers}>
            <button style={{ ...styles.answerBtn, ...styles.answerMiss }} onClick={miss}>Missed it</button>
            <button style={{ ...styles.answerBtn, ...styles.answerGot }} onClick={got}>Got it</button>
          </div>
        ) : (
          <Btn onClick={flip} style={{ marginBottom: 0 }}>Show answer</Btn>
        )}
      </section>
    );
  }

  const m = Object.keys(missed).length;
  return (
    <section>
      <div style={{ ...styles.panel, ...styles.done }}>
        <p style={styles.doneBig}>Deck complete</p>
        <p style={styles.sub}>{total} words done. {m} needed a second look.</p>
        <Btn onClick={begin} style={{ marginBottom: 8 }}>Study again</Btn>
        <Btn kind="ghost" onClick={() => setStage('setup')} style={{ marginBottom: 0 }}>Change chapters</Btn>
      </div>
    </section>
  );
}

/* ---------------- paradigms ---------------- */
function Paradigms({ onHome }) {
  const [game, setGame] = useState(null); // { p, answers, tiles }
  const [placed, setPlaced] = useState([]); // tile id (or null) for each slot
  const [sel, setSel] = useState(null); // selected tile id
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

  if (!game) {
    let last = null;
    return (
      <section>
        <div style={styles.top}>
          <Btn kind="ghost" small onClick={onHome} style={{ marginBottom: 0 }}>Back</Btn>
          <strong>Paradigms</strong>
        </div>
        <div style={styles.panel}>
          {PD.map((p) => {
            const head = p.sec && p.sec !== last ? p.sec : null;
            last = p.sec;
            return (
              <React.Fragment key={p.id}>
                {head && <div style={styles.secHead}>{head}</div>}
                <Btn kind="ghost" onClick={() => start(p)} style={{ textAlign: 'left' }}>{p.name}</Btn>
              </React.Fragment>
            );
          })}
        </div>
      </section>
    );
  }

  const { p, answers, tiles } = game;
  const textOf = (id) => tiles.find((t) => t.id === id).text;
  const used = new Set(placed.filter((x) => x !== null));
  const allFilled = placed.every((x) => x !== null);
  const right = checked ? placed.filter((id, i) => textOf(id) === answers[i]).length : 0;
  const pct = Math.round((right / answers.length) * 100);

  const place = (idx, id) => {
    if (checked || placed[idx] !== null || id === null) return;
    setPlaced((arr) => arr.map((v, i) => (i === idx ? id : v)));
    setSel(null);
  };
  const clickSlot = (idx) => {
    if (checked) return;
    if (placed[idx] !== null) {
      setPlaced((arr) => arr.map((v, i) => (i === idx ? null : v)));
      return;
    }
    place(idx, sel);
  };

  let slotIdx = 0;
  const title = p.name.length > 28 ? p.name.slice(0, 26) + '…' : p.name;

  return (
    <section>
      <div style={styles.top}>
        <Btn kind="ghost" small onClick={() => setGame(null)} style={{ marginBottom: 0 }}>Paradigms</Btn>
        <span style={{ ...styles.sub, margin: 0 }}>{title}</span>
      </div>
      {!checked && (
        <p style={styles.sub}>Tap a form below, then tap the cell it belongs in. Drag also works.</p>
      )}

      <div style={styles.tscroll}>
        <table style={styles.pd}>
          <thead>
            <tr>{p.cols.map((c, i) => <th key={i} style={styles.th}>{c}</th>)}</tr>
          </thead>
          <tbody>
            {p.groups.map((g, gi) => (
              <React.Fragment key={gi}>
                {g.head && (
                  <tr><td colSpan={p.cols.length} style={styles.lbl}>{g.head}</td></tr>
                )}
                {g.rows.map((r, ri) => (
                  <tr key={ri}>
                    <td style={styles.lbl}>{r[0]}</td>
                    {r.slice(1).map((_, ci) => {
                      const idx = slotIdx++;
                      const id = placed[idx];
                      const filled = id !== null;
                      const ok = checked && filled && textOf(id) === answers[idx];
                      const no = checked && !ok;
                      return (
                        <td
                          key={ci}
                          style={styles.slot}
                          onClick={() => clickSlot(idx)}
                          onDragOver={(e) => e.preventDefault()}
                          onDrop={(e) => { e.preventDefault(); place(idx, sel); }}
                        >
                          <span
                            style={{
                              ...styles.inner,
                              ...(!filled ? styles.innerEmpty : null),
                              ...(ok ? styles.innerOk : null),
                              ...(no ? styles.innerNo : null),
                            }}
                          >
                            {filled ? textOf(id) : ''}
                          </span>
                          {no && <span style={styles.fix}>{answers[idx]}</span>}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {!checked && (
        <div style={styles.panel}>
          <h2 style={styles.h2}>Forms ({tiles.length})</h2>
          <div style={styles.bank}>
            {tiles.filter((t) => !used.has(t.id)).map((t) => (
              <button
                key={t.id}
                draggable
                onDragStart={(e) => { setSel(t.id); e.dataTransfer.setData('text/plain', String(t.id)); }}
                onClick={() => setSel(sel === t.id ? null : t.id)}
                style={{ ...styles.tile, ...(sel === t.id ? styles.tileSel : null) }}
              >
                {t.text}
              </button>
            ))}
          </div>
        </div>
      )}

      {!checked ? (
        <Btn disabled={!allFilled} onClick={() => setChecked(true)}>Check my table</Btn>
      ) : (
        <div style={{ ...styles.panel, textAlign: 'center' }}>
          <p style={styles.score}>{right} / {answers.length}</p>
          <p style={styles.sub}>
            {pct === 100
              ? 'Whole table correct.'
              : pct + '% — green cells are right, the small green form under a red cell is what belonged there.'}
          </p>
          <Btn onClick={() => start(p)}>Try again</Btn>
          <Btn kind="ghost" onClick={() => setGame(null)}>Another paradigm</Btn>
        </div>
      )}
    </section>
  );
}

/* ---------------- app ---------------- */
export default function App() {
  const [screen, setScreen] = useState('home'); // home | vocab | paradigms
  const [dark, setDark] = useState(
    () => typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    if (!window.matchMedia) return undefined;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e) => setDark(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (!document.getElementById('greek-fonts')) {
      const link = document.createElement('link');
      link.id = 'greek-fonts';
      link.rel = 'stylesheet';
      link.href =
        'https://fonts.googleapis.com/css2?family=Gentium+Plus:wght@400;700&family=Source+Sans+3:wght@400;600&display=swap';
      document.head.appendChild(link);
    }
  }, []);

  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.background = dark ? themes.dark['--bg'] : themes.light['--bg'];
  }, [dark]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [screen]);

  return (
    <div style={{ ...styles.root, ...(dark ? themes.dark : themes.light) }}>
      <style>{globalCss}</style>
      <div style={styles.wrap}>
        {screen === 'home' && (
          <Home onVocab={() => setScreen('vocab')} onParadigms={() => setScreen('paradigms')} />
        )}
        {screen === 'vocab' && <Vocab onHome={() => setScreen('home')} />}
        {screen === 'paradigms' && <Paradigms onHome={() => setScreen('home')} />}
      </div>
    </div>
  );
}

/* ============================================================
   Styles
   ============================================================ */
const themes = {
  light: {
    '--bg': '#eef1f5', '--card': '#fff', '--ink': '#1c2433', '--muted': '#65708a', '--line': '#d5dbe6',
    '--accent': '#2b4c9b', '--accent-ink': '#fff', '--good': '#2f7d4f', '--goodbg': '#e6f3ec',
    '--bad': '#b3402f', '--badbg': '#fbe9e6', '--slot': '#f4f6fa',
  },
  dark: {
    '--bg': '#131826', '--card': '#1c2336', '--ink': '#e8ecf5', '--muted': '#93a0bd', '--line': '#2e3852',
    '--accent': '#7d9cf0', '--accent-ink': '#0f1524', '--good': '#6cc48f', '--goodbg': '#1d3529',
    '--bad': '#f08a78', '--badbg': '#3a1f1b', '--slot': '#161d2e',
  },
};

const globalCss = `
*{box-sizing:border-box}
@keyframes flip{from{transform:rotateX(70deg);opacity:.2}to{transform:none;opacity:1}}
@media (prefers-reduced-motion:reduce){.flip-card{animation:none!important}}
button:focus-visible{outline:3px solid var(--accent);outline-offset:2px}
`;

const styles = {
  root: {
    minHeight: '100vh',
    background: 'var(--bg)',
    color: 'var(--ink)',
    fontFamily: '"Source Sans 3", system-ui, sans-serif',
    fontSize: 16,
    lineHeight: 1.4,
    WebkitTextSizeAdjust: '100%',
  },
  wrap: { maxWidth: 640, margin: '0 auto', padding: 16 },
  h1: { fontFamily: '"Gentium Plus", serif', fontSize: 26, margin: '6px 0 4px' },
  h2: { fontSize: 15, margin: '0 0 10px', fontWeight: 600 },
  sub: { color: 'var(--muted)', margin: '0 0 16px' },
  panel: {
    background: 'var(--card)',
    border: '1px solid var(--line)',
    borderRadius: 14,
    padding: 14,
    marginBottom: 14,
  },
  secHead: { margin: '16px 0 6px', fontWeight: 600, textAlign: 'left', color: 'var(--muted)' },
  btn: {
    border: 0,
    borderRadius: 12,
    padding: '14px 16px',
    font: 'inherit',
    fontWeight: 600,
    cursor: 'pointer',
    width: '100%',
    background: 'var(--accent)',
    color: 'var(--accent-ink)',
    marginBottom: 8,
  },
  btnGhost: { background: 'transparent', color: 'var(--ink)', border: '1px solid var(--line)', fontWeight: 400 },
  btnSmall: { width: 'auto', padding: '8px 12px', fontWeight: 400 },
  btnDisabled: { opacity: 0.45, cursor: 'default' },
  link: {
    background: 'none',
    border: 0,
    color: 'var(--accent)',
    font: 'inherit',
    cursor: 'pointer',
    padding: '4px 0',
  },
  row: { display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 10 },
  top: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8, marginBottom: 10 },
  count: { color: 'var(--muted)', margin: '10px 0 0' },

  /* chapter chips + direction switch */
  chips: { display: 'flex', flexWrap: 'wrap', gap: 6 },
  chip: {
    border: '1px solid var(--line)',
    background: 'transparent',
    color: 'var(--ink)',
    borderRadius: 999,
    minWidth: 44,
    padding: '8px 10px',
    font: 'inherit',
    cursor: 'pointer',
  },
  chipOn: { background: 'var(--accent)', color: 'var(--accent-ink)', border: '1px solid var(--accent)' },
  seg: { display: 'flex', border: '1px solid var(--line)', borderRadius: 10, overflow: 'hidden' },
  segBtn: {
    flex: 1,
    border: 0,
    background: 'transparent',
    color: 'var(--ink)',
    padding: 10,
    font: 'inherit',
    cursor: 'pointer',
  },
  segOn: { background: 'var(--accent)', color: 'var(--accent-ink)' },

  /* flashcards */
  bar: { height: 6, background: 'var(--line)', borderRadius: 6, overflow: 'hidden', marginBottom: 14 },
  barFill: { display: 'block', height: '100%', background: 'var(--accent)', transition: 'width .25s' },
  flash: { perspective: 1200, marginBottom: 14 },
  face: {
    position: 'relative',
    minHeight: 260,
    width: '100%',
    border: '1px solid var(--line)',
    background: 'var(--card)',
    borderRadius: 18,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    textAlign: 'center',
    font: 'inherit',
    color: 'inherit',
    cursor: 'pointer',
    animation: 'flip .28s ease',
  },
  tag: { position: 'absolute', top: 12, left: 16, color: 'var(--muted)', fontSize: 13 },
  hint: { position: 'absolute', bottom: 12, color: 'var(--muted)', fontSize: 13 },
  greek: { fontFamily: '"Gentium Plus", serif', fontSize: 40, lineHeight: 1.2, overflowWrap: 'anywhere' },
  eng: { fontSize: 26 },
  answers: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 },
  answerBtn: {
    border: '2px solid var(--line)',
    borderRadius: 12,
    padding: '14px 16px',
    font: 'inherit',
    fontWeight: 600,
    cursor: 'pointer',
    background: 'var(--card)',
    color: 'var(--ink)',
  },
  answerMiss: { border: '2px solid var(--bad)', color: 'var(--bad)' },
  answerGot: { border: '2px solid var(--good)', color: 'var(--good)' },
  done: { textAlign: 'center', padding: '24px 8px' },
  doneBig: { fontFamily: '"Gentium Plus", serif', fontSize: 34, margin: '0 0 6px' },

  /* paradigm tables */
  tscroll: { overflowX: 'auto', WebkitOverflowScrolling: 'touch', marginBottom: 14 },
  pd: { borderCollapse: 'collapse', width: '100%', minWidth: 320, background: 'var(--card)' },
  th: {
    border: '1px solid var(--line)',
    padding: '6px 8px',
    textAlign: 'left',
    fontSize: 15,
    background: 'var(--slot)',
    fontWeight: 600,
    whiteSpace: 'nowrap',
  },
  lbl: {
    border: '1px solid var(--line)',
    padding: '6px 8px',
    textAlign: 'left',
    fontSize: 15,
    background: 'var(--slot)',
    fontWeight: 600,
    whiteSpace: 'nowrap',
  },
  slot: { border: '1px solid var(--line)', minWidth: 76, height: 42, padding: 0, cursor: 'pointer' },
  inner: {
    width: '100%',
    height: '100%',
    minHeight: 42,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: '"Gentium Plus", serif',
    fontSize: 19,
    borderRadius: 6,
    padding: '0 6px',
  },
  innerEmpty: {
    backgroundImage:
      'repeating-linear-gradient(45deg, transparent, transparent 5px, var(--slot) 5px, var(--slot) 10px)',
    border: '1px dashed var(--line)',
  },
  innerOk: { background: 'var(--goodbg)', color: 'var(--good)' },
  innerNo: { background: 'var(--badbg)', color: 'var(--bad)', textDecoration: 'line-through' },
  fix: {
    display: 'block',
    fontFamily: '"Gentium Plus", serif',
    fontSize: 14,
    color: 'var(--good)',
    padding: '2px 4px',
  },
  bank: { display: 'flex', flexWrap: 'wrap', gap: 8, minHeight: 50 },
  tile: {
    fontFamily: '"Gentium Plus", serif',
    fontSize: 19,
    background: 'var(--card)',
    border: '1px solid var(--line)',
    borderRadius: 10,
    padding: '9px 13px',
    cursor: 'grab',
    color: 'inherit',
    touchAction: 'manipulation',
  },
  tileSel: { background: 'var(--accent)', color: 'var(--accent-ink)', border: '1px solid var(--accent)' },
  score: { fontFamily: '"Gentium Plus", serif', fontSize: 30, margin: '0 0 4px' },
};