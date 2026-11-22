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
