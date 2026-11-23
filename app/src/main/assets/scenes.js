const conversations = {
  A1: {
    title: {
      en: "At the café",
      de: "Im Café",
      es: "En la cafetería",
    },
    opening: {
      en: "Good morning. What would you like?",
      de: "Guten Morgen. Was darf es sein?",
      es: "Buenos días. ¿Qué le pongo?",
    },
    paths: [
      {
        intent: {
          en: "Ask for a coffee",
          de: "Einen Kaffee bestellen",
          es: "Pedir un café",
        },
        say: {
          en: "A coffee, please.",
          de: "Einen Kaffee, bitte.",
          es: "Un café, por favor.",
        },
        reply: {
          en: "With milk or without?",
          de: "Mit oder ohne Milch?",
          es: "¿Con leche o solo?",
        },
        paths: [
          {
            intent: {
              en: "With milk",
              de: "Mit Milch",
              es: "Con leche",
            },
            say: {
              en: "With a little milk, please.",
              de: "Mit etwas Milch, bitte.",
              es: "Con un poco de leche, por favor.",
            },
            reply: {
              en: "Of course. Here is your coffee.",
              de: "Gerne. Hier ist Ihr Kaffee.",
              es: "Claro. Aquí tiene su café.",
            },
          },
          {
            intent: {
              en: "Without milk",
              de: "Ohne Milch",
              es: "Sin leche",
            },
            say: {
              en: "Without milk, thank you.",
              de: "Ohne Milch, danke.",
              es: "Solo, gracias.",
            },
            reply: {
              en: "One black coffee. Here you are.",
              de: "Ein schwarzer Kaffee. Bitte schön.",
              es: "Un café solo. Aquí tiene.",
            },
          },
        ],
      },
      {
        intent: {
          en: "Order some water",
          de: "Wasser bestellen",
          es: "Pedir agua",
        },
        say: {
          en: "A glass of water, please.",
          de: "Ein Glas Wasser, bitte.",
          es: "Un vaso de agua, por favor.",
        },
        reply: {
          en: "Still or sparkling?",
          de: "Still oder mit Sprudel?",
          es: "¿Con gas o sin gas?",
        },
        paths: [
          {
            intent: {
              en: "Still water",
              de: "Stilles Wasser",
              es: "Agua sin gas",
            },
            say: {
              en: "Still, please.",
              de: "Still, bitte.",
              es: "Sin gas, por favor.",
            },
            reply: {
              en: "Here is your water.",
              de: "Hier ist Ihr Wasser.",
              es: "Aquí tiene el agua.",
            },
          },
          {
            intent: {
              en: "Sparkling water",
              de: "Wasser mit Sprudel",
              es: "Agua con gas",
            },
            say: {
              en: "Sparkling, please.",
              de: "Mit Sprudel, bitte.",
              es: "Con gas, por favor.",
            },
            reply: {
              en: "Certainly. One sparkling water.",
              de: "Gerne. Ein Wasser mit Sprudel.",
              es: "Claro. Un agua con gas.",
            },
          },
        ],
      },
    ],
  },
  A2: {
    title: {
      en: "Changing a booking",
      de: "Eine Buchung ändern",
      es: "Cambiar una reserva",
    },
    opening: {
      en: "How can I help with your booking?",
      de: "Wie kann ich Ihnen bei Ihrer Buchung helfen?",
      es: "¿En qué puedo ayudarle con su reserva?",
    },
    paths: [
      {
        intent: {
          en: "Arrive later",
          de: "Später anreisen",
          es: "Llegar más tarde",
        },
        say: {
          en: "I'll arrive a day later.",
          de: "Ich reise einen Tag später an.",
          es: "Llegaré un día más tarde.",
        },
        reply: {
          en: "On Saturday, then. What time will you arrive?",
          de: "Also am Samstag. Wann kommen Sie an?",
          es: "Entonces el sábado. ¿A qué hora llegará?",
        },
        paths: [
          {
            intent: {
              en: "Give a time",
              de: "Eine Uhrzeit nennen",
              es: "Dar una hora",
            },
            say: {
              en: "I'll arrive at about six.",
              de: "Ich komme gegen sechs Uhr.",
              es: "Llegaré sobre las seis.",
            },
            reply: {
              en: "Good. We'll keep the room for you.",
              de: "Gut. Wir halten das Zimmer für Sie frei.",
              es: "Bien. Le guardaremos la habitación.",
            },
          },
          {
            intent: {
              en: "Ask about the evening",
              de: "Nach dem Abend fragen",
              es: "Preguntar por la noche",
            },
            say: {
              en: "Can I arrive after ten in the evening?",
              de: "Kann ich nach zehn Uhr abends anreisen?",
              es: "¿Puedo llegar después de las diez de la noche?",
            },
            reply: {
              en: "Yes. Ring the bell at the entrance.",
              de: "Ja. Klingeln Sie bitte am Eingang.",
              es: "Sí. Llame al timbre de la entrada.",
            },
          },
        ],
      },
      {
        intent: {
          en: "Stay longer",
          de: "Länger bleiben",
          es: "Quedarse más tiempo",
        },
        say: {
          en: "I'd like to stay one more night.",
          de: "Ich möchte eine Nacht länger bleiben.",
          es: "Me gustaría quedarme una noche más.",
        },
        reply: {
          en: "A single room is free. Would you like it?",
          de: "Ein Einzelzimmer ist frei. Möchten Sie es nehmen?",
          es: "Hay una habitación individual libre. ¿La quiere?",
        },
        paths: [
          {
            intent: {
              en: "Ask the price",
              de: "Nach dem Preis fragen",
              es: "Preguntar el precio",
            },
            say: {
              en: "How much is the extra night?",
              de: "Wie viel kostet die zusätzliche Nacht?",
              es: "¿Cuánto cuesta la noche extra?",
            },
            reply: {
              en: "It costs sixty euros, including breakfast.",
              de: "Sie kostet sechzig Euro mit Frühstück.",
              es: "Cuesta sesenta euros con desayuno.",
            },
          },
          {
            intent: {
              en: "Accept the room",
              de: "Das Zimmer nehmen",
              es: "Aceptar la habitación",
            },
            say: {
              en: "Yes, please book it for me.",
              de: "Ja, bitte buchen Sie es für mich.",
              es: "Sí, resérvemela, por favor.",
            },
            reply: {
              en: "Done. You'll get a confirmation today.",
              de: "Erledigt. Sie erhalten heute eine Bestätigung.",
              es: "Hecho. Recibirá la confirmación hoy.",
            },
          },
        ],
      },
    ],
  },
  B1: {
    title: {
      en: "Handing over a shift",
      de: "Eine Schicht übergeben",
      es: "Entregar el turno",
    },
    opening: {
      en: "The delivery is late. What should I tell the next shift?",
      de: "Die Lieferung verspätet sich. Was sage ich der nächsten Schicht?",
      es: "La entrega se retrasa. ¿Qué le digo al siguiente turno?",
    },
    paths: [
      {
        intent: {
          en: "Find out when it is due",
          de: "Die Ankunftszeit erfragen",
          es: "Preguntar cuándo llegará",
        },
        say: {
          en: "Has the driver given you an estimated arrival time?",
          de: "Hat dir der Fahrer eine ungefähre Ankunftszeit genannt?",
          es: "¿Te ha dicho el conductor a qué hora espera llegar?",
        },
        reply: {
          en: "Around five, but it hasn't been confirmed.",
          de: "Gegen fünf, aber das ist noch nicht bestätigt.",
          es: "Sobre las cinco, pero aún no está confirmado.",
        },
        paths: [
          {
            intent: {
              en: "Pass on the uncertainty",
              de: "Die Unsicherheit weitergeben",
              es: "Comunicar la incertidumbre",
            },
            say: {
              en: "Tell them that five is only an estimate.",
              de: "Sag ihnen, dass fünf Uhr nur eine Schätzung ist.",
              es: "Diles que las cinco es solo una estimación.",
            },
            reply: {
              en: "I'll add that to the handover notes.",
              de: "Das ergänze ich in der Übergabe.",
              es: "Lo añadiré a las notas del relevo.",
            },
          },
          {
            intent: {
              en: "Offer to check",
              de: "Anbieten nachzufragen",
              es: "Ofrecerse a comprobarlo",
            },
            say: {
              en: "I'll call the driver and get back to you.",
              de: "Ich rufe den Fahrer an und melde mich bei dir.",
              es: "Llamaré al conductor y te avisaré.",
            },
            reply: {
              en: "Thanks. I'll wait for your call.",
              de: "Danke. Ich warte auf deinen Anruf.",
              es: "Gracias. Espero tu llamada.",
            },
          },
        ],
      },
      {
        intent: {
          en: "Ask who is waiting",
          de: "Fragen, wer wartet",
          es: "Preguntar quién está esperando",
        },
        say: {
          en: "Which team needs the delivery first?",
          de: "Welches Team braucht die Lieferung zuerst?",
          es: "¿Qué equipo necesita la entrega primero?",
        },
        reply: {
          en: "Packing needs it for the evening shift.",
          de: "Die Verpackung braucht sie für die Spätschicht.",
          es: "El equipo de envasado la necesita para el turno de tarde.",
        },
        paths: [
          {
            intent: {
              en: "Offer to inform the team",
              de: "Das Team informieren",
              es: "Ofrecerse a avisar al equipo",
            },
            say: {
              en: "I'll let the packing team know now.",
              de: "Ich gebe der Verpackung gleich Bescheid.",
              es: "Avisaré ahora al equipo de envasado.",
            },
            reply: {
              en: "Great. Then they can plan their work.",
              de: "Gut. Dann können sie die Arbeit planen.",
              es: "Bien. Así podrán planificar el trabajo.",
            },
          },
          {
            intent: {
              en: "Agree on another update",
              de: "Eine Rückmeldung vereinbaren",
              es: "Acordar otra actualización",
            },
            say: {
              en: "Let's check again in half an hour.",
              de: "Lass uns in einer halben Stunde noch einmal nachfragen.",
              es: "Volvamos a preguntar en media hora.",
            },
            reply: {
              en: "Agreed. I'll put it in my calendar.",
              de: "Einverstanden. Ich trage es in meinen Kalender ein.",
              es: "De acuerdo. Lo anoto en mi calendario.",
            },
          },
        ],
      },
    ],
  },
  B2: {
    title: {
      en: "Negotiating a deadline",
      de: "Eine Frist aushandeln",
      es: "Negociar un plazo",
    },
    opening: {
      en: "Can you send the whole report by Friday?",
      de: "Können Sie den vollständigen Bericht bis Freitag schicken?",
      es: "¿Puede enviar el informe completo antes del viernes?",
    },
    paths: [
      {
        intent: {
          en: "Suggest a partial delivery",
          de: "Eine Teillieferung vorschlagen",
          es: "Proponer una entrega parcial",
        },
        say: {
          en: "We can send the figures first and the analysis on Monday.",
          de: "Wir können erst die Zahlen und am Montag die Auswertung schicken.",
          es: "Podemos enviar primero las cifras y el lunes el análisis.",
        },
        reply: {
          en: "Which figures would be ready on Friday?",
          de: "Welche Zahlen wären am Freitag fertig?",
          es: "¿Qué cifras estarían listas el viernes?",
        },
        paths: [
          {
            intent: {
              en: "Specify what is verified",
              de: "Die geprüften Zahlen benennen",
              es: "Especificar qué se ha verificado",
            },
            say: {
              en: "The totals are verified. The regional breakdown is still open.",
              de: "Die Summen sind geprüft. Die regionale Aufteilung ist noch offen.",
              es: "Los totales están verificados. El desglose regional sigue pendiente.",
            },
            reply: {
              en: "That will be enough for our first meeting.",
              de: "Das reicht für unsere erste Besprechung.",
              es: "Eso bastará para nuestra primera reunión.",
            },
          },
          {
            intent: {
              en: "Ask about priorities",
              de: "Nach Prioritäten fragen",
              es: "Preguntar por las prioridades",
            },
            say: {
              en: "Which figures matter most for your decision?",
              de: "Welche Zahlen sind für Ihre Entscheidung am wichtigsten?",
              es: "¿Qué cifras son prioritarias para su decisión?",
            },
            reply: {
              en: "Start with costs and quantities, please.",
              de: "Beginnen Sie bitte mit Kosten und Mengen.",
              es: "Empiece por los costes y las cantidades, por favor.",
            },
          },
        ],
      },
      {
        intent: {
          en: "Request more time",
          de: "Um mehr Zeit bitten",
          es: "Pedir más tiempo",
        },
        say: {
          en: "Could we move the deadline so that we can check the figures?",
          de: "Könnten wir die Frist verschieben, damit wir die Zahlen prüfen können?",
          es: "¿Podríamos ampliar el plazo para comprobar las cifras?",
        },
        reply: {
          en: "Possibly. What date would you suggest?",
          de: "Möglicherweise. Welchen Termin schlagen Sie vor?",
          es: "Es posible. ¿Qué fecha propone?",
        },
        paths: [
          {
            intent: {
              en: "Propose a firm date",
              de: "Einen festen Termin vorschlagen",
              es: "Proponer una fecha firme",
            },
            say: {
              en: "We can deliver the checked version on Tuesday morning.",
              de: "Die geprüfte Fassung können wir am Dienstagvormittag liefern.",
              es: "Podemos entregar la versión revisada el martes por la mañana.",
            },
            reply: {
              en: "I'll reserve Tuesday afternoon for the review.",
              de: "Ich halte den Dienstagnachmittag für die Durchsicht frei.",
              es: "Reservaré el martes por la tarde para revisarla.",
            },
          },
          {
            intent: {
              en: "Offer a progress update",
              de: "Einen Zwischenstand anbieten",
              es: "Ofrecer un informe de avance",
            },
            say: {
              en: "May I send you an update before we agree on a date?",
              de: "Darf ich Ihnen einen Zwischenstand schicken, bevor wir einen Termin vereinbaren?",
              es: "¿Le puedo enviar un avance antes de acordar una fecha?",
            },
            reply: {
              en: "Yes. Let's decide after the update.",
              de: "Ja. Entscheiden wir nach dem Zwischenstand.",
              es: "Sí. Decidiremos después de leer el avance.",
            },
          },
        ],
      },
    ],
  },
  C1: {
    title: {
      en: "Interpreting a survey",
      de: "Eine Befragung einordnen",
      es: "Interpretar una encuesta",
    },
    opening: {
      en: "Can we conclude that the new timetable caused the improvement?",
      de: "Können wir schließen, dass der neue Zeitplan die Verbesserung bewirkt hat?",
      es: "¿Podemos concluir que el nuevo horario causó la mejora?",
    },
    paths: [
      {
        intent: {
          en: "Separate association from cause",
          de: "Zusammenhang und Ursache trennen",
          es: "Distinguir asociación y causa",
        },
        say: {
          en: "The two coincide, but the survey alone cannot establish causation.",
          de: "Beides fällt zeitlich zusammen, doch die Befragung allein belegt keine Ursache.",
          es: "Ambos hechos coinciden, pero la encuesta por sí sola no demuestra causalidad.",
        },
        reply: {
          en: "How would you phrase the finding?",
          de: "Wie würden Sie den Befund formulieren?",
          es: "¿Cómo formularía el hallazgo?",
        },
        paths: [
          {
            intent: {
              en: "Describe the observation",
              de: "Die Beobachtung beschreiben",
              es: "Describir la observación",
            },
            say: {
              en: "Respondents reported an improvement after the change.",
              de: "Die Befragten berichteten nach der Umstellung von einer Verbesserung.",
              es: "Las personas encuestadas señalaron una mejora tras el cambio.",
            },
            reply: {
              en: "That wording stays close to the evidence.",
              de: "Diese Formulierung bleibt nah am Befund.",
              es: "Esa formulación se ajusta a los datos.",
            },
          },
          {
            intent: {
              en: "Name a possible confounder",
              de: "Einen Störfaktor nennen",
              es: "Señalar un posible factor de confusión",
            },
            say: {
              en: "Staffing changes may also have affected the responses.",
              de: "Auch die veränderte Besetzung könnte die Antworten beeinflusst haben.",
              es: "Los cambios de personal también pudieron influir en las respuestas.",
            },
            reply: {
              en: "We should mention that in the discussion.",
              de: "Das sollten wir in der Diskussion erwähnen.",
              es: "Deberíamos mencionarlo en la discusión.",
            },
          },
        ],
      },
      {
        intent: {
          en: "Question representativeness",
          de: "Die Repräsentativität hinterfragen",
          es: "Cuestionar la representatividad",
        },
        say: {
          en: "Before drawing conclusions, I'd check who took part.",
          de: "Vor einer Schlussfolgerung würde ich prüfen, wer teilgenommen hat.",
          es: "Antes de sacar conclusiones, comprobaría quién participó.",
        },
        reply: {
          en: "The night shift was scarcely represented.",
          de: "Die Nachtschicht war kaum vertreten.",
          es: "El turno de noche apenas estaba representado.",
        },
        paths: [
          {
            intent: {
              en: "Limit the scope",
              de: "Die Aussage eingrenzen",
              es: "Limitar el alcance",
            },
            say: {
              en: "Then we should limit our statement to the respondents.",
              de: "Dann sollten wir unsere Aussage auf die Befragten beschränken.",
              es: "Entonces deberíamos limitar la afirmación a quienes respondieron.",
            },
            reply: {
              en: "I'll revise the summary accordingly.",
              de: "Ich passe die Zusammenfassung entsprechend an.",
              es: "Revisaré el resumen en ese sentido.",
            },
          },
          {
            intent: {
              en: "Suggest further evidence",
              de: "Weitere Daten vorschlagen",
              es: "Proponer más datos",
            },
            say: {
              en: "A follow-up with the night shift could close that gap.",
              de: "Eine Nachbefragung der Nachtschicht könnte diese Lücke schließen.",
              es: "Una consulta posterior al turno de noche podría cubrir esa laguna.",
            },
            reply: {
              en: "Let's include that in the next round.",
              de: "Nehmen wir das in die nächste Runde auf.",
              es: "Incluyámoslo en la próxima ronda.",
            },
          },
        ],
      },
    ],
  },
  C2: {
    title: {
      en: "Editing a public statement",
      de: "Eine Stellungnahme redigieren",
      es: "Editar una declaración pública",
    },
    opening: {
      en: "The draft says the board guaranteed delivery. Do the minutes support that?",
      de: "Im Entwurf steht, der Vorstand habe die Lieferung garantiert. Gibt das Protokoll das her?",
      es: "El borrador dice que la dirección garantizó la entrega. ¿Lo respalda el acta?",
    },
    paths: [
      {
        intent: {
          en: "Qualify the commitment",
          de: "Die Zusage einschränken",
          es: "Matizar el compromiso",
        },
        say: {
          en: "The minutes record an intention subject to funding, which is a narrower commitment.",
          de: "Das Protokoll hält eine Absicht unter Finanzierungsvorbehalt fest. Das ist eine engere Zusage.",
          es: "El acta recoge una intención condicionada a la financiación, un compromiso de menor alcance.",
        },
        reply: {
          en: "Can we keep the wording concise without losing the condition?",
          de: "Geht es knapper, ohne den Vorbehalt zu verlieren?",
          es: "¿Podemos abreviar sin perder la condición?",
        },
        paths: [
          {
            intent: {
              en: "Offer precise wording",
              de: "Eine präzise Fassung anbieten",
              es: "Ofrecer una formulación precisa",
            },
            say: {
              en: "The board intends to deliver, provided funding is secured.",
              de: "Der Vorstand beabsichtigt die Lieferung, sofern die Finanzierung gesichert ist.",
              es: "La dirección prevé efectuar la entrega siempre que se asegure la financiación.",
            },
            reply: {
              en: "That preserves the condition explicitly.",
              de: "Damit bleibt der Vorbehalt ausdrücklich erhalten.",
              es: "Así se conserva expresamente la condición.",
            },
          },
          {
            intent: {
              en: "Attribute the statement",
              de: "Die Aussage zuordnen",
              es: "Atribuir la afirmación",
            },
            say: {
              en: "According to the minutes, delivery remains contingent on funding.",
              de: "Dem Protokoll zufolge steht die Lieferung weiterhin unter Finanzierungsvorbehalt.",
              es: "Según el acta, la entrega sigue supeditada a la financiación.",
            },
            reply: {
              en: "That makes the source clear as well.",
              de: "So ist auch die Quelle klar.",
              es: "Así también queda clara la fuente.",
            },
          },
        ],
      },
      {
        intent: {
          en: "Address conflicting accounts",
          de: "Widersprüchliche Aussagen ansprechen",
          es: "Abordar las versiones contradictorias",
        },
        say: {
          en: "One witness recalls a promise, whereas the written record is conditional.",
          de: "Ein Zeuge erinnert sich an ein Versprechen, während das Protokoll einen Vorbehalt enthält.",
          es: "Un testigo recuerda una promesa, mientras que el acta recoge una condición.",
        },
        reply: {
          en: "How should the statement deal with that discrepancy?",
          de: "Wie soll die Stellungnahme mit dieser Abweichung umgehen?",
          es: "¿Cómo debería tratar la declaración esa discrepancia?",
        },
        paths: [
          {
            intent: {
              en: "Preserve both accounts",
              de: "Beide Darstellungen erhalten",
              es: "Conservar ambas versiones",
            },
            say: {
              en: "Present the accounts separately and identify the source of each.",
              de: "Stellen wir die Aussagen getrennt dar und benennen jeweils die Quelle.",
              es: "Presentemos las versiones por separado e identifiquemos la fuente de cada una.",
            },
            reply: {
              en: "That lets readers see where the accounts diverge.",
              de: "So erkennen die Leser, worin die Darstellungen auseinandergehen.",
              es: "Así podrá verse en qué difieren las versiones.",
            },
          },
          {
            intent: {
              en: "Defer the disputed claim",
              de: "Die strittige Aussage zurückstellen",
              es: "Aplazar la afirmación controvertida",
            },
            say: {
              en: "Until the wording is verified, I would omit the disputed claim.",
              de: "Bis der Wortlaut geklärt ist, würde ich die strittige Aussage weglassen.",
              es: "Hasta verificar las palabras exactas, omitiría la afirmación controvertida.",
            },
            reply: {
              en: "Agreed. We'll flag it for verification.",
              de: "Einverstanden. Wir kennzeichnen sie zur Prüfung.",
              es: "De acuerdo. La marcaremos para su verificación.",
            },
          },
        ],
      },
    ],
  },
};
