const grammar = {
  A1: {
    en: {
      prompt: "She ___ in Madrid.",
      options: ["lives", "live", "living"],
      why: {
        en: "With he, she or it, add -s to most simple present verbs.",
        de: "Bei he, she und it erhalten die meisten Verben im Simple Present ein -s.",
        es: "Con he, she o it, la mayoría de los verbos en presente simple llevan -s.",
      },
    },
    de: {
      prompt: "Ich ___ am Bahnhof.",
      options: ["bin", "ist", "sind"],
      why: {
        en: "With ich, the present form of sein is bin.",
        de: "Zu ich gehört im Präsens die Form bin.",
        es: "Con ich, el verbo sein se conjuga bin en presente.",
      },
    },
    es: {
      prompt: "La estación ___ aquí.",
      options: ["está", "es", "son"],
      why: {
        en: "Use estar to locate a place or object. The singular form is está.",
        de: "Für die Lage eines Ortes oder Gegenstands steht estar. Die Singularform lautet está.",
        es: "Se usa estar para situar un lugar o un objeto. La forma singular es está.",
      },
    },
  },
  A2: {
    en: {
      prompt: "We ___ the bus yesterday.",
      options: ["missed", "miss", "missing"],
      why: {
        en: "Yesterday locates the event in a finished past period. Use the simple past.",
        de: "Yesterday verweist auf einen abgeschlossenen Zeitraum. Hier steht das Simple Past.",
        es: "Yesterday sitúa el hecho en un periodo pasado y terminado. Se usa el pasado simple.",
      },
    },
    de: {
      prompt: "Gestern bin ich nach Hause ___.",
      options: ["gefahren", "fahren", "fährt"],
      why: {
        en: "The perfect of fahren for travel to a destination combines sein with gefahren.",
        de: "Bei einer Fahrt zu einem Ziel steht im Perfekt sein mit gefahren.",
        es: "Para un desplazamiento hacia un destino, el perfecto de fahren combina sein y gefahren.",
      },
    },
    es: {
      prompt: "De pequeña, Ana ___ cerca del mar todos los veranos.",
      options: ["vivía", "vive", "vivirá"],
      why: {
        en: "The imperfect describes a repeated situation in the past.",
        de: "Das Imperfecto beschreibt einen wiederkehrenden Zustand in der Vergangenheit.",
        es: "El imperfecto presenta una situación habitual del pasado.",
      },
    },
  },
  B1: {
    en: {
      prompt: "If the parcel arrives tomorrow, I ___ you.",
      options: ["will call", "called", "had called"],
      why: {
        en: "A realistic future condition takes the present in the if-clause. Will can express the predicted result.",
        de: "Bei einer realistischen Zukunftsbedingung steht im if-Satz Präsens. Will kann die erwartete Folge ausdrücken.",
        es: "En una condición futura posible se usa el presente tras if. Will puede expresar el resultado previsto.",
      },
    },
    de: {
      prompt: "Ich arbeite zu Hause, weil mein Zug heute nicht ___.",
      options: ["fährt", "fahren", "fahre"],
      why: {
        en: "In a weil-clause, the conjugated verb goes at the end. Zug is singular.",
        de: "Im Nebensatz mit weil steht das gebeugte Verb am Ende. Zug steht im Singular.",
        es: "En una subordinada con weil, el verbo conjugado va al final. Zug es singular.",
      },
    },
    es: {
      prompt: "Te llamaré cuando ___ a la estación.",
      options: ["llegue", "llegué", "llego"],
      why: {
        en: "In this future time clause, cuando introduces an event still to happen. Use the present subjunctive.",
        de: "Cuando leitet hier einen noch ausstehenden Zeitpunkt ein. Deshalb steht der Subjuntivo im Präsens.",
        es: "En esta subordinada temporal de futuro, cuando introduce un hecho pendiente. Se usa el presente de subjuntivo.",
      },
    },
  },
  B2: {
    en: {
      prompt: "If we had more time now, we ___ the proposal again.",
      options: ["would review", "had reviewed", "will have reviewed"],
      why: {
        en: "An imagined present condition can pair if plus past simple with would in the result.",
        de: "Bei einer gedachten Gegenwartsbedingung kann auf if mit Simple Past im Hauptsatz would stehen.",
        es: "Una condición presente hipotética puede combinar if más pasado simple con would en el resultado.",
      },
    },
    de: {
      prompt: "Wenn die Zahlen vorlägen, ___ wir den Bericht abschließen.",
      options: ["könnten", "können", "konnten"],
      why: {
        en: "The Konjunktiv II in both clauses presents the condition and its consequence as hypothetical here.",
        de: "Der Konjunktiv II in beiden Satzteilen kennzeichnet hier Bedingung und Folge als hypothetisch.",
        es: "El Konjunktiv II en ambas partes marca aquí la condición y su consecuencia como hipotéticas.",
      },
    },
    es: {
      prompt: "Enviaremos el informe siempre que los datos ___ a tiempo.",
      options: ["lleguen", "llegan", "llegaron"],
      why: {
        en: "Siempre que means provided that here and introduces a condition with the subjunctive.",
        de: "Siempre que bedeutet hier sofern. Die Bedingung verlangt den Subjuntivo.",
        es: "Siempre que tiene aquí valor condicional y va seguido de subjuntivo.",
      },
    },
  },
  C1: {
    en: {
      prompt:
        "The observed decline may ___ influenced by the reminders sent that quarter.",
      options: ["have been", "has been", "being"],
      why: {
        en: "May have been plus a participle marks a possible past cause in the passive voice.",
        de: "May have been mit Partizip kennzeichnet im Passiv eine mögliche Ursache in der Vergangenheit.",
        es: "May have been más participio expresa en pasiva una causa pasada posible.",
      },
    },
    de: {
      prompt:
        "Die Vorsitzende erklärte, der Ausschuss ___ den Vorschlag zur Kenntnis genommen.",
      options: ["habe", "habt", "hätten"],
      why: {
        en: "In formal indirect speech, habe is the third-person singular Konjunktiv I of haben.",
        de: "In formeller indirekter Rede steht hier habe als dritte Person Singular des Konjunktivs I.",
        es: "En el estilo indirecto formal, habe es la tercera persona singular de haben en Konjunktiv I.",
      },
    },
    es: {
      prompt: "No consta que el comité ___ aprobado la financiación.",
      options: ["haya", "ha", "había"],
      why: {
        en: "No consta que frames approval as unverified. Haya aprobado marks a possible completed event.",
        de: "No consta que kennzeichnet die Zusage als unbestätigt. Haya aprobado bezieht sich auf ein möglicherweise abgeschlossenes Ereignis.",
        es: "No consta que presenta la aprobación como no acreditada. Haya aprobado remite a un hecho posiblemente concluido.",
      },
    },
  },
  C2: {
    en: {
      prompt:
        "The letter is compatible with the figures, ___ written from a different vantage point.",
      options: ["albeit", "unless", "until"],
      why: {
        en: "Albeit introduces a concession. Here the reduced clause means although it was written.",
        de: "Albeit leitet eine Einräumung ein. Die verkürzte Konstruktion entspricht hier although it was written.",
        es: "Albeit introduce una concesión. La construcción reducida equivale aquí a although it was written.",
      },
    },
    de: {
      prompt: "Der Plan sei, ___ der Zeuge vernommen habe, bereits genehmigt.",
      options: ["wie", "falls", "damit"],
      why: {
        en: "Wie marks the inserted report of what the witness heard. The Konjunktiv preserves distance from the assertion.",
        de: "Wie leitet den eingeschobenen Verweis auf das Gehörte ein. Der Konjunktiv wahrt Distanz zur Behauptung.",
        es: "Wie introduce el inciso sobre lo que oyó el testigo. El Konjunktiv conserva la distancia frente a la afirmación.",
      },
    },
    es: {
      prompt:
        "Que el informe describa una mejora global no implica que esta ___ por igual a cada sede.",
      options: ["beneficie", "beneficiará", "benefició"],
      why: {
        en: "The sentence concedes the overall improvement and withholds endorsement of its distribution. No implica que introduces the subjunctive.",
        de: "Der Satz räumt die allgemeine Verbesserung ein, lässt ihre Verteilung aber offen. Nach no implica que steht hier der Subjuntivo.",
        es: "La oración concede la mejora global y deja abierta su distribución. No implica que introduce aquí el subjuntivo.",
      },
    },
  },
};

const additionalGrammar = {
  A1: {
    en: [
      {
        prompt: "There ___ two cups on the table.",
        options: ["are", "is", "am"],
        why: {
          en: "Two cups is plural.",
          de: "Two cups steht im Plural.",
          es: "Two cups está en plural.",
        },
      },
      {
        prompt: "Does the bus ___ here?",
        options: ["stop", "stops", "stopping"],
        why: {
          en: "After does, use the base form.",
          de: "Nach does steht die Grundform.",
          es: "Después de does se usa la forma base.",
        },
      },
    ],
    de: [
      {
        prompt: "Wir fahren mit ___ Bus.",
        options: ["dem", "den", "der"],
        why: {
          en: "Mit takes the dative. Bus is masculine.",
          de: "Mit verlangt den Dativ. Bus ist maskulin.",
          es: "Mit rige dativo. Bus es masculino.",
        },
      },
      {
        prompt: "Das ist ___ Tasche. Sie gehört mir.",
        options: ["meine", "mein", "meinen"],
        why: {
          en: "Tasche is feminine singular.",
          de: "Tasche ist feminin und steht im Singular.",
          es: "Tasche es femenino singular.",
        },
      },
    ],
    es: [
      {
        prompt: "Mis compañeros ___ de Valencia.",
        options: ["son", "es", "está"],
        why: {
          en: "Use ser for origin. Compañeros is plural.",
          de: "Für Herkunft steht ser. Compañeros ist Plural.",
          es: "Para el origen se usa ser. Compañeros es plural.",
        },
      },
      {
        prompt: "¿___ cuesta este billete?",
        options: ["Cuánto", "Cuántas", "Cuáles"],
        why: {
          en: "Use cuánto to ask a price.",
          de: "Nach dem Preis fragt man mit cuánto.",
          es: "Se pregunta por el precio con cuánto.",
        },
      },
    ],
  },
  A2: {
    en: [
      {
        prompt: "We haven't got ___ milk left.",
        options: ["any", "many", "an"],
        why: {
          en: "In this negative sentence, milk is uncountable.",
          de: "Milk ist hier nicht zählbar. Nach der Verneinung passt any.",
          es: "Milk es incontable. En esta oración negativa se usa any.",
        },
      },
      {
        prompt: "The new route is ___ than the old one.",
        options: ["shorter", "short", "shortest"],
        why: {
          en: "Than introduces a comparison between two routes.",
          de: "Than leitet einen Vergleich zwischen zwei Strecken ein.",
          es: "Than introduce una comparación entre dos rutas.",
        },
      },
    ],
    de: [
      {
        prompt: "Der Zug fährt um acht Uhr ___.",
        options: ["ab", "abfahren", "abfährt"],
        why: {
          en: "In a main clause the prefix of abfahren comes last.",
          de: "Im Hauptsatz steht die Vorsilbe von abfahren am Ende.",
          es: "En la oración principal se separa el prefijo de abfahren.",
        },
      },
      {
        prompt: "Ich habe gestern einen Bericht ___.",
        options: ["geschrieben", "schreiben", "schrieb"],
        why: {
          en: "Haben forms the perfect with the past participle.",
          de: "Das Perfekt besteht hier aus haben und dem Partizip II.",
          es: "El perfecto se forma aquí con haben y el participio.",
        },
      },
    ],
    es: [
      {
        prompt: "Ayer nosotros ___ al museo.",
        options: ["fuimos", "vamos", "iremos"],
        why: {
          en: "Ayer refers to a completed visit in the past.",
          de: "Ayer bezeichnet hier einen abgeschlossenen Besuch.",
          es: "Ayer sitúa la visita en un periodo terminado.",
        },
      },
      {
        prompt: "Esta mochila es más ligera ___ la mía.",
        options: ["que", "como", "de"],
        why: {
          en: "Use más + adjective + que to compare two things.",
          de: "Zwei Dinge vergleicht man mit más + Adjektiv + que.",
          es: "La comparación de superioridad se construye con más + adjetivo + que.",
        },
      },
    ],
  },
  B1: {
    en: [
      {
        prompt: "I've worked here ___ 2021.",
        options: ["since", "for", "during"],
        why: {
          en: "Since introduces the starting point of a period.",
          de: "Since nennt den Anfang eines Zeitraums.",
          es: "Since introduce el punto de partida de un periodo.",
        },
      },
      {
        prompt: "The documents ___ yesterday morning.",
        options: ["were sent", "are send", "has sent"],
        why: {
          en: "A completed passive event uses were plus the past participle.",
          de: "Das Passiv in der Vergangenheit lautet hier were + Partizip.",
          es: "La pasiva en pasado se forma aquí con were + participio.",
        },
      },
    ],
    de: [
      {
        prompt: "Das ist die Kollegin, mit ___ ich arbeite.",
        options: ["der", "die", "dem"],
        why: {
          en: "Mit requires a dative relative pronoun. Kollegin is feminine.",
          de: "Mit verlangt den Dativ. Das Bezugswort Kollegin ist feminin.",
          es: "Mit rige dativo. Kollegin es femenino.",
        },
      },
      {
        prompt: "Ich weiß nicht, ___ der Termin verschoben wurde.",
        options: ["ob", "denn", "trotz"],
        why: {
          en: "Ob introduces an indirect yes-or-no question.",
          de: "Ob leitet eine indirekte Entscheidungsfrage ein.",
          es: "Ob introduce una pregunta indirecta de sí o no.",
        },
      },
    ],
    es: [
      {
        prompt: "Si mañana llueve, ___ en casa.",
        options: ["nos quedaremos", "quedarnos", "nos hayamos quedado"],
        why: {
          en: "A real future condition can use si + present and a future result.",
          de: "Bei einer realen Bedingung kann auf si + Präsens eine Folge im Futur folgen.",
          es: "Una condición real puede combinar si + presente con un resultado en futuro.",
        },
      },
      {
        prompt: "Cuando entré, mis compañeros ___ el informe en ese momento.",
        options: ["estaban leyendo", "estarán leyendo", "habrán leído"],
        why: {
          en: "The imperfect progressive describes an action in progress at a past moment.",
          de: "Die Verlaufsform im Imperfekt beschreibt den Vorgang beim Eintreten.",
          es: "El imperfecto progresivo describe una acción en curso en un momento pasado.",
        },
      },
    ],
  },
  B2: {
    en: [
      {
        prompt: "I wish I ___ more time to finish the report now.",
        options: ["had", "have", "will have"],
        why: {
          en: "Wish + past simple can express an unreal present situation.",
          de: "Wish + Simple Past bezeichnet hier einen unerfüllten Wunsch in der Gegenwart.",
          es: "Wish + pasado simple expresa un deseo irreal en el presente.",
        },
      },
      {
        prompt: "By the time we arrived, the meeting ___.",
        options: ["had ended", "has ended", "will end"],
        why: {
          en: "The past perfect places the end before another past event.",
          de: "Das Past Perfect setzt das Ende vor ein anderes vergangenes Ereignis.",
          es: "El pasado perfecto sitúa el final antes de otro hecho pasado.",
        },
      },
    ],
    de: [
      {
        prompt:
          "Die Frist wurde verlängert, ___ alle Standorte Rückmeldung geben können.",
        options: ["damit", "obwohl", "weil doch nicht"],
        why: {
          en: "Damit introduces the purpose of the extension.",
          de: "Damit nennt den Zweck der Fristverlängerung.",
          es: "Damit introduce la finalidad de la prórroga.",
        },
      },
      {
        prompt: "Die Unterlagen müssen bis Freitag geprüft ___.",
        options: ["werden", "worden", "gewesen"],
        why: {
          en: "A modal verb takes a passive infinitive: geprüft werden.",
          de: "Auf das Modalverb folgt der Infinitiv Passiv: geprüft werden.",
          es: "El modal exige el infinitivo pasivo: geprüft werden.",
        },
      },
    ],
    es: [
      {
        prompt: "Si tuviera los datos completos, ___ el informe hoy.",
        options: ["terminaría", "terminaré", "termine"],
        why: {
          en: "The conditional gives the result of a hypothetical si + imperfect subjunctive clause.",
          de: "Der Konditional nennt die Folge der hypothetischen Bedingung.",
          es: "El condicional expresa la consecuencia de si + imperfecto de subjuntivo.",
        },
      },
      {
        prompt:
          "Buscamos a alguien que ___ resumir textos técnicos; aún no tenemos candidato.",
        options: ["sepa", "supo", "sabrá"],
        why: {
          en: "An unspecified person sought by the speaker licenses the subjunctive.",
          de: "Die gesuchte, noch unbestimmte Person verlangt hier den Subjuntivo.",
          es: "El antecedente buscado y todavía no identificado favorece el subjuntivo.",
        },
      },
    ],
  },
  C1: {
    en: [
      {
        prompt: "Not until the second audit ___ the discrepancy.",
        options: ["did they notice", "they did notice", "they noticed"],
        why: {
          en: "A fronted restrictive negative expression triggers subject–auxiliary inversion.",
          de: "Die vorangestellte negative Einschränkung löst eine Inversion aus.",
          es: "Una expresión negativa restrictiva inicial exige inversión.",
        },
      },
      {
        prompt:
          "The board insists that the wording ___ revised before publication.",
        options: ["be", "is being", "was being"],
        why: {
          en: "In this formal directive, the mandative subjunctive uses the base form.",
          de: "In dieser förmlichen Forderung steht der Subjunktiv in der Grundform.",
          es: "En esta exigencia formal el subjuntivo usa la forma base.",
        },
      },
    ],
    de: [
      {
        prompt: "Die Sprecherin erklärte, der Antrag ___ noch in Prüfung.",
        options: ["sei", "seien", "seiest"],
        why: {
          en: "Konjunktiv I marks reported speech. Antrag takes third-person singular.",
          de: "Konjunktiv I kennzeichnet die indirekte Rede. Antrag steht im Singular.",
          es: "El Konjunktiv I marca el discurso referido. Antrag es singular.",
        },
      },
      {
        prompt: "Die Stellungnahme ist binnen ___ einzureichen.",
        options: ["eines Monats", "einen Monat", "eines Monate"],
        why: {
          en: "This formal written construction uses binnen with the genitive singular.",
          de: "In dieser formellen Wendung steht binnen mit dem Genitiv Singular.",
          es: "En esta expresión formal, binnen va con genitivo singular.",
        },
      },
    ],
    es: [
      {
        prompt:
          "De haber conocido la objeción a tiempo, la comisión ___ una respuesta antes de la votación.",
        options: ["habría preparado", "habrá preparado", "prepararía mañana"],
        why: {
          en: "A past counterfactual result takes the compound conditional here.",
          de: "Die irreale Folge in der Vergangenheit steht hier im zusammengesetzten Konditional.",
          es: "La consecuencia contrafactual pasada se expresa aquí con el condicional compuesto.",
        },
      },
      {
        prompt:
          "La medida seguirá vigente hasta que el comité la ___ expresamente.",
        options: ["revoque", "revocó", "revocaba"],
        why: {
          en: "An anticipated future endpoint after hasta que requires the subjunctive.",
          de: "Der noch ausstehende Endpunkt nach hasta que verlangt den Subjuntivo.",
          es: "El límite temporal pendiente tras hasta que exige subjuntivo.",
        },
      },
    ],
  },
  C2: {
    en: [
      {
        prompt:
          "The minutes record an undertaking, ___ a guarantee of delivery.",
        options: ["albeit not", "whereas not", "despite not to be"],
        why: {
          en: "Albeit not qualifies the first noun phrase while withholding the stronger claim.",
          de: "Albeit not schränkt die erste Nominalgruppe ein und nimmt die stärkere Zusage aus.",
          es: "Albeit not matiza el primer sintagma nominal y excluye la afirmación más fuerte.",
        },
      },
      {
        prompt: "Rarely, if ever, ___ such a guarded denial.",
        options: [
          "has the panel issued",
          "the panel has issued",
          "the panel issuing",
        ],
        why: {
          en: "Initial rarely triggers inversion. If ever qualifies the frequency without cancelling that syntax.",
          de: "Vorangestelltes rarely verlangt Inversion. Der Einschub if ever ändert daran nichts.",
          es: "Rarely inicial exige inversión. El inciso if ever no cambia la sintaxis.",
        },
      },
    ],
    de: [
      {
        prompt:
          "Der Ausschuss hat dem Vorhaben, ___ es allein um die Erprobung geht, zugestimmt.",
        options: ["soweit", "seitdem", "wohin"],
        why: {
          en: "Soweit limits the scope of the approval to the trial.",
          de: "Soweit begrenzt die Zustimmung auf den Aspekt der Erprobung.",
          es: "Soweit limita el alcance de la aprobación a la fase de prueba.",
        },
      },
      {
        prompt:
          "Der Bericht legt eine Wirkung nahe, ohne sie damit schon belegt zu ___.",
        options: ["haben", "werden", "sein"],
        why: {
          en: "The perfect infinitive of belegen uses haben and keeps the report as its implied subject.",
          de: "Der Infinitiv Perfekt von belegen lautet belegt haben. Das Subjekt bleibt der Bericht.",
          es: "El infinitivo perfecto de belegen lleva haben y conserva el informe como sujeto implícito.",
        },
      },
    ],
    es: [
      {
        prompt:
          "Por muy convincente que ___ la hipótesis, los datos aún no la confirman.",
        options: ["parezca", "parecerá", "parecería"],
        why: {
          en: "Por muy + adjective + que with the subjunctive concedes a possible degree without endorsing the conclusion.",
          de: "Die konzessive Wendung mit Subjuntivo räumt Überzeugungskraft ein, ohne den Schluss zu bestätigen.",
          es: "El giro concesivo con subjuntivo admite un grado posible sin dar por válida la conclusión.",
        },
      },
      {
        prompt:
          "El dictamen no niega los hechos, ___ cuestiona que de ellos se siga esa conclusión.",
        options: ["sino que", "a fin de que", "por más que"],
        why: {
          en: "Sino que introduces the affirmative clause that corrects the interpretation of the preceding denial.",
          de: "Sino que leitet den bejahenden Satz ein, der den Sinn der vorangehenden Verneinung präzisiert.",
          es: "Sino que introduce la oración afirmativa que rectifica la interpretación de la negación anterior.",
        },
      },
    ],
  },
};
