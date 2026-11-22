const units = [
  {
    level: "A1",
    title: {
      en: "At the station",
      de: "Am Bahnhof",
      es: "En la estación",
    },
    text: {
      en: "I am at the station. My train leaves at nine. I have a ticket, but I need the platform number.",
      de: "Ich bin am Bahnhof. Mein Zug fährt um neun Uhr ab. Ich habe eine Fahrkarte, aber ich brauche die Gleisnummer.",
      es: "Estoy en la estación. Mi tren sale a las nueve. Tengo un billete, pero necesito el número de la vía.",
    },
    yes: {
      en: "The traveller needs information.",
      de: "Die Person braucht eine Auskunft.",
      es: "La persona necesita información.",
    },
    no: {
      en: "The traveller needs a ticket.",
      de: "Die Person braucht eine Fahrkarte.",
      es: "La persona necesita un billete.",
    },
    translation: {
      en: ["I have a ticket."],
      de: ["Ich habe eine Fahrkarte.", "Ich habe ein Ticket."],
      es: ["Tengo un billete.", "Tengo un boleto."],
    },
    prompt: {
      en: "Tell a friend where you are going and when.",
      de: "Schreib einer Freundin, wohin und wann du fährst.",
      es: "Dile a una amiga adónde vas y cuándo.",
    },
    model: {
      en: "I am going to Berlin at nine. I have my ticket.",
      de: "Ich fahre um neun Uhr nach Berlin. Ich habe meine Fahrkarte.",
      es: "Voy a Berlín a las nueve. Tengo mi billete.",
    },
    words: {
      en: ["the station", "the train", "the ticket", "the platform"],
      de: ["der Bahnhof", "der Zug", "die Fahrkarte", "der Bahnsteig"],
      es: ["la estación", "el tren", "el billete", "el andén"],
    },
  },
  {
    level: "A1",
    title: {
      en: "Coffee for two",
      de: "Kaffee für zwei",
      es: "Café para dos",
    },
    text: {
      en: "Eva orders two coffees and a glass of water. Her friend wants milk. Eva drinks her coffee without milk.",
      de: "Eva bestellt zwei Kaffee und ein Glas Wasser. Ihre Freundin möchte Milch. Eva trinkt ihren Kaffee ohne Milch.",
      es: "Eva pide dos cafés y un vaso de agua. Su amiga quiere leche. Eva toma el café sin leche.",
    },
    yes: {
      en: "Her friend wants milk.",
      de: "Ihre Freundin möchte Milch.",
      es: "Su amiga quiere leche.",
    },
    no: {
      en: "Eva orders two glasses of water.",
      de: "Eva bestellt zwei Gläser Wasser.",
      es: "Eva pide dos vasos de agua.",
    },
    translation: {
      en: ["A glass of water, please."],
      de: ["Ein Glas Wasser, bitte."],
      es: ["Un vaso de agua, por favor."],
    },
    prompt: {
      en: "Order two things politely.",
      de: "Bestelle höflich zwei Dinge.",
      es: "Pide dos cosas con educación.",
    },
    model: {
      en: "A coffee and a glass of water, please. Thank you.",
      de: "Einen Kaffee und ein Glas Wasser, bitte. Danke.",
      es: "Un café y un vaso de agua, por favor. Gracias.",
    },
    words: {
      en: ["the coffee", "the water", "the milk", "without"],
      de: ["der Kaffee", "das Wasser", "die Milch", "ohne"],
      es: ["el café", "el agua", "la leche", "sin"],
    },
  },
  {
    level: "A1",
    title: {
      en: "Meet my neighbour",
      de: "Meine Nachbarin",
      es: "Mi vecina",
    },
    text: {
      en: "My name is Leo. I live on the first floor. My neighbour Ana lives upstairs. We speak German together.",
      de: "Ich heiße Leo. Ich wohne im ersten Stock. Meine Nachbarin Ana wohnt über mir. Wir sprechen zusammen Deutsch.",
      es: "Me llamo Leo. Vivo en el primer piso. Mi vecina Ana vive en el piso de arriba. Hablamos alemán juntos.",
    },
    yes: {
      en: "Ana lives above Leo.",
      de: "Ana wohnt über Leo.",
      es: "Ana vive encima de Leo.",
    },
    no: {
      en: "Leo lives alone in the building.",
      de: "Leo wohnt allein im Haus.",
      es: "Leo vive solo en el edificio.",
    },
    translation: {
      en: ["We speak German."],
      de: ["Wir sprechen Deutsch."],
      es: ["Hablamos alemán."],
    },
    prompt: {
      en: "Introduce yourself to a neighbour in two sentences.",
      de: "Stell dich in zwei Sätzen bei einer Nachbarin vor.",
      es: "Preséntate a una vecina en dos frases.",
    },
    model: {
      en: "My name is Nora. I live on the second floor.",
      de: "Ich heiße Nora. Ich wohne im zweiten Stock.",
      es: "Me llamo Nora. Vivo en el segundo piso.",
    },
    words: {
      en: ["the name", "the neighbour (female)", "upstairs", "together"],
      de: ["der Name", "die Nachbarin", "oben", "zusammen"],
      es: ["el nombre", "la vecina", "arriba", "juntos"],
    },
  },
  {
    level: "A1",
    title: {
      en: "A shopping list",
      de: "Ein Einkaufszettel",
      es: "Una lista de la compra",
    },
    text: {
      en: "We have bread at home. I buy three apples and cheese. The shop closes at six.",
      de: "Wir haben Brot zu Hause. Ich kaufe drei Äpfel und Käse. Der Laden schließt um sechs Uhr.",
      es: "Tenemos pan en casa. Compro tres manzanas y queso. La tienda cierra a las seis.",
    },
    yes: {
      en: "There is already bread at home.",
      de: "Zu Hause gibt es schon Brot.",
      es: "Ya hay pan en casa.",
    },
    no: {
      en: "The shop opens at six.",
      de: "Der Laden öffnet um sechs Uhr.",
      es: "La tienda abre a las seis.",
    },
    translation: {
      en: ["I buy three apples."],
      de: ["Ich kaufe drei Äpfel."],
      es: ["Compro tres manzanas."],
    },
    prompt: {
      en: "Write what you have and what you need.",
      de: "Schreib, was du hast und was du brauchst.",
      es: "Escribe qué tienes y qué necesitas.",
    },
    model: {
      en: "I have bread. I need milk and apples.",
      de: "Ich habe Brot. Ich brauche Milch und Äpfel.",
      es: "Tengo pan. Necesito leche y manzanas.",
    },
    words: {
      en: ["the bread", "the apple", "the cheese", "the shop"],
      de: ["das Brot", "der Apfel", "der Käse", "der Laden"],
      es: ["el pan", "la manzana", "el queso", "la tienda"],
    },
  },
  {
    level: "A2",
    title: {
      en: "A change of plan",
      de: "Neue Pläne",
      es: "Cambio de planes",
    },
    text: {
      en: "We wanted to meet on Tuesday. My sister is visiting that evening, so I suggest Thursday instead. The café and the time stay the same.",
      de: "Wir wollten uns am Dienstag treffen. An dem Abend kommt meine Schwester zu Besuch. Deshalb schlage ich Donnerstag vor. Das Café und die Uhrzeit bleiben gleich.",
      es: "Queríamos quedar el martes. Mi hermana viene de visita esa noche, así que propongo el jueves. El café y la hora siguen siendo los mismos.",
    },
    yes: {
      en: "Only the day changes.",
      de: "Nur der Tag ändert sich.",
      es: "Solo cambia el día.",
    },
    no: {
      en: "They need a different café.",
      de: "Sie brauchen ein anderes Café.",
      es: "Necesitan otro café.",
    },
    translation: {
      en: ["Does Thursday work for you?"],
      de: ["Passt dir Donnerstag?", "Hast du am Donnerstag Zeit?"],
      es: ["¿Te viene bien el jueves?", "¿Te va bien el jueves?"],
    },
    prompt: {
      en: "Move an appointment. Give a reason and a new day.",
      de: "Verlege einen Termin. Nenne einen Grund und einen neuen Tag.",
      es: "Cambia una cita. Da un motivo y propone otro día.",
    },
    model: {
      en: "I am working on Tuesday. Does Friday afternoon work for you?",
      de: "Am Dienstag arbeite ich. Passt dir Freitagnachmittag?",
      es: "El martes trabajo. ¿Te viene bien el viernes por la tarde?",
    },
    words: {
      en: ["the appointment", "Thursday", "the visit", "instead"],
      de: ["der Termin", "Donnerstag", "der Besuch", "stattdessen"],
      es: ["la cita", "el jueves", "la visita", "en su lugar"],
    },
  },
  {
    level: "A2",
    title: {
      en: "The lost bag",
      de: "Die verlorene Tasche",
      es: "La bolsa perdida",
    },
    text: {
      en: "Yesterday I left my blue bag on the bus. This morning I called the office. Someone found it under a seat. I can collect it after lunch.",
      de: "Gestern habe ich meine blaue Tasche im Bus vergessen. Heute Morgen habe ich im Büro angerufen. Jemand hat sie unter einem Sitz gefunden. Nach dem Mittagessen kann ich sie abholen.",
      es: "Ayer me dejé la bolsa azul en el autobús. Esta mañana llamé a la oficina. Alguien la encontró debajo de un asiento. Puedo recogerla después de comer.",
    },
    yes: {
      en: "The bag is ready for collection.",
      de: "Die Tasche kann abgeholt werden.",
      es: "La bolsa ya se puede recoger.",
    },
    no: {
      en: "The bag is still missing.",
      de: "Die Tasche ist noch verschwunden.",
      es: "La bolsa sigue perdida.",
    },
    translation: {
      en: ["I lost my bag yesterday."],
      de: [
        "Ich habe gestern meine Tasche verloren.",
        "Gestern habe ich meine Tasche verloren.",
      ],
      es: ["Ayer perdí mi bolsa.", "Perdí mi bolsa ayer."],
    },
    prompt: {
      en: "Describe a lost item and where you last saw it.",
      de: "Beschreibe einen verlorenen Gegenstand und wo du ihn zuletzt gesehen hast.",
      es: "Describe un objeto perdido y dónde lo viste por última vez.",
    },
    model: {
      en: "I lost a red scarf. It was on the seat next to me.",
      de: "Ich habe einen roten Schal verloren. Er lag auf dem Sitz neben mir.",
      es: "Perdí una bufanda roja. Estaba en el asiento de al lado.",
    },
    words: {
      en: ["the bag", "yesterday", "under", "to collect"],
      de: ["die Tasche", "gestern", "unter", "abholen"],
      es: ["la bolsa", "ayer", "debajo de", "recoger"],
    },
  },
  {
    level: "A2",
    title: {
      en: "At the hotel",
      de: "Im Hotel",
      es: "En el hotel",
    },
    text: {
      en: "Our room looks onto the street. At night it is quite loud. The receptionist offers us a quieter room from tomorrow. Tonight we will stay here.",
      de: "Unser Zimmer liegt zur Straße. Nachts ist es ziemlich laut. Die Mitarbeiterin an der Rezeption bietet uns ab morgen ein ruhigeres Zimmer an. Heute Nacht bleiben wir hier.",
      es: "Nuestra habitación da a la calle. De noche hay bastante ruido. La recepcionista nos ofrece una habitación más tranquila a partir de mañana. Esta noche nos quedamos aquí.",
    },
    yes: {
      en: "They can change rooms tomorrow.",
      de: "Sie können morgen das Zimmer wechseln.",
      es: "Pueden cambiar de habitación mañana.",
    },
    no: {
      en: "They are leaving the hotel tonight.",
      de: "Sie verlassen heute Nacht das Hotel.",
      es: "Esta noche se van del hotel.",
    },
    translation: {
      en: ["Our room is very loud."],
      de: ["Unser Zimmer ist sehr laut."],
      es: ["Nuestra habitación es muy ruidosa."],
    },
    prompt: {
      en: "Ask for a change and explain why.",
      de: "Bitte um eine Änderung und begründe deinen Wunsch.",
      es: "Pide un cambio y explica por qué.",
    },
    model: {
      en: "Could we have a quieter room? Our window looks onto the street.",
      de: "Könnten wir ein ruhigeres Zimmer bekommen? Unser Fenster geht zur Straße.",
      es: "¿Podríamos tener una habitación más tranquila? Nuestra ventana da a la calle.",
    },
    words: {
      en: ["the room", "noisy", "quieter", "the window"],
      de: ["das Zimmer", "laut", "ruhiger", "das Fenster"],
      es: ["la habitación", "ruidoso", "más tranquilo", "la ventana"],
    },
  },
  {
    level: "A2",
    title: {
      en: "Giving directions",
      de: "Den Weg erklären",
      es: "Dar indicaciones",
    },
    text: {
      en: "From the library, turn left at the traffic lights. Go past the bank. The sports centre is opposite the park, just before the bridge.",
      de: "Biege von der Bibliothek aus an der Ampel links ab. Geh an der Bank vorbei. Das Sportzentrum liegt gegenüber dem Park, kurz vor der Brücke.",
      es: "Desde la biblioteca, gira a la izquierda en el semáforo. Pasa por delante del banco. El polideportivo está enfrente del parque, justo antes del puente.",
    },
    yes: {
      en: "You reach the sports centre before the bridge.",
      de: "Du erreichst das Sportzentrum vor der Brücke.",
      es: "Llegas al polideportivo antes del puente.",
    },
    no: {
      en: "You have to cross the bridge.",
      de: "Du musst die Brücke überqueren.",
      es: "Tienes que cruzar el puente.",
    },
    translation: {
      en: ["Turn left at the traffic lights."],
      de: ["Biege an der Ampel links ab.", "Bieg an der Ampel links ab."],
      es: ["Gira a la izquierda en el semáforo."],
    },
    prompt: {
      en: "Give someone directions in three steps.",
      de: "Beschreibe jemandem einen Weg in drei Schritten.",
      es: "Indica un camino en tres pasos.",
    },
    model: {
      en: "Go straight on. Turn right at the park. The café is on the left.",
      de: "Geh geradeaus. Biege am Park rechts ab. Das Café ist links.",
      es: "Sigue recto. Gira a la derecha en el parque. El café está a la izquierda.",
    },
    words: {
      en: ["the bridge", "opposite", "straight ahead", "the traffic light"],
      de: ["die Brücke", "gegenüber", "geradeaus", "die Ampel"],
      es: ["el puente", "enfrente de", "todo recto", "el semáforo"],
    },
  },
  {
    level: "B1",
    title: {
      en: "A shift handover",
      de: "Die Schichtübergabe",
      es: "El cambio de turno",
    },
    text: {
      en: "The morning team labelled the boxes but ran out of time to update the list. Mara leaves a message so that the evening team can finish the job without checking every box again.",
      de: "Das Frühteam hat die Kartons beschriftet, hatte aber keine Zeit mehr, die Liste zu aktualisieren. Mara hinterlässt eine Nachricht, damit das Spätteam die Arbeit beenden kann, ohne jeden Karton erneut zu prüfen.",
      es: "El equipo de la mañana etiquetó las cajas, pero no le dio tiempo a actualizar la lista. Mara deja un mensaje para que el equipo de la tarde termine sin tener que revisar cada caja otra vez.",
    },
    yes: {
      en: "The list still needs updating.",
      de: "Die Liste muss noch aktualisiert werden.",
      es: "Todavía hay que actualizar la lista.",
    },
    no: {
      en: "The evening team must label all the boxes.",
      de: "Das Spätteam muss alle Kartons beschriften.",
      es: "El equipo de la tarde tiene que etiquetar todas las cajas.",
    },
    translation: {
      en: ["The list is not ready yet."],
      de: ["Die Liste ist noch nicht fertig."],
      es: ["La lista todavía no está lista.", "La lista aún no está lista."],
    },
    prompt: {
      en: "Write a handover with a completed task and a next step.",
      de: "Schreib eine Übergabe mit einer erledigten Aufgabe und einem nächsten Schritt.",
      es: "Redacta una nota de relevo con una tarea terminada y el siguiente paso.",
    },
    model: {
      en: "I checked the delivery this morning. Please enter the quantities before the next truck arrives.",
      de: "Ich habe heute Morgen die Lieferung geprüft. Bitte trag die Mengen ein, bevor der nächste Lkw kommt.",
      es: "Esta mañana revisé la entrega. Por favor, anota las cantidades antes de que llegue el siguiente camión.",
    },
    words: {
      en: ["the shift", "to label", "the quantity", "to update"],
      de: ["die Schicht", "beschriften", "die Menge", "aktualisieren"],
      es: ["el turno", "etiquetar", "la cantidad", "actualizar"],
    },
  },
  {
    level: "B1",
    title: {
      en: "A flat for summer",
      de: "Eine Wohnung für den Sommer",
      es: "Un piso para el verano",
    },
    text: {
      en: "The cheaper flat is further from the station. Since I work from home three days a week, the distance matters less than the quiet bedroom. I would like to visit both flats before deciding.",
      de: "Die günstigere Wohnung liegt weiter vom Bahnhof entfernt. Weil ich drei Tage pro Woche von zu Hause aus arbeite, ist die Entfernung weniger wichtig als das ruhige Schlafzimmer. Vor meiner Entscheidung möchte ich beide Wohnungen besichtigen.",
      es: "El piso más barato está más lejos de la estación. Como trabajo en casa tres días por semana, la distancia me importa menos que tener un dormitorio tranquilo. Quiero visitar los dos pisos antes de decidirme.",
    },
    yes: {
      en: "Quiet matters more than the commute.",
      de: "Ruhe ist wichtiger als der Arbeitsweg.",
      es: "La tranquilidad importa más que el trayecto.",
    },
    no: {
      en: "The writer has already signed a contract.",
      de: "Die Person hat bereits einen Vertrag unterschrieben.",
      es: "La persona ya ha firmado un contrato.",
    },
    translation: {
      en: ["I would like to visit both flats."],
      de: ["Ich möchte beide Wohnungen besichtigen."],
      es: ["Me gustaría visitar los dos pisos."],
    },
    prompt: {
      en: "Compare two places to live and explain your preference.",
      de: "Vergleiche zwei Wohnorte und begründe deine Wahl.",
      es: "Compara dos lugares para vivir y justifica tu preferencia.",
    },
    model: {
      en: "The centre is convenient, but I prefer the village because I can cycle to the lake.",
      de: "Das Zentrum ist praktisch, aber ich ziehe das Dorf vor, weil ich mit dem Rad zum See fahren kann.",
      es: "El centro es práctico, pero prefiero el pueblo porque puedo ir al lago en bicicleta.",
    },
    words: {
      en: ["the rent", "the distance", "to compare", "the contract"],
      de: ["die Miete", "die Entfernung", "vergleichen", "der Vertrag"],
      es: ["el alquiler", "la distancia", "comparar", "el contrato"],
    },
  },
  {
    level: "B1",
    title: {
      en: "Learning together",
      de: "Gemeinsam lernen",
      es: "Aprender juntos",
    },
    text: {
      en: "Our group used to meet every Friday. When two members changed jobs, attendance fell. We tried shorter meetings online. More people now take part, although some miss the conversations afterwards.",
      de: "Unsere Gruppe traf sich früher jeden Freitag. Als zwei Mitglieder die Stelle wechselten, sank die Teilnahme. Wir probierten kürzere Online-Treffen aus. Jetzt machen mehr Leute mit, obwohl manche die Gespräche danach vermissen.",
      es: "Nuestro grupo se reunía todos los viernes. Cuando dos miembros cambiaron de trabajo, bajó la asistencia. Probamos reuniones más cortas por internet. Ahora participa más gente, aunque algunos echan de menos las charlas de después.",
    },
    yes: {
      en: "The new format has an advantage and a drawback.",
      de: "Das neue Format hat einen Vorteil und einen Nachteil.",
      es: "El nuevo formato tiene una ventaja y un inconveniente.",
    },
    no: {
      en: "The group stopped meeting after two people left.",
      de: "Die Treffen endeten, nachdem zwei Personen gegangen waren.",
      es: "El grupo dejó de reunirse después de que dos personas se marcharan.",
    },
    translation: {
      en: ["More people now take part."],
      de: ["Jetzt nehmen mehr Leute teil.", "Jetzt machen mehr Leute mit."],
      es: ["Ahora participa más gente.", "Ahora participan más personas."],
    },
    prompt: {
      en: "Describe a change in your routine and one consequence.",
      de: "Beschreibe eine veränderte Gewohnheit und eine Folge.",
      es: "Describe un cambio de rutina y una consecuencia.",
    },
    model: {
      en: "I study on the train now. I practise more often, although it is sometimes noisy.",
      de: "Jetzt lerne ich im Zug. Ich übe häufiger, obwohl es manchmal laut ist.",
      es: "Ahora estudio en el tren. Practico más a menudo, aunque a veces hay ruido.",
    },
    words: {
      en: ["the member", "attendance", "although", "to miss something"],
      de: ["das Mitglied", "die Teilnahme", "obwohl", "etwas vermissen"],
      es: ["el miembro", "la asistencia", "aunque", "echar algo de menos"],
    },
  },
  {
    level: "B1",
    title: {
      en: "A delayed order",
      de: "Eine verspätete Bestellung",
      es: "Un pedido con retraso",
    },
    text: {
      en: "I ordered a lamp two weeks ago. The shop promised delivery by Monday, but the parcel has not arrived. I would prefer a new delivery date because the lamp is a gift.",
      de: "Ich habe vor zwei Wochen eine Lampe bestellt. Das Geschäft hat die Lieferung bis Montag zugesagt, aber das Paket ist noch nicht angekommen. Da die Lampe ein Geschenk ist, hätte ich gern einen neuen Liefertermin.",
      es: "Pedí una lámpara hace dos semanas. La tienda prometió entregarla a más tardar el lunes, pero el paquete no ha llegado. Preferiría tener una nueva fecha de entrega porque la lámpara es un regalo.",
    },
    yes: {
      en: "The customer asks when the parcel will arrive.",
      de: "Die Person fragt nach dem Liefertermin.",
      es: "La persona pregunta cuándo llegará el paquete.",
    },
    no: {
      en: "The customer asks for a different lamp.",
      de: "Die Person bittet um eine andere Lampe.",
      es: "La persona pide otra lámpara.",
    },
    translation: {
      en: ["The parcel has not arrived yet."],
      de: ["Das Paket ist noch nicht angekommen."],
      es: [
        "El paquete todavía no ha llegado.",
        "El paquete aún no ha llegado.",
      ],
    },
    prompt: {
      en: "Write a polite request giving the date and your desired solution.",
      de: "Formuliere eine höfliche Anfrage mit Datum und gewünschter Lösung.",
      es: "Escribe una petición cortés con la fecha y la solución que deseas.",
    },
    model: {
      en: "I ordered the lamp on Monday. Could you tell me when I can expect it?",
      de: "Ich habe die Lampe am Montag bestellt. Könnten Sie mir sagen, wann ich mit ihr rechnen kann?",
      es: "Pedí la lámpara el lunes. ¿Podrían indicarme cuándo la recibiré?",
    },
    words: {
      en: ["the order", "the parcel", "the delay", "the delivery"],
      de: ["die Bestellung", "das Paket", "die Verspätung", "die Lieferung"],
      es: ["el pedido", "el paquete", "el retraso", "la entrega"],
    },
  },
  {
    level: "B2",
    title: {
      en: "Reading a survey",
      de: "Eine Umfrage auswerten",
      es: "Interpretar una encuesta",
    },
    text: {
      en: "Half of the online respondents supported a later opening time. The library called this a clear mandate. Yet the questionnaire reached mainly evening users, while many morning visitors never saw it. A second survey at the entrance could test whether the result holds.",
      de: "Die Hälfte der online Befragten sprach sich für eine spätere Öffnung aus. Die Bibliothek sah darin einen klaren Auftrag. Allerdings erreichte der Fragebogen vor allem Abendgäste. Viele Gäste am Morgen bekamen ihn nie zu Gesicht. Eine zweite Befragung am Eingang könnte zeigen, ob das Ergebnis Bestand hat.",
      es: "La mitad de quienes respondieron en línea apoyó abrir más tarde. La biblioteca lo interpretó como un mandato claro. Sin embargo, el cuestionario llegó sobre todo a usuarios de la tarde y muchos visitantes matutinos nunca lo vieron. Otra encuesta en la entrada permitiría comprobar el resultado.",
    },
    yes: {
      en: "The sample may underrepresent morning visitors.",
      de: "Morgengäste könnten in der Stichprobe unterrepräsentiert sein.",
      es: "Puede que la muestra represente poco a quienes acuden por la mañana.",
    },
    no: {
      en: "Half of all library users support the change.",
      de: "Die Hälfte aller Bibliotheksgäste unterstützt die Änderung.",
      es: "La mitad de todos los usuarios de la biblioteca apoya el cambio.",
    },
    translation: {
      en: ["The result depends on who was asked."],
      de: ["Das Ergebnis hängt davon ab, wer befragt wurde."],
      es: ["El resultado depende de a quién se preguntó."],
    },
    prompt: {
      en: "Explain one limitation and propose a way to check the finding.",
      de: "Erkläre eine Einschränkung und schlage eine Überprüfung vor.",
      es: "Explica una limitación y propone una forma de comprobar el resultado.",
    },
    model: {
      en: "Evening users answered more often. A week of interviews at different times could reveal other preferences.",
      de: "Abendgäste antworteten häufiger. Gespräche zu verschiedenen Tageszeiten könnten weitere Präferenzen zeigen.",
      es: "Los usuarios de la tarde respondieron más. Una semana de entrevistas a distintas horas podría revelar otras preferencias.",
    },
    words: {
      en: ["the sample", "the finding", "to support", "representative"],
      de: ["die Stichprobe", "der Befund", "befürworten", "repräsentativ"],
      es: ["la muestra", "el hallazgo", "apoyar", "representativo"],
    },
  },
  {
    level: "B2",
    title: {
      en: "Negotiating a deadline",
      de: "Eine Frist aushandeln",
      es: "Negociar un plazo",
    },
    text: {
      en: "The client needs a draft on Friday for an internal discussion. We can deliver the diagrams then, provided the figures arrive by Wednesday. A polished report would take another week. Agreeing on what counts as a draft would prevent disappointment.",
      de: "Der Kunde braucht am Freitag einen Entwurf für eine interne Besprechung. Die Diagramme können wir bis dahin liefern, sofern die Zahlen bis Mittwoch vorliegen. Ein fertiger Bericht würde eine weitere Woche dauern. Eine gemeinsame Definition des Entwurfs würde Enttäuschungen vorbeugen.",
      es: "El cliente necesita un borrador el viernes para una reunión interna. Podemos enviar los gráficos entonces, siempre que las cifras lleguen el miércoles a más tardar. Un informe definitivo llevaría otra semana. Acordar qué se entiende por borrador evitaría decepciones.",
    },
    yes: {
      en: "The offer depends on timely information.",
      de: "Das Angebot setzt rechtzeitige Informationen voraus.",
      es: "La oferta depende de recibir los datos a tiempo.",
    },
    no: {
      en: "A final report is guaranteed for Friday.",
      de: "Ein fertiger Bericht ist für Freitag garantiert.",
      es: "Se garantiza el informe definitivo para el viernes.",
    },
    translation: {
      en: ["We can deliver if the figures arrive on time."],
      de: ["Wir können liefern, wenn die Zahlen rechtzeitig eintreffen."],
      es: [
        "Podemos entregar si las cifras llegan a tiempo.",
        "Podemos hacer la entrega si las cifras llegan a tiempo.",
      ],
    },
    prompt: {
      en: "Propose a compromise with a condition and a fallback.",
      de: "Schlage einen Kompromiss mit einer Bedingung und einer Ausweichlösung vor.",
      es: "Propón un acuerdo con una condición y una alternativa.",
    },
    model: {
      en: "If the figures arrive tomorrow, the draft will include tables. Otherwise I will send the outline first.",
      de: "Wenn die Zahlen morgen vorliegen, enthält der Entwurf Tabellen. Andernfalls schicke ich zuerst die Gliederung.",
      es: "Si las cifras llegan mañana, el borrador incluirá tablas. En caso contrario, enviaré primero el esquema.",
    },
    words: {
      en: ["the deadline", "the draft", "provided that", "otherwise"],
      de: ["die Frist", "der Entwurf", "sofern", "andernfalls"],
      es: ["el plazo", "el borrador", "siempre que", "en caso contrario"],
    },
  },
  {
    level: "B2",
    title: {
      en: "A public garden",
      de: "Ein öffentlicher Garten",
      es: "Un huerto público",
    },
    text: {
      en: "Residents want a garden on an unused plot. Some neighbours welcome the idea but worry about noise on Sundays. A trial lasting one season, with fixed opening hours, might answer both concerns before the council commits funds.",
      de: "Die Anwohner wünschen sich einen Garten auf einer ungenutzten Fläche. Einige begrüßen die Idee, befürchten aber sonntags Lärm. Ein Versuch über eine Saison mit festen Öffnungszeiten könnte beide Anliegen aufgreifen, bevor der Gemeinderat Mittel zusagt.",
      es: "Los residentes quieren un huerto en un solar sin uso. Algunos vecinos ven bien la idea, pero les preocupa el ruido los domingos. Una prueba de una temporada con horario fijo podría atender ambas inquietudes antes de que el ayuntamiento comprometa fondos.",
    },
    yes: {
      en: "A trial could inform the funding decision.",
      de: "Ein Versuch könnte die Finanzierungsentscheidung erleichtern.",
      es: "La prueba podría orientar la decisión sobre la financiación.",
    },
    no: {
      en: "The neighbours have rejected any use of the plot.",
      de: "Die Nachbarn lehnen jede Nutzung der Fläche ab.",
      es: "Los vecinos han rechazado cualquier uso del solar.",
    },
    translation: {
      en: ["The trial would last one season."],
      de: ["Der Versuch würde eine Saison dauern."],
      es: ["La prueba duraría una temporada."],
    },
    prompt: {
      en: "Write a short proposal acknowledging an objection.",
      de: "Schreib einen kurzen Vorschlag und geh auf einen Einwand ein.",
      es: "Redacta una propuesta breve que tenga en cuenta una objeción.",
    },
    model: {
      en: "I understand the concern about noise. A trial with quiet Sundays would let residents judge the result.",
      de: "Ich verstehe die Sorge wegen des Lärms. Ein Versuch mit ruhigen Sonntagen würde den Anwohnern ein eigenes Urteil ermöglichen.",
      es: "Entiendo la preocupación por el ruido. Una prueba con domingos tranquilos permitiría a los vecinos valorar el resultado.",
    },
    words: {
      en: ["the plot", "the objection", "the funding", "the trial period"],
      de: [
        "das Grundstück",
        "der Einwand",
        "die Finanzierung",
        "die Probezeit",
      ],
      es: [
        "el solar",
        "la objeción",
        "la financiación",
        "el período de prueba",
      ],
    },
  },
  {
    level: "B2",
    title: {
      en: "What the review implies",
      de: "Was die Kritik andeutet",
      es: "Lo que sugiere la reseña",
    },
    text: {
      en: "The reviewer praises the restaurant for its ambitious menu, then spends a paragraph describing the long wait. The closing line recommends it to diners with a free afternoon. The words sound friendly, yet they qualify the initial praise.",
      de: "Die Kritik lobt die ambitionierte Speisekarte und widmet dann einen ganzen Absatz der langen Wartezeit. Am Schluss empfiehlt sie das Lokal Gästen mit einem freien Nachmittag. Das klingt freundlich, schränkt aber das anfängliche Lob ein.",
      es: "La reseña elogia la ambiciosa carta y dedica luego un párrafo entero a la larga espera. Al final recomienda el local a quienes tengan la tarde libre. Las palabras suenan amables, aunque matizan el elogio inicial.",
    },
    yes: {
      en: "The recommendation contains indirect criticism.",
      de: "In der Empfehlung steckt indirekte Kritik.",
      es: "La recomendación contiene una crítica indirecta.",
    },
    no: {
      en: "The reviewer mainly praises the fast service.",
      de: "Die Kritik lobt vor allem die schnelle Bedienung.",
      es: "La reseña elogia sobre todo la rapidez del servicio.",
    },
    translation: {
      en: ["The final sentence qualifies the praise."],
      de: [
        "Der letzte Satz schränkt das Lob ein.",
        "Der letzte Satz relativiert das Lob.",
      ],
      es: ["La última frase matiza el elogio."],
    },
    prompt: {
      en: "Rewrite a polite criticism in direct language. Keep its meaning.",
      de: "Formuliere eine höfliche Kritik direkt und erhalte den Sinn.",
      es: "Reformula una crítica cortés de forma directa sin cambiar el sentido.",
    },
    model: {
      en: "You should allow plenty of time here. More directly, the service is slow even when the food is good.",
      de: "Hier sollte man viel Zeit mitbringen. Direkt gesagt ist die Bedienung langsam, auch wenn das Essen gut ist.",
      es: "Conviene venir sin prisa. Dicho de forma directa, el servicio es lento aunque se coma bien.",
    },
    words: {
      en: ["the review", "the praise", "the implication", "to qualify a claim"],
      de: [
        "die Rezension",
        "das Lob",
        "die Andeutung",
        "eine Aussage einschränken",
      ],
      es: [
        "la reseña",
        "el elogio",
        "la insinuación",
        "matizar una afirmación",
      ],
    },
  },
  {
    level: "C1",
    title: {
      en: "Evidence and inference",
      de: "Befund und Schlussfolgerung",
      es: "Evidencia e inferencia",
    },
    text: {
      en: "After online booking was introduced, cancellations fell. The director credited the booking system. During the same quarter, however, the venue also began sending reminders. The figures support a change in behaviour, but they cannot isolate its cause. A comparison with a venue using reminders alone would narrow the uncertainty.",
      de: "Nach Einführung der Onlinebuchung gingen die Stornierungen zurück. Die Leitung schrieb dies dem Buchungssystem zu. Im selben Quartal begann das Haus jedoch auch, Erinnerungen zu verschicken. Die Zahlen belegen eine Verhaltensänderung, erlauben aber keine eindeutige Zuordnung der Ursache. Ein Vergleich mit einem Haus, das nur Erinnerungen einsetzt, könnte die Unsicherheit verringern.",
      es: "Tras introducir la reserva en línea, disminuyeron las cancelaciones. La dirección atribuyó el descenso al sistema de reservas. Ese mismo trimestre el centro empezó también a enviar recordatorios. Las cifras respaldan un cambio de conducta, pero no permiten aislar su causa. Comparar con un centro que solo envíe recordatorios reduciría la incertidumbre.",
    },
    yes: {
      en: "The evidence is compatible with more than one explanation.",
      de: "Die Befunde lassen mehrere Erklärungen zu.",
      es: "Los datos admiten más de una explicación.",
    },
    no: {
      en: "The reminders must have caused the entire decline.",
      de: "Der Rückgang muss allein auf die Erinnerungen zurückgehen.",
      es: "Los recordatorios necesariamente explican todo el descenso.",
    },
    translation: {
      en: ["The figures do not establish the cause."],
      de: [
        "Die Zahlen belegen die Ursache nicht.",
        "Die Zahlen weisen die Ursache nicht nach.",
      ],
      es: [
        "Las cifras no demuestran la causa.",
        "Las cifras no establecen la causa.",
      ],
    },
    prompt: {
      en: "Brief a director. Distinguish observation, plausible cause and missing evidence.",
      de: "Informiere eine Leitung. Trenne Beobachtung, plausible Ursache und fehlenden Nachweis.",
      es: "Informa a la dirección. Distingue observación, causa plausible y evidencia pendiente.",
    },
    model: {
      en: "Cancellations fell after two changes. Either may have helped. A comparison across venues would give us better grounds for attributing the decline.",
      de: "Die Stornierungen sanken nach zwei Änderungen. Beide kommen als Einflussfaktoren infrage. Ein Vergleich mehrerer Häuser würde die Zuordnung besser begründen.",
      es: "Las cancelaciones bajaron tras dos cambios. Ambos pudieron influir. Comparar distintos centros daría una base más sólida para atribuir el descenso.",
    },
    words: {
      en: ["the attribution", "the uncertainty", "plausible", "to isolate"],
      de: ["die Zuordnung", "die Unsicherheit", "plausibel", "isolieren"],
      es: ["la atribución", "la incertidumbre", "plausible", "aislar"],
    },
  },
  {
    level: "C1",
    title: {
      en: "Two versions of a decision",
      de: "Zwei Fassungen eines Beschlusses",
      es: "Dos versiones de una decisión",
    },
    text: {
      en: "The minutes say that the committee noted the proposal. The newsletter says the committee welcomed it. Neither wording promises money, but the second invites readers to infer support. Before quoting it to a donor, the chair asks the writer to check which attitude was actually recorded.",
      de: "Im Protokoll heißt es, der Ausschuss habe den Vorschlag zur Kenntnis genommen. Im Rundbrief heißt es, er habe ihn begrüßt. Keine Formulierung sagt Geld zu, doch die zweite legt Zustimmung nahe. Bevor sie sie einem Förderer gegenüber zitiert, bittet die Vorsitzende um Prüfung der tatsächlich protokollierten Haltung.",
      es: "Según el acta, la comisión tomó nota de la propuesta. Según el boletín, la acogió favorablemente. Ninguna fórmula promete fondos, pero la segunda invita a inferir apoyo. Antes de citarla ante un donante, la presidenta pide comprobar qué postura consta realmente en el acta.",
    },
    yes: {
      en: "The newsletter adds a positive evaluation.",
      de: "Der Rundbrief fügt eine positive Wertung hinzu.",
      es: "El boletín añade una valoración positiva.",
    },
    no: {
      en: "The minutes formally guarantee funding.",
      de: "Das Protokoll garantiert die Finanzierung ausdrücklich.",
      es: "El acta garantiza formalmente la financiación.",
    },
    translation: {
      en: ["Taking note does not imply approval."],
      de: ["Kenntnisnahme bedeutet keine Zustimmung."],
      es: ["Tomar nota no implica aprobación."],
    },
    prompt: {
      en: "Draft a neutral correction explaining why the wording matters.",
      de: "Entwirf eine sachliche Berichtigung und erkläre die Bedeutung der Wortwahl.",
      es: "Redacta una corrección neutral y explica por qué importa la expresión elegida.",
    },
    model: {
      en: "The minutes record receipt of the proposal. Describing that as support would attribute a judgement the committee did not record.",
      de: "Das Protokoll hält die Kenntnisnahme fest. Von Unterstützung zu sprechen, würde dem Ausschuss ein nicht dokumentiertes Urteil zuschreiben.",
      es: "El acta registra que se tomó nota de la propuesta. Hablar de apoyo atribuiría a la comisión un juicio que no quedó recogido.",
    },
    words: {
      en: ["the minutes", "the wording", "to imply", "the approval"],
      de: ["das Protokoll", "die Formulierung", "nahelegen", "die Zustimmung"],
      es: ["el acta", "la formulación", "dar a entender", "la aprobación"],
    },
  },
  {
    level: "C1",
    title: {
      en: "An awkward invitation",
      de: "Eine heikle Einladung",
      es: "Una invitación delicada",
    },
    text: {
      en: "A colleague has invited you to endorse a plan before the costs are known. An outright refusal might close the discussion. Agreeing now would be equally misleading. The reply needs to acknowledge the work, reserve judgement and name the information that would make a decision possible.",
      de: "Eine Kollegin bittet um Unterstützung für einen Plan, dessen Kosten noch offen sind. Eine schroffe Absage könnte das Gespräch beenden. Eine sofortige Zustimmung wäre ebenso irreführend. Die Antwort sollte die Vorarbeit anerkennen, das Urteil offenhalten und benennen, welche Informationen eine Entscheidung ermöglichen würden.",
      es: "Una colega te pide que respaldes un plan cuyos costes se desconocen. Una negativa tajante podría cerrar el debate. Aceptar ahora sería igualmente engañoso. Conviene reconocer el trabajo, reservarse el juicio e indicar qué información permitiría decidir.",
    },
    yes: {
      en: "A conditional reply leaves room for discussion.",
      de: "Eine bedingte Antwort lässt Raum für Gespräche.",
      es: "Una respuesta condicionada deja margen para el diálogo.",
    },
    no: {
      en: "Politeness requires endorsing the plan at once.",
      de: "Höflichkeit verlangt die sofortige Zustimmung.",
      es: "La cortesía exige apoyar el plan de inmediato.",
    },
    translation: {
      en: ["I would prefer to reserve judgement."],
      de: ["Ich würde mir mein Urteil lieber vorbehalten."],
      es: [
        "Preferiría reservarme el juicio.",
        "Preferiría no pronunciarme todavía.",
      ],
    },
    prompt: {
      en: "Write the reply in three sentences suitable for a colleague.",
      de: "Formuliere eine kollegiale Antwort in drei Sätzen.",
      es: "Redacta la respuesta en tres frases apropiadas para una colega.",
    },
    model: {
      en: "Thank you for working through the options. I would like to see the cost range before endorsing the plan. Could we revisit it on Friday?",
      de: "Danke, dass du die Optionen ausgearbeitet hast. Vor einer Zusage würde ich gern die Kostenspanne sehen. Können wir am Freitag darauf zurückkommen?",
      es: "Gracias por estudiar las opciones. Antes de respaldar el plan me gustaría conocer la horquilla de costes. ¿Lo retomamos el viernes?",
    },
    words: {
      en: ["to endorse", "the reservation", "the estimate", "to acknowledge"],
      de: ["unterstützen", "der Vorbehalt", "die Schätzung", "anerkennen"],
      es: ["respaldar", "la reserva", "la estimación", "reconocer"],
    },
  },
  {
    level: "C1",
    title: {
      en: "Who gets heard?",
      de: "Wer kommt zu Wort?",
      es: "¿A quién se escucha?",
    },
    text: {
      en: "A consultation was open to everyone, but invitations were sent only through professional associations. The organisers point to the absence of formal barriers. Critics focus on who learned about the event. Both statements can be accurate because they describe different stages of participation.",
      de: "Die Anhörung stand allen offen, doch Einladungen wurden nur über Berufsverbände verschickt. Die Veranstalter verweisen auf fehlende formale Hürden. Die Kritiker fragen, wer überhaupt von dem Termin erfuhr. Beide Aussagen können zutreffen, weil sie verschiedene Stufen der Beteiligung beschreiben.",
      es: "La consulta estaba abierta a todos, pero las invitaciones se difundieron únicamente por asociaciones profesionales. Los organizadores destacan que no había barreras formales. Los críticos se centran en quién se enteró del acto. Ambas afirmaciones pueden ser ciertas porque describen etapas distintas de la participación.",
    },
    yes: {
      en: "Eligibility and access to information are distinct.",
      de: "Teilnahmeberechtigung und Zugang zu Informationen sind verschieden.",
      es: "El derecho a participar y el acceso a la información son distintos.",
    },
    no: {
      en: "One side must have misstated the entry rules.",
      de: "Eine Seite muss die Zugangsregeln falsch dargestellt haben.",
      es: "Una de las partes necesariamente describió mal los requisitos.",
    },
    translation: {
      en: ["Both accounts can be accurate."],
      de: ["Beide Darstellungen können zutreffen."],
      es: ["Ambas versiones pueden ser correctas."],
    },
    prompt: {
      en: "Summarise each position and explain how the apparent contradiction disappears.",
      de: "Fasse beide Positionen zusammen und löse den scheinbaren Widerspruch auf.",
      es: "Resume ambas posturas y explica cómo se resuelve la aparente contradicción.",
    },
    model: {
      en: "The organisers describe eligibility. The critics describe visibility. An open door has limited reach if few people know where it is.",
      de: "Die Veranstalter beschreiben die Berechtigung, die Kritiker die Sichtbarkeit. Eine offene Tür erreicht wenige, wenn kaum jemand von ihr weiß.",
      es: "Los organizadores hablan del derecho de acceso y los críticos de la difusión. Una puerta abierta sirve de poco si apenas se conoce su existencia.",
    },
    words: {
      en: [
        "the barrier",
        "the consultation",
        "the association",
        "participation",
      ],
      de: ["die Hürde", "die Anhörung", "der Verband", "die Beteiligung"],
      es: ["la barrera", "la consulta", "la asociación", "la participación"],
    },
  },
  {
    level: "C2",
    title: {
      en: "A carefully phrased promise",
      de: "Ein sorgfältig dosiertes Versprechen",
      es: "Una promesa medida",
    },
    text: {
      en: "Statement: “We intend to retain the evening service wherever demand allows.” A passenger group reads this as a promise to keep its line. A budget note says that demand thresholds will be set only after the review. The statement offers reassurance by placing the intention first. Its qualification quietly transfers the decisive question to a future definition.",
      de: "Erklärung: „Wir beabsichtigen, das Abendangebot zu erhalten, wo es die Nachfrage zulässt.“ Eine Fahrgastinitiative liest darin eine Zusage für ihre Linie. Laut Haushaltsvermerk werden Nachfrageschwellen erst nach der Prüfung festgelegt. Die vorangestellte Absicht beruhigt. Der Nachsatz verschiebt die entscheidende Frage unauffällig auf eine noch ausstehende Definition.",
      es: "Comunicado: «Nos proponemos mantener el servicio nocturno allí donde la demanda lo permita». Un colectivo de viajeros lo interpreta como una promesa para su línea. Una nota presupuestaria indica que los umbrales de demanda se fijarán tras la revisión. La intención, colocada al principio, tranquiliza. La salvedad traslada discretamente la cuestión decisiva a una definición futura.",
    },
    yes: {
      en: "Reassurance derives partly from the order of the clauses.",
      de: "Die beruhigende Wirkung ergibt sich auch aus der Reihenfolge der Satzteile.",
      es: "El efecto tranquilizador depende en parte del orden de las cláusulas.",
    },
    no: {
      en: "The group and the budget note cite the same binding threshold.",
      de: "Initiative und Haushaltsvermerk nennen denselben verbindlichen Schwellenwert.",
      es: "El colectivo y la nota citan el mismo umbral vinculante.",
    },
    translation: {
      en: ["The qualification leaves the threshold open."],
      de: ["Die Einschränkung lässt den Schwellenwert offen."],
      es: ["La salvedad deja abierto el umbral."],
    },
    prompt: {
      en: "Reconcile the two readings for a passenger newsletter. Preserve both the reassurance and its limits.",
      de: "Führe beide Lesarten für einen Fahrgastbrief zusammen. Erhalte die beruhigende Aussage und ihre Grenzen.",
      es: "Concilia ambas lecturas para un boletín de viajeros conservando tanto el mensaje tranquilizador como sus límites.",
    },
    model: {
      en: "Keeping the service is the stated preference. Whether this protects our line turns on a threshold yet to be defined. Treating the preference as a guarantee would settle in words what the review still has to decide.",
      de: "Der Erhalt ist das erklärte Ziel. Ob es unsere Linie schützt, hängt von einer noch offenen Schwelle ab. Aus dem Ziel eine Garantie zu machen, nähme sprachlich eine ausstehende Entscheidung vorweg.",
      es: "Se declara la voluntad de mantener el servicio. Que eso proteja nuestra línea depende de un umbral aún por definir. Convertir la intención en garantía resolvería de palabra lo que sigue pendiente de revisión.",
    },
    words: {
      en: [
        "the qualification",
        "the threshold",
        "binding",
        "to anticipate a decision",
      ],
      de: [
        "die Einschränkung",
        "der Schwellenwert",
        "verbindlich",
        "eine Entscheidung vorwegnehmen",
      ],
      es: ["la salvedad", "el umbral", "vinculante", "anticipar una decisión"],
    },
  },
  {
    level: "C2",
    title: {
      en: "Understatement in a letter",
      de: "Untertreibung in einem Brief",
      es: "Atenuación en una carta",
    },
    text: {
      en: "An editor writes after receiving a manuscript six weeks late: “Its arrival was something of a surprise.” In a private note she thanks the author for persevering through illness. Read alone, the first sentence sounds like a rebuke. Read together, the texts still register the delay but complicate any confident claim about hostility.",
      de: "Eine Herausgeberin schreibt nach Eingang eines sechs Wochen verspäteten Manuskripts: „Sein Eintreffen kam einigermaßen überraschend.“ Privat dankt sie dem Autor dafür, dass er trotz Krankheit durchgehalten hat. Für sich genommen klingt der erste Satz wie ein Tadel. Zusammengenommen benennen die Texte die Verspätung weiterhin, lassen ein sicheres Urteil über Feindseligkeit aber fragwürdig erscheinen.",
      es: "Tras recibir un manuscrito con seis semanas de retraso, una editora escribe: «Su llegada ha sido una pequeña sorpresa». En una nota privada agradece al autor que haya perseverado pese a la enfermedad. Aislada, la primera frase suena a reproche. Juntos, los textos siguen señalando el retraso, pero dificultan afirmar con certeza que hubiera hostilidad.",
    },
    yes: {
      en: "The private note qualifies an inference about tone.",
      de: "Die private Notiz relativiert einen Schluss über den Tonfall.",
      es: "La nota privada matiza una inferencia sobre el tono.",
    },
    no: {
      en: "The private note proves the first sentence was sincere praise.",
      de: "Die private Notiz beweist, dass der erste Satz aufrichtiges Lob war.",
      es: "La nota privada demuestra que la primera frase era un elogio sincero.",
    },
    translation: {
      en: ["The irony admits more than one reading."],
      de: ["Die Ironie lässt mehrere Lesarten zu."],
      es: ["La ironía admite más de una lectura."],
    },
    prompt: {
      en: "Write two possible readings. Identify which inference the private note weakens and why.",
      de: "Entwirf zwei Lesarten. Erkläre, welchen Schluss die private Notiz abschwächt und warum.",
      es: "Formula dos lecturas. Indica qué inferencia debilita la nota privada y por qué.",
    },
    model: {
      en: "The understatement may sting or gently acknowledge a difficult delay. The private thanks make outright hostility less plausible without cancelling the possibility of irritation.",
      de: "Die Untertreibung kann verletzen oder eine schwierige Verzögerung behutsam ansprechen. Der private Dank macht offene Feindseligkeit weniger plausibel, ohne Verärgerung auszuschließen.",
      es: "La atenuación puede herir o aludir con tacto a un retraso difícil. El agradecimiento privado hace menos verosímil la hostilidad abierta sin descartar cierta irritación.",
    },
    words: {
      en: ["the understatement", "the rebuke", "the nuance", "ambivalent"],
      de: ["die Untertreibung", "der Tadel", "die Nuance", "zwiespältig"],
      es: ["la atenuación", "el reproche", "el matiz", "ambivalente"],
    },
  },
  {
    level: "C2",
    title: {
      en: "What the average hides",
      de: "Was der Mittelwert verdeckt",
      es: "Lo que oculta la media",
    },
    text: {
      en: "The annual report celebrates a shorter average queue. A residents’ letter describes lengthening waits at the only suburban branch. The report weights each visit equally, so the busy central branch dominates the figure. The letter speaks from one location. Reconciling them requires a change of scale, while judging fairness requires an additional value judgement about whose waiting time should count most.",
      de: "Der Jahresbericht feiert eine kürzere durchschnittliche Wartezeit. Ein Leserbrief schildert längere Wartezeiten in der einzigen Filiale am Stadtrand. Der Bericht gewichtet jeden Besuch gleich, sodass die stark besuchte Zentrale die Zahl prägt. Der Brief spricht für einen Ort. Ein Wechsel der Betrachtungsebene löst den scheinbaren Widerspruch. Die Bewertung der Fairness erfordert zusätzlich ein Werturteil darüber, wessen Wartezeit stärker zählen soll.",
      es: "El informe anual celebra una menor espera media. Una carta vecinal describe esperas crecientes en la única sucursal periférica. El informe pondera por igual cada visita, de modo que la concurrida sede central domina el indicador. La carta habla desde un solo lugar. Conciliarlos exige cambiar de escala. Juzgar la equidad exige además decidir a qué esperas se concede mayor peso.",
    },
    yes: {
      en: "A factual reconciliation leaves an ethical question open.",
      de: "Die sachliche Auflösung lässt eine Wertungsfrage offen.",
      es: "Conciliar los hechos deja abierta una cuestión de valores.",
    },
    no: {
      en: "The residents’ letter disproves the reported average.",
      de: "Der Leserbrief widerlegt den angegebenen Mittelwert.",
      es: "La carta vecinal refuta la media comunicada.",
    },
    translation: {
      en: ["The average alone cannot settle the question of fairness."],
      de: ["Der Mittelwert allein kann die Frage der Fairness nicht klären."],
      es: ["La media por sí sola no resuelve la cuestión de la equidad."],
    },
    prompt: {
      en: "Write a briefing that preserves both sources and separates measurement from judgement.",
      de: "Verfasse eine Kurzvorlage, die beiden Quellen gerecht wird und Messung von Wertung trennt.",
      es: "Redacta una nota que respete ambas fuentes y separe medición y valoración.",
    },
    model: {
      en: "A shorter system-wide wait can coexist with a longer suburban queue. We should publish both distributions, then explain the principle by which we prioritise improvements.",
      de: "Eine kürzere systemweite Wartezeit verträgt sich mit längeren Schlangen am Stadtrand. Wir sollten beide Verteilungen veröffentlichen und anschließend begründen, nach welchem Prinzip wir Verbesserungen priorisieren.",
      es: "Una menor espera global es compatible con colas más largas en la periferia. Conviene publicar ambas distribuciones y explicar después con qué criterio se priorizan las mejoras.",
    },
    words: {
      en: [
        "the weighting",
        "the distribution",
        "the value judgement",
        "to reconcile",
      ],
      de: [
        "die Gewichtung",
        "die Verteilung",
        "das Werturteil",
        "in Einklang bringen",
      ],
      es: [
        "la ponderación",
        "la distribución",
        "el juicio de valor",
        "conciliar",
      ],
    },
  },
  {
    level: "C2",
    title: {
      en: "Translating distance",
      de: "Distanz beim Übersetzen",
      es: "Traducir el distanciamiento",
    },
    text: {
      en: "A witness says the plan was “apparently approved”. A later memo reports simply that it was approved. The missing adverb does more than shorten the sentence: it removes the witness’s distance from the claim. Restoring hesitation in translation requires judging whether the speaker doubts the event or merely signals that the information is second-hand. The surrounding exchange leaves both readings possible.",
      de: "Ein Zeuge sagt, der Plan sei „offenbar genehmigt“ worden. Ein späterer Vermerk meldet schlicht die Genehmigung. Das fehlende Adverb kürzt nicht bloß den Satz, sondern tilgt die Distanz des Zeugen zur Behauptung. Wer den Vorbehalt übersetzt, muss abwägen, ob der Sprecher zweifelt oder nur die mittelbare Herkunft der Information kennzeichnet. Der Zusammenhang lässt beides zu.",
      es: "Un testigo dice que el plan fue «al parecer aprobado». Una nota posterior comunica sin más que se aprobó. La omisión del adverbio no se limita a acortar la frase: borra la distancia del testigo respecto a la afirmación. Traducir esa reserva exige valorar si duda del hecho o solo señala que la información es de segunda mano. El intercambio admite ambas lecturas.",
    },
    yes: {
      en: "The translation should preserve unresolved evidential distance.",
      de: "Die Übersetzung sollte die ungeklärte Distanz zur Aussage erhalten.",
      es: "La traducción debería conservar la distancia no resuelta frente a la afirmación.",
    },
    no: {
      en: "The witness explicitly denied approval.",
      de: "Der Zeuge hat die Genehmigung ausdrücklich bestritten.",
      es: "El testigo negó explícitamente la aprobación.",
    },
    translation: {
      en: ["The wording leaves the source of the claim unclear."],
      de: ["Die Formulierung lässt die Quelle der Behauptung offen."],
      es: ["La formulación no aclara la fuente de la afirmación."],
    },
    prompt: {
      en: "Give two renderings for different audiences and explain the nuance each risks losing.",
      de: "Gib zwei Fassungen für unterschiedliche Zielgruppen und erkläre, welche Nuance jeweils verloren gehen könnte.",
      es: "Ofrece dos versiones para públicos distintos y explica qué matiz corre el riesgo de perderse en cada una.",
    },
    model: {
      en: "A memo might say “approval was reported”, marking the source as indirect. A narrative might retain “apparently”, preserving doubt but leaving its origin obscure.",
      de: "Ein Vermerk könnte „die Genehmigung wurde gemeldet“ schreiben und damit die mittelbare Herkunft betonen. Eine Erzählung könnte „offenbar“ bewahren und so Zweifel andeuten, ohne dessen Ursprung festzulegen.",
      es: "Una nota podría decir «se comunicó la aprobación», destacando el origen indirecto. Un relato podría mantener «al parecer», conservando la duda sin precisar su origen.",
    },
    words: {
      en: ["second-hand", "the hesitation", "the source", "to convey a nuance"],
      de: [
        "aus zweiter Hand",
        "das Zögern",
        "die Quelle",
        "eine Nuance vermitteln",
      ],
      es: [
        "de segunda mano",
        "la vacilación",
        "la fuente",
        "transmitir un matiz",
      ],
    },
  },
];
