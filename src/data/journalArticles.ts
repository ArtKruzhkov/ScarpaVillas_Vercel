export type JournalArticleContentBlock = {
  title?: string;
  title_ital?: string;
  paragraphs: string[];
  paragraphs_ital: string[];
};

export type JournalArticle = {
  id: string;
  date: {
    month: string;
    month_ital: string;
    day: number;
    year: number;
  };
  image: string;
  image_hero: string;
  title: string;
  title_ital: string;
  articleTitleLine1?: string;
  articleTitleLine2?: string;
  articleTitleLine1_ital?: string;
  articleTitleLine2_ital?: string;
  subtitle: string;
  subtitle_ital: string;
  content: JournalArticleContentBlock[];
};

const baseUrl = process.env.PUBLIC_URL;

export const journalArticles: JournalArticle[] = [
  {
    id: 'viticultural-identity',
    date: {
      month: 'July',
      month_ital: 'Luglio',
      day: 8,
      year: 2026,
    },
    image: `${baseUrl}/images/JournalPage/journal_articles/article-1.png`,
    image_hero: `${baseUrl}/images/JournalPage/journal_articles/article-1_hero.png`,
    title: 'Identity Viticultural: Vinifying Diversity',
    title_ital: 'Identità varietale: vinificare la diversità',
    articleTitleLine1: 'Identity Viticultural:',
    articleTitleLine2: 'Vinifying Diversity',
    articleTitleLine1_ital: 'Identità varietale:',
    articleTitleLine2_ital: 'vinificare la diversità',
    subtitle:
      'Piedmont is home to a viticultural heritage built up over the centuries: indigenous grape varieties whose genetic makeup reflects their adaptation to the soil, climate and geography of these hills. Preserving this identity means vinifying each variety separately, allowing it to express the distinctive character of the territory.',
    subtitle_ital:
      'Il Piemonte custodisce un patrimonio ampelografico costruito nei secoli: vitigni autoctoni che portano nel proprio genoma l`adattamento al suolo, al clima, alla geografia di queste colline. Preservare questa identità significa vinificare ogni varietà separatamente, restituirle la possibilità di esprimere il codice identitario del territorio.',
    content: [
      {
        paragraphs: [
          'Carlo Castino had the opportunity to work for many years in Serralunga, when he called the professors of the University of Pisa to study the soils and vines of the estate. That experience shaped a precise approach to viticulture: understanding each vineyard as a unique expression of its territory.',
          'A national zoning project later offered another important perspective. Today, every vineyard represents a fragment of the landscape to understand, preserve and tell.',
        ],
        paragraphs_ital: [
          'Carlo Castino ha avuto modo di lavorare negli anni a Serralunga, quando chiamò i professori dell’Università di Pisa a studiare i suoli e le vigne della tenuta. Quell’esperienza ha contribuito a definire un approccio preciso alla viticoltura: comprendere ogni vigneto come espressione unica del proprio territorio.',
          'Un successivo progetto nazionale di zonazione ha offerto un’altra importante prospettiva. Oggi ogni vigneto rappresenta un frammento di territorio da comprendere, preservare e raccontare.',
        ],
      },
      {
        title: 'Nebbiolo: The Nobility of Time',
        title_ital: 'Nebbiolo: la nobiltà del tempo',

        paragraphs: [
          'Nebbiolo defines the identity of Piedmont more than any other grape variety. Early records describe it as a noble and demanding vine, capable of expressing remarkable complexity when given time.',
          'Its long growing cycle and sensitivity to site make every vineyard different. Altitude, exposure and soil combine to create wines with distinctive structure, perfume and longevity.',
          'In the historic vineyards of the Langhe, Nebbiolo becomes a way of reading the landscape itself — a connection between geology, climate and generations of viticultural knowledge.',
        ],

        paragraphs_ital: [
          'Il Nebbiolo definisce l’identità del Piemonte più di qualsiasi altro vitigno. Le prime testimonianze lo descrivono come una varietà nobile ed esigente, capace di esprimere una straordinaria complessità quando le viene concesso tempo.',
          'Il suo lungo ciclo vegetativo e la sensibilità al luogo rendono ogni vigneto diverso. Altitudine, esposizione e suolo si combinano dando origine a vini dalla struttura, dai profumi e dalla longevità distintivi.',
          'Nei vigneti storici delle Langhe, il Nebbiolo diventa un modo per leggere il paesaggio stesso — un legame tra geologia, clima e generazioni di conoscenza viticola.',
        ],
      },
      {
        title: 'Freisa: The Sanguine Sister of Nebbiolo',
        title_ital: 'Freisa: la sorella sanguigna del Nebbiolo',

        paragraphs: [
          'Freisa shares a deep genetic relationship with Nebbiolo, yet expresses a personality entirely its own. Its vibrant fruit, freshness and subtle tannins give the wine an immediately recognisable character.',
          'Historically grown throughout Piedmont, Freisa reflects another side of the region: energetic, expressive and closely connected to everyday life in the vineyards.',
          'Alongside Nebbiolo, it helps tell a broader story of Piedmontese viticulture — one built not around a single grape, but around diversity.',
        ],

        paragraphs_ital: [
          'La Freisa condivide un profondo legame genetico con il Nebbiolo, ma esprime una personalità completamente propria. Il frutto vibrante, la freschezza e i tannini delicati le conferiscono un carattere immediatamente riconoscibile.',
          'Storicamente coltivata in tutto il Piemonte, la Freisa racconta un altro volto della regione: energico, espressivo e profondamente legato alla vita quotidiana nei vigneti.',
          'Accanto al Nebbiolo, contribuisce a raccontare una storia più ampia della viticoltura piemontese — costruita non attorno a un solo vitigno, ma alla diversità.',
        ],
      },
    ],
  },
  {
    id: 'la-bogliona-125-years',
    date: {
      month: 'June',
      month_ital: 'Giugno',
      day: 26,
      year: 2026,
    },
    image: `${baseUrl}/images/JournalPage/journal_articles/article-2.png`,
    image_hero: `${baseUrl}/images/JournalPage/journal_articles/article-2_hero.png`,
    title: 'La Bogliona Takes the Stage: When Art Meets 125 Years of Tradition',
    title_ital: 'La Bogliona va in scena: quando l`arte incontra 125 anni di tradizione',
    articleTitleLine1: 'La Bogliona Takes the Stage:',
    articleTitleLine2: 'When Art Meets 125 Years of Tradition',
    articleTitleLine1_ital: 'La Bogliona va in scena:',
    articleTitleLine2_ital: 'quando l`arte incontra 125 anni di tradizione',
    subtitle:
      'For a wine that knows how to wait, time is a promise. It is precisely this philosophy that inspired “La Bogliona va in\u00A0scena”, the creative competition we chose as the final chapter in the celebrations of our 125th anniversary.',
    subtitle_ital:
      'Il tempo, per un vino che sa aspettare, è una promessa. È esattamente questa filosofia che ha ispirato "La Bogliona va in scena", il contest creativo con cui abbiamo scelto di concludere le celebrazioni per i nostri 125 anni di storia.',
    content: [
      {
        paragraphs: [
          'Some wines are defined not only by where they come from, but by their relationship with time. La Bogliona belongs to this tradition: a wine shaped by patience, evolution and the belief that waiting is an essential part of its identity.',
          'This idea became the starting point for “La Bogliona Takes the Stage”, a creative competition conceived to bring Scarpa’s 125th anniversary celebrations to a close. Rather than simply looking back, the project opened the story of the winery to new interpretations.',
        ],
        paragraphs_ital: [
          'Ci sono vini che non sono definiti soltanto dal luogo da cui provengono, ma anche dal loro rapporto con il tempo. La Bogliona appartiene a questa tradizione: un vino plasmato dall’attesa, dall’evoluzione e dalla convinzione che il tempo sia una parte essenziale della sua identità.',
          'Da questa idea nasce “La Bogliona va in scena”, il contest creativo pensato per concludere le celebrazioni dei 125 anni di Scarpa. Più che limitarsi a guardare al passato, il progetto ha aperto la storia della cantina a nuove interpretazioni.',
        ],
      },
      {
        title: '125 Years, Looking Forward',
        title_ital: '125 anni, guardando al futuro',
        paragraphs: [
          'Celebrating 125 years means recognising the value of what has been passed down while asking how that heritage can continue to speak to the present. Tradition, in this sense, is not something static: it gains meaning when it is interpreted, questioned and carried forward.',
          'La Bogliona becomes a symbol of this continuity. Its ability to evolve over time reflects a broader philosophy in which history provides the foundation for new ideas rather than setting their limits.',
        ],
        paragraphs_ital: [
          'Celebrare 125 anni significa riconoscere il valore di ciò che è stato tramandato e, allo stesso tempo, chiedersi come questa eredità possa continuare a parlare al presente. La tradizione, in questo senso, non è qualcosa di statico: acquista significato quando viene interpretata, interrogata e portata avanti.',
          'La Bogliona diventa così un simbolo di questa continuità. La sua capacità di evolvere nel tempo riflette una filosofia più ampia, in cui la storia rappresenta il punto di partenza per nuove idee, non il loro limite.',
        ],
      },
      {
        title: 'When Wine Meets Art',
        title_ital: 'Quando il vino incontra l’arte',
        paragraphs: [
          'Bringing La Bogliona into a creative context creates a dialogue between two forms of expression. Wine and art both transform material through time, sensitivity and interpretation, revealing meanings that are never entirely fixed.',
          'The competition therefore marks more than the end of an anniversary. It becomes a way of imagining what comes next: a meeting between Scarpa’s history and contemporary creativity, with time continuing to connect the two.',
        ],
        paragraphs_ital: [
          'Portare La Bogliona in un contesto creativo significa creare un dialogo tra due forme di espressione. Vino e arte trasformano entrambi la materia attraverso il tempo, la sensibilità e l’interpretazione, rivelando significati che non sono mai completamente definiti.',
          'Il contest segna quindi qualcosa di più della conclusione di un anniversario. Diventa un modo per immaginare ciò che verrà: un incontro tra la storia di Scarpa e la creatività contemporanea, con il tempo a fare ancora una volta da filo conduttore.',
        ],
      },
    ],
  },
  {
    id: 'scarpa-villas-part-2',
    date: {
      month: 'May',
      month_ital: 'Maggio',
      day: 22,
      year: 2026,
    },
    image: `${baseUrl}/images/JournalPage/journal_articles/article-3.png`,
    image_hero: `${baseUrl}/images/JournalPage/journal_articles/article-3_hero.png`,
    title: '“Leaving Room for Experience” – Matteo Scalise and the Scarpa Villas Project, Part 2',
    title_ital:
      '“Lasciare spazio all’esperienza” – Matteo Scalise e il progetto Scarpa Villas, parte 2',
    subtitle:
      'Our conversation with Matteo Scalise continues, delving into the origins of the Scarpa Villas project – a dialogue that takes us through the project’s vision, materials and landscape, until it reaches the very heart of the experience: space as a form of listening, time as memory.',
    subtitle_ital:
      'Prosegue la nostra conversazione con Matteo Scalise alle radici del progetto Scarpa Villas –un dialogo che ci accompagna dentro l’intenzione, i materiali, il paesaggio, fino a toccare il cuore dell’esperienza: lo spazio come ascolto, il tempo come memoria.',
    content: [
      {
        paragraphs: [
          'The Scarpa Villas project begins with a simple but demanding idea: architecture should not compete with the place around it. Instead, it should create the conditions for the landscape, its rhythms and its history to become part of the experience.',
          'In Matteo Scalise’s vision, design becomes an exercise in restraint. Every intervention is considered in relation to what already exists, leaving room for the character of the Langhe to remain present and recognisable.',
        ],
        paragraphs_ital: [
          'Il progetto Scarpa Villas nasce da un’idea semplice ma esigente: l’architettura non deve competere con il luogo che la circonda. Deve invece creare le condizioni perché il paesaggio, i suoi ritmi e la sua storia diventino parte dell’esperienza.',
          'Nella visione di Matteo Scalise, il progetto diventa un esercizio di misura. Ogni intervento viene pensato in relazione a ciò che già esiste, lasciando spazio al carattere delle Langhe perché rimanga presente e riconoscibile.',
        ],
      },
      {
        title: 'Materials in Dialogue with the Landscape',
        title_ital: 'Materiali in dialogo con il paesaggio',
        paragraphs: [
          'Materials play a fundamental role in establishing this relationship. Their textures, weight and natural imperfections bring the architecture closer to the surrounding territory and allow the spaces to change subtly with light and time.',
          'Rather than creating a contrast between old and new, the project searches for continuity. Contemporary elements become part of a longer story, connecting the villas with the landscape without trying to imitate it.',
        ],
        paragraphs_ital: [
          'I materiali hanno un ruolo fondamentale nel costruire questa relazione. Le loro texture, il loro peso e le imperfezioni naturali avvicinano l’architettura al territorio circostante e permettono agli spazi di cambiare in modo sottile con la luce e con il tempo.',
          'Più che creare un contrasto tra antico e contemporaneo, il progetto ricerca una continuità. Gli elementi nuovi entrano a far parte di una storia più lunga, mettendo le ville in relazione con il paesaggio senza cercare di imitarlo.',
        ],
      },
      {
        title: 'Space as Listening, Time as Memory',
        title_ital: 'Lo spazio come ascolto, il tempo come memoria',
        paragraphs: [
          'The result is an architecture that asks to be experienced rather than simply observed. Views, silence, changing light and the movement between interior and exterior encourage a slower and more attentive way of inhabiting the space.',
          'Here, time becomes part of the design itself. The experience is built through moments and memories, leaving space for each guest to establish a personal relationship with the place.',
        ],
        paragraphs_ital: [
          'Il risultato è un’architettura che chiede di essere vissuta, più che semplicemente osservata. Le viste, il silenzio, il mutare della luce e il passaggio tra interno ed esterno invitano a un modo più lento e attento di abitare lo spazio.',
          'Qui il tempo diventa parte del progetto stesso. L’esperienza si costruisce attraverso momenti e ricordi, lasciando a ogni ospite lo spazio per creare una relazione personale con il luogo.',
        ],
      },
    ],
  },
  {
    id: 'davide-champion-scarpa-journey',
    date: {
      month: 'April',
      month_ital: 'Aprile',
      day: 7,
      year: 2026,
    },
    image: `${baseUrl}/images/JournalPage/journal_articles/article-4.png`,
    image_hero: `${baseUrl}/images/JournalPage/journal_articles/article-4_hero.png`,
    title: 'From Monferrato to the Langhe: Davide Champion Tells the Story of Scarpa',
    title_ital: 'Dal Monferrato alle Langhe: Davide Champion racconta il viaggio di Scarpa',
    articleTitleLine1: 'From Monferrato to the Langhe:',
    articleTitleLine2: 'Davide Champion Tells the Story of Scarpa',
    articleTitleLine1_ital: 'Dal Monferrato alle Langhe:',
    articleTitleLine2_ital: 'Davide Champion racconta il viaggio di Scarpa',
    subtitle:
      'Scarpa was founded in 1900 in Nizza, in the heart of Monferrato, but its roots have always been firmly planted in the Langhe as well. Since 2018, with the acquisition of vineyards in three key MGA areas – Monvigliero in Verduno, Roncaglie in La Morra and Canova in Neive – this historic connection has evolved into an ambitious, long-term project. We discussed this with Davide Champion, CEO of Scarpa, in a conversation covering history, the region and a vision for the future.',
    subtitle_ital:
      'Scarpa nasce nel 1900 nel cuore del Monferrato, a Nizza, ma le sue radici affondano da sempre anche nelle Langhe. Dal 2018, con l`acquisizione di vigneti in tre importanti MGA – Monvigliero a Verduno, Roncaglie a La Morra e Canova a Neive – questo legame storico si è trasformato in un progetto ambizioso e di lungo respiro. Ne abbiamo parlato con Davide Champion, CEO di Scarpa, in una conversazione che attraversa storia, territorio e visione del futuro.',
    content: [
      {
        paragraphs: [
          'Scarpa’s story begins in 1900 in Nizza, in the heart of Monferrato. More than a century later, this origin remains fundamental to the identity of the winery, shaping a way of thinking about wine that is inseparable from territory, history and time.',
          'The Langhe, however, have always been part of this story as well. The relationship between these two great Piedmontese wine regions has gradually developed into a broader vision, connecting Scarpa’s historic roots with new possibilities.',
        ],
        paragraphs_ital: [
          'La storia di Scarpa inizia nel 1900 a Nizza, nel cuore del Monferrato. Più di un secolo dopo, questa origine rimane fondamentale per l’identità della cantina e definisce un modo di pensare il vino inseparabile dal territorio, dalla storia e dal tempo.',
          'Anche le Langhe, però, hanno sempre fatto parte di questo racconto. Il rapporto tra queste due grandi aree vitivinicole piemontesi si è progressivamente trasformato in una visione più ampia, capace di unire le radici storiche di Scarpa a nuove possibilità.',
        ],
      },
      {
        title: 'Three Vineyards, Three Expressions of the Langhe',
        title_ital: 'Tre vigneti, tre espressioni delle Langhe',
        paragraphs: [
          'Since 2018, the acquisition of vineyards in Monvigliero in Verduno, Roncaglie in La Morra and Canova in Neive has given this connection a new dimension. Three different MGA areas offer three distinct perspectives on the complexity of the Langhe.',
          'Each site brings its own conditions, exposures and identity. Together, they form a project that approaches the territory through its differences, allowing each vineyard to remain a precise expression of its origin.',
        ],
        paragraphs_ital: [
          'Dal 2018, l’acquisizione di vigneti a Monvigliero, a Verduno, Roncaglie, a La Morra, e Canova, a Neive, ha dato una nuova dimensione a questo legame. Tre MGA differenti offrono tre prospettive distinte sulla complessità delle Langhe.',
          'Ogni sito porta con sé condizioni, esposizioni e identità proprie. Insieme formano un progetto che interpreta il territorio attraverso le sue differenze, lasciando che ogni vigneto rimanga un’espressione precisa della propria origine.',
        ],
      },
      {
        title: 'A Long-Term Vision',
        title_ital: 'Una visione di lungo periodo',
        paragraphs: [
          'For Davide Champion, this journey is not a departure from Scarpa’s history but a continuation of it. Moving from Monferrato into the Langhe means extending a philosophy built over generations while respecting the identity of each territory.',
          'It is a project designed to unfold over time. History provides continuity, the vineyards provide direction, and the future lies in understanding how these different places can become part of one coherent Scarpa story.',
        ],
        paragraphs_ital: [
          'Per Davide Champion, questo percorso non rappresenta un allontanamento dalla storia di Scarpa, ma la sua continuazione. Dal Monferrato alle Langhe significa estendere una filosofia costruita nel corso delle generazioni, rispettando al tempo stesso l’identità di ogni territorio.',
          'È un progetto pensato per svilupparsi nel tempo. La storia garantisce continuità, i vigneti indicano la direzione e il futuro sta nel comprendere come luoghi differenti possano entrare a far parte di un unico e coerente racconto Scarpa.',
        ],
      },
    ],
  },

  // Temporary duplicates
  {
    id: 'viticultural-identity-2',
    date: {
      month: 'July',
      month_ital: 'Luglio',
      day: 8,
      year: 2026,
    },
    image: `${baseUrl}/images/JournalPage/journal_articles/article-1.png`,
    image_hero: `${baseUrl}/images/JournalPage/journal_articles/article-1_hero.png`,
    title: 'Identity Viticultural: Vinifying Diversity (Copy)',
    title_ital: 'Identità varietale: vinificare la diversità',
    articleTitleLine1: 'Identity Viticultural:',
    articleTitleLine2: 'Vinifying Diversity',
    articleTitleLine1_ital: 'Identità varietale:',
    articleTitleLine2_ital: 'vinificare la diversità',
    subtitle:
      'Piedmont is home to a viticultural heritage built up over the centuries: indigenous grape varieties whose genetic makeup reflects their adaptation to the soil, climate and geography of these hills. Preserving this identity means vinifying each variety separately, allowing it to express the distinctive character of the territory.',
    subtitle_ital:
      'Il Piemonte custodisce un patrimonio ampelografico costruito nei secoli: vitigni autoctoni che portano nel proprio genoma l`adattamento al suolo, al clima, alla geografia di queste colline. Preservare questa identità significa vinificare ogni varietà separatamente, restituirle la possibilità di esprimere il codice identitario del territorio.',
    content: [
      {
        paragraphs: [
          'Carlo Castino had the opportunity to work for many years in Serralunga, when he called the professors of the University of Pisa to study the soils and vines of the estate. That experience shaped a precise approach to viticulture: understanding each vineyard as a unique expression of its territory.',
          'A national zoning project later offered another important perspective. Today, every vineyard represents a fragment of the landscape to understand, preserve and tell.',
        ],
        paragraphs_ital: [
          'Carlo Castino ha avuto modo di lavorare negli anni a Serralunga, quando chiamò i professori dell’Università di Pisa a studiare i suoli e le vigne della tenuta. Quell’esperienza ha contribuito a definire un approccio preciso alla viticoltura: comprendere ogni vigneto come espressione unica del proprio territorio.',
          'Un successivo progetto nazionale di zonazione ha offerto un’altra importante prospettiva. Oggi ogni vigneto rappresenta un frammento di territorio da comprendere, preservare e raccontare.',
        ],
      },
      {
        title: 'Nebbiolo: The Nobility of Time',
        title_ital: 'Nebbiolo: la nobiltà del tempo',

        paragraphs: [
          'Nebbiolo defines the identity of Piedmont more than any other grape variety. Early records describe it as a noble and demanding vine, capable of expressing remarkable complexity when given time.',
          'Its long growing cycle and sensitivity to site make every vineyard different. Altitude, exposure and soil combine to create wines with distinctive structure, perfume and longevity.',
          'In the historic vineyards of the Langhe, Nebbiolo becomes a way of reading the landscape itself — a connection between geology, climate and generations of viticultural knowledge.',
        ],

        paragraphs_ital: [
          'Il Nebbiolo definisce l’identità del Piemonte più di qualsiasi altro vitigno. Le prime testimonianze lo descrivono come una varietà nobile ed esigente, capace di esprimere una straordinaria complessità quando le viene concesso tempo.',
          'Il suo lungo ciclo vegetativo e la sensibilità al luogo rendono ogni vigneto diverso. Altitudine, esposizione e suolo si combinano dando origine a vini dalla struttura, dai profumi e dalla longevità distintivi.',
          'Nei vigneti storici delle Langhe, il Nebbiolo diventa un modo per leggere il paesaggio stesso — un legame tra geologia, clima e generazioni di conoscenza viticola.',
        ],
      },
      {
        title: 'Freisa: The Sanguine Sister of Nebbiolo',
        title_ital: 'Freisa: la sorella sanguigna del Nebbiolo',

        paragraphs: [
          'Freisa shares a deep genetic relationship with Nebbiolo, yet expresses a personality entirely its own. Its vibrant fruit, freshness and subtle tannins give the wine an immediately recognisable character.',
          'Historically grown throughout Piedmont, Freisa reflects another side of the region: energetic, expressive and closely connected to everyday life in the vineyards.',
          'Alongside Nebbiolo, it helps tell a broader story of Piedmontese viticulture — one built not around a single grape, but around diversity.',
        ],

        paragraphs_ital: [
          'La Freisa condivide un profondo legame genetico con il Nebbiolo, ma esprime una personalità completamente propria. Il frutto vibrante, la freschezza e i tannini delicati le conferiscono un carattere immediatamente riconoscibile.',
          'Storicamente coltivata in tutto il Piemonte, la Freisa racconta un altro volto della regione: energico, espressivo e profondamente legato alla vita quotidiana nei vigneti.',
          'Accanto al Nebbiolo, contribuisce a raccontare una storia più ampia della viticoltura piemontese — costruita non attorno a un solo vitigno, ma alla diversità.',
        ],
      },
    ],
  },
  {
    id: 'la-bogliona-125-years-2',
    date: {
      month: 'June',
      month_ital: 'Giugno',
      day: 26,
      year: 2026,
    },
    image: `${baseUrl}/images/JournalPage/journal_articles/article-2.png`,
    image_hero: `${baseUrl}/images/JournalPage/journal_articles/article-2_hero.png`,
    title: 'La Bogliona Takes the Stage: When Art Meets 125 Years of Tradition (Copy)',
    title_ital: 'La Bogliona va in scena: quando l`arte incontra 125 anni di tradizione',
    articleTitleLine1: 'La Bogliona Takes the Stage:',
    articleTitleLine2: 'When Art Meets 125 Years of Tradition',
    articleTitleLine1_ital: 'La Bogliona va in scena:',
    articleTitleLine2_ital: 'quando l`arte incontra 125 anni di tradizione',
    subtitle:
      'For a wine that knows how to wait, time is a promise. It is precisely this philosophy that inspired “La Bogliona va in\u00A0scena”, the creative competition we chose as the final chapter in the celebrations of our 125th anniversary.',
    subtitle_ital:
      'Il tempo, per un vino che sa aspettare, è una promessa. È esattamente questa filosofia che ha ispirato "La Bogliona va in scena", il contest creativo con cui abbiamo scelto di concludere le celebrazioni per i nostri 125 anni di storia.',
    content: [
      {
        paragraphs: [
          'Some wines are defined not only by where they come from, but by their relationship with time. La Bogliona belongs to this tradition: a wine shaped by patience, evolution and the belief that waiting is an essential part of its identity.',
          'This idea became the starting point for “La Bogliona Takes the Stage”, a creative competition conceived to bring Scarpa’s 125th anniversary celebrations to a close. Rather than simply looking back, the project opened the story of the winery to new interpretations.',
        ],
        paragraphs_ital: [
          'Ci sono vini che non sono definiti soltanto dal luogo da cui provengono, ma anche dal loro rapporto con il tempo. La Bogliona appartiene a questa tradizione: un vino plasmato dall’attesa, dall’evoluzione e dalla convinzione che il tempo sia una parte essenziale della sua identità.',
          'Da questa idea nasce “La Bogliona va in scena”, il contest creativo pensato per concludere le celebrazioni dei 125 anni di Scarpa. Più che limitarsi a guardare al passato, il progetto ha aperto la storia della cantina a nuove interpretazioni.',
        ],
      },
      {
        title: '125 Years, Looking Forward',
        title_ital: '125 anni, guardando al futuro',
        paragraphs: [
          'Celebrating 125 years means recognising the value of what has been passed down while asking how that heritage can continue to speak to the present. Tradition, in this sense, is not something static: it gains meaning when it is interpreted, questioned and carried forward.',
          'La Bogliona becomes a symbol of this continuity. Its ability to evolve over time reflects a broader philosophy in which history provides the foundation for new ideas rather than setting their limits.',
        ],
        paragraphs_ital: [
          'Celebrare 125 anni significa riconoscere il valore di ciò che è stato tramandato e, allo stesso tempo, chiedersi come questa eredità possa continuare a parlare al presente. La tradizione, in questo senso, non è qualcosa di statico: acquista significato quando viene interpretata, interrogata e portata avanti.',
          'La Bogliona diventa così un simbolo di questa continuità. La sua capacità di evolvere nel tempo riflette una filosofia più ampia, in cui la storia rappresenta il punto di partenza per nuove idee, non il loro limite.',
        ],
      },
      {
        title: 'When Wine Meets Art',
        title_ital: 'Quando il vino incontra l’arte',
        paragraphs: [
          'Bringing La Bogliona into a creative context creates a dialogue between two forms of expression. Wine and art both transform material through time, sensitivity and interpretation, revealing meanings that are never entirely fixed.',
          'The competition therefore marks more than the end of an anniversary. It becomes a way of imagining what comes next: a meeting between Scarpa’s history and contemporary creativity, with time continuing to connect the two.',
        ],
        paragraphs_ital: [
          'Portare La Bogliona in un contesto creativo significa creare un dialogo tra due forme di espressione. Vino e arte trasformano entrambi la materia attraverso il tempo, la sensibilità e l’interpretazione, rivelando significati che non sono mai completamente definiti.',
          'Il contest segna quindi qualcosa di più della conclusione di un anniversario. Diventa un modo per immaginare ciò che verrà: un incontro tra la storia di Scarpa e la creatività contemporanea, con il tempo a fare ancora una volta da filo conduttore.',
        ],
      },
    ],
  },
  {
    id: 'scarpa-villas-part-2_2',
    date: {
      month: 'May',
      month_ital: 'Maggio',
      day: 22,
      year: 2026,
    },
    image: `${baseUrl}/images/JournalPage/journal_articles/article-3.png`,
    image_hero: `${baseUrl}/images/JournalPage/journal_articles/article-3_hero.png`,
    title:
      '“Leaving Room for Experience” – Matteo Scalise and the Scarpa Villas Project, Part 2 (Copy)',
    title_ital:
      '“Lasciare spazio all’esperienza” – Matteo Scalise e il progetto Scarpa Villas, parte 2',
    subtitle:
      'Our conversation with Matteo Scalise continues, delving into the origins of the Scarpa Villas project – a dialogue that takes us through the project’s vision, materials and landscape, until it reaches the very heart of the experience: space as a form of listening, time as memory.',
    subtitle_ital:
      'Prosegue la nostra conversazione con Matteo Scalise alle radici del progetto Scarpa Villas –un dialogo che ci accompagna dentro l’intenzione, i materiali, il paesaggio, fino a toccare il cuore dell’esperienza: lo spazio come ascolto, il tempo come memoria.',
    content: [
      {
        paragraphs: [
          'The Scarpa Villas project begins with a simple but demanding idea: architecture should not compete with the place around it. Instead, it should create the conditions for the landscape, its rhythms and its history to become part of the experience.',
          'In Matteo Scalise’s vision, design becomes an exercise in restraint. Every intervention is considered in relation to what already exists, leaving room for the character of the Langhe to remain present and recognisable.',
        ],
        paragraphs_ital: [
          'Il progetto Scarpa Villas nasce da un’idea semplice ma esigente: l’architettura non deve competere con il luogo che la circonda. Deve invece creare le condizioni perché il paesaggio, i suoi ritmi e la sua storia diventino parte dell’esperienza.',
          'Nella visione di Matteo Scalise, il progetto diventa un esercizio di misura. Ogni intervento viene pensato in relazione a ciò che già esiste, lasciando spazio al carattere delle Langhe perché rimanga presente e riconoscibile.',
        ],
      },
      {
        title: 'Materials in Dialogue with the Landscape',
        title_ital: 'Materiali in dialogo con il paesaggio',
        paragraphs: [
          'Materials play a fundamental role in establishing this relationship. Their textures, weight and natural imperfections bring the architecture closer to the surrounding territory and allow the spaces to change subtly with light and time.',
          'Rather than creating a contrast between old and new, the project searches for continuity. Contemporary elements become part of a longer story, connecting the villas with the landscape without trying to imitate it.',
        ],
        paragraphs_ital: [
          'I materiali hanno un ruolo fondamentale nel costruire questa relazione. Le loro texture, il loro peso e le imperfezioni naturali avvicinano l’architettura al territorio circostante e permettono agli spazi di cambiare in modo sottile con la luce e con il tempo.',
          'Più che creare un contrasto tra antico e contemporaneo, il progetto ricerca una continuità. Gli elementi nuovi entrano a far parte di una storia più lunga, mettendo le ville in relazione con il paesaggio senza cercare di imitarlo.',
        ],
      },
      {
        title: 'Space as Listening, Time as Memory',
        title_ital: 'Lo spazio come ascolto, il tempo come memoria',
        paragraphs: [
          'The result is an architecture that asks to be experienced rather than simply observed. Views, silence, changing light and the movement between interior and exterior encourage a slower and more attentive way of inhabiting the space.',
          'Here, time becomes part of the design itself. The experience is built through moments and memories, leaving space for each guest to establish a personal relationship with the place.',
        ],
        paragraphs_ital: [
          'Il risultato è un’architettura che chiede di essere vissuta, più che semplicemente osservata. Le viste, il silenzio, il mutare della luce e il passaggio tra interno ed esterno invitano a un modo più lento e attento di abitare lo spazio.',
          'Qui il tempo diventa parte del progetto stesso. L’esperienza si costruisce attraverso momenti e ricordi, lasciando a ogni ospite lo spazio per creare una relazione personale con il luogo.',
        ],
      },
    ],
  },
  {
    id: 'davide-champion-scarpa-journey-2',
    date: {
      month: 'April',
      month_ital: 'Aprile',
      day: 7,
      year: 2026,
    },
    image: `${baseUrl}/images/JournalPage/journal_articles/article-4.png`,
    image_hero: `${baseUrl}/images/JournalPage/journal_articles/article-4_hero.png`,
    title: 'From Monferrato to the Langhe: Davide Champion Tells the Story of Scarpa (Copy)',
    title_ital: 'Dal Monferrato alle Langhe: Davide Champion racconta il viaggio di Scarpa',
    articleTitleLine1: 'From Monferrato to the Langhe:',
    articleTitleLine2: 'Davide Champion Tells the Story of Scarpa',
    articleTitleLine1_ital: 'Dal Monferrato alle Langhe:',
    articleTitleLine2_ital: 'Davide Champion racconta il viaggio di Scarpa',
    subtitle:
      'Scarpa was founded in 1900 in Nizza, in the heart of Monferrato, but its roots have always been firmly planted in the Langhe as well. Since 2018, with the acquisition of vineyards in three key MGA areas – Monvigliero in Verduno, Roncaglie in La Morra and Canova in Neive – this historic connection has evolved into an ambitious, long-term project. We discussed this with Davide Champion, CEO of Scarpa, in a conversation covering history, the region and a vision for the future.',
    subtitle_ital:
      'Scarpa nasce nel 1900 nel cuore del Monferrato, a Nizza, ma le sue radici affondano da sempre anche nelle Langhe. Dal 2018, con l`acquisizione di vigneti in tre importanti MGA – Monvigliero a Verduno, Roncaglie a La Morra e Canova a Neive – questo legame storico si è trasformato in un progetto ambizioso e di lungo respiro. Ne abbiamo parlato con Davide Champion, CEO di Scarpa, in una conversazione che attraversa storia, territorio e visione del futuro.',
    content: [
      {
        paragraphs: [
          'Scarpa’s story begins in 1900 in Nizza, in the heart of Monferrato. More than a century later, this origin remains fundamental to the identity of the winery, shaping a way of thinking about wine that is inseparable from territory, history and time.',
          'The Langhe, however, have always been part of this story as well. The relationship between these two great Piedmontese wine regions has gradually developed into a broader vision, connecting Scarpa’s historic roots with new possibilities.',
        ],
        paragraphs_ital: [
          'La storia di Scarpa inizia nel 1900 a Nizza, nel cuore del Monferrato. Più di un secolo dopo, questa origine rimane fondamentale per l’identità della cantina e definisce un modo di pensare il vino inseparabile dal territorio, dalla storia e dal tempo.',
          'Anche le Langhe, però, hanno sempre fatto parte di questo racconto. Il rapporto tra queste due grandi aree vitivinicole piemontesi si è progressivamente trasformato in una visione più ampia, capace di unire le radici storiche di Scarpa a nuove possibilità.',
        ],
      },
      {
        title: 'Three Vineyards, Three Expressions of the Langhe',
        title_ital: 'Tre vigneti, tre espressioni delle Langhe',
        paragraphs: [
          'Since 2018, the acquisition of vineyards in Monvigliero in Verduno, Roncaglie in La Morra and Canova in Neive has given this connection a new dimension. Three different MGA areas offer three distinct perspectives on the complexity of the Langhe.',
          'Each site brings its own conditions, exposures and identity. Together, they form a project that approaches the territory through its differences, allowing each vineyard to remain a precise expression of its origin.',
        ],
        paragraphs_ital: [
          'Dal 2018, l’acquisizione di vigneti a Monvigliero, a Verduno, Roncaglie, a La Morra, e Canova, a Neive, ha dato una nuova dimensione a questo legame. Tre MGA differenti offrono tre prospettive distinte sulla complessità delle Langhe.',
          'Ogni sito porta con sé condizioni, esposizioni e identità proprie. Insieme formano un progetto che interpreta il territorio attraverso le sue differenze, lasciando che ogni vigneto rimanga un’espressione precisa della propria origine.',
        ],
      },
      {
        title: 'A Long-Term Vision',
        title_ital: 'Una visione di lungo periodo',
        paragraphs: [
          'For Davide Champion, this journey is not a departure from Scarpa’s history but a continuation of it. Moving from Monferrato into the Langhe means extending a philosophy built over generations while respecting the identity of each territory.',
          'It is a project designed to unfold over time. History provides continuity, the vineyards provide direction, and the future lies in understanding how these different places can become part of one coherent Scarpa story.',
        ],
        paragraphs_ital: [
          'Per Davide Champion, questo percorso non rappresenta un allontanamento dalla storia di Scarpa, ma la sua continuazione. Dal Monferrato alle Langhe significa estendere una filosofia costruita nel corso delle generazioni, rispettando al tempo stesso l’identità di ogni territorio.',
          'È un progetto pensato per svilupparsi nel tempo. La storia garantisce continuità, i vigneti indicano la direzione e il futuro sta nel comprendere come luoghi differenti possano entrare a far parte di un unico e coerente racconto Scarpa.',
        ],
      },
    ],
  },

  {
    id: 'scarpa-villas-part-2_3',
    date: {
      month: 'May',
      month_ital: 'Maggio',
      day: 22,
      year: 2026,
    },
    image: `${baseUrl}/images/JournalPage/journal_articles/article-3.png`,
    image_hero: `${baseUrl}/images/JournalPage/journal_articles/article-3_hero.png`,
    title:
      '“Leaving Room for Experience” – Matteo Scalise and the Scarpa Villas Project, Part 2 (Copy 2)',
    title_ital:
      '“Lasciare spazio all’esperienza” – Matteo Scalise e il progetto Scarpa Villas, parte 2',
    subtitle:
      'Our conversation with Matteo Scalise continues, delving into the origins of the Scarpa Villas project – a dialogue that takes us through the project’s vision, materials and landscape, until it reaches the very heart of the experience: space as a form of listening, time as memory.',
    subtitle_ital:
      'Prosegue la nostra conversazione con Matteo Scalise alle radici del progetto Scarpa Villas –un dialogo che ci accompagna dentro l’intenzione, i materiali, il paesaggio, fino a toccare il cuore dell’esperienza: lo spazio come ascolto, il tempo come memoria.',
    content: [
      {
        paragraphs: [
          'The Scarpa Villas project begins with a simple but demanding idea: architecture should not compete with the place around it. Instead, it should create the conditions for the landscape, its rhythms and its history to become part of the experience.',
          'In Matteo Scalise’s vision, design becomes an exercise in restraint. Every intervention is considered in relation to what already exists, leaving room for the character of the Langhe to remain present and recognisable.',
        ],
        paragraphs_ital: [
          'Il progetto Scarpa Villas nasce da un’idea semplice ma esigente: l’architettura non deve competere con il luogo che la circonda. Deve invece creare le condizioni perché il paesaggio, i suoi ritmi e la sua storia diventino parte dell’esperienza.',
          'Nella visione di Matteo Scalise, il progetto diventa un esercizio di misura. Ogni intervento viene pensato in relazione a ciò che già esiste, lasciando spazio al carattere delle Langhe perché rimanga presente e riconoscibile.',
        ],
      },
      {
        title: 'Materials in Dialogue with the Landscape',
        title_ital: 'Materiali in dialogo con il paesaggio',
        paragraphs: [
          'Materials play a fundamental role in establishing this relationship. Their textures, weight and natural imperfections bring the architecture closer to the surrounding territory and allow the spaces to change subtly with light and time.',
          'Rather than creating a contrast between old and new, the project searches for continuity. Contemporary elements become part of a longer story, connecting the villas with the landscape without trying to imitate it.',
        ],
        paragraphs_ital: [
          'I materiali hanno un ruolo fondamentale nel costruire questa relazione. Le loro texture, il loro peso e le imperfezioni naturali avvicinano l’architettura al territorio circostante e permettono agli spazi di cambiare in modo sottile con la luce e con il tempo.',
          'Più che creare un contrasto tra antico e contemporaneo, il progetto ricerca una continuità. Gli elementi nuovi entrano a far parte di una storia più lunga, mettendo le ville in relazione con il paesaggio senza cercare di imitarlo.',
        ],
      },
      {
        title: 'Space as Listening, Time as Memory',
        title_ital: 'Lo spazio come ascolto, il tempo come memoria',
        paragraphs: [
          'The result is an architecture that asks to be experienced rather than simply observed. Views, silence, changing light and the movement between interior and exterior encourage a slower and more attentive way of inhabiting the space.',
          'Here, time becomes part of the design itself. The experience is built through moments and memories, leaving space for each guest to establish a personal relationship with the place.',
        ],
        paragraphs_ital: [
          'Il risultato è un’architettura che chiede di essere vissuta, più che semplicemente osservata. Le viste, il silenzio, il mutare della luce e il passaggio tra interno ed esterno invitano a un modo più lento e attento di abitare lo spazio.',
          'Qui il tempo diventa parte del progetto stesso. L’esperienza si costruisce attraverso momenti e ricordi, lasciando a ogni ospite lo spazio per creare una relazione personale con il luogo.',
        ],
      },
    ],
  },
  {
    id: 'davide-champion-scarpa-journey-3',
    date: {
      month: 'April',
      month_ital: 'Aprile',
      day: 7,
      year: 2026,
    },
    image: `${baseUrl}/images/JournalPage/journal_articles/article-4.png`,
    image_hero: `${baseUrl}/images/JournalPage/journal_articles/article-4_hero.png`,
    title: 'From Monferrato to the Langhe: Davide Champion Tells the Story of Scarpa (Copy 2)',
    title_ital: 'Dal Monferrato alle Langhe: Davide Champion racconta il viaggio di Scarpa',
    articleTitleLine1: 'From Monferrato to the Langhe:',
    articleTitleLine2: 'Davide Champion Tells the Story of Scarpa',
    articleTitleLine1_ital: 'Dal Monferrato alle Langhe:',
    articleTitleLine2_ital: 'Davide Champion racconta il viaggio di Scarpa',
    subtitle:
      'Scarpa was founded in 1900 in Nizza, in the heart of Monferrato, but its roots have always been firmly planted in the Langhe as well. Since 2018, with the acquisition of vineyards in three key MGA areas – Monvigliero in Verduno, Roncaglie in La Morra and Canova in Neive – this historic connection has evolved into an ambitious, long-term project. We discussed this with Davide Champion, CEO of Scarpa, in a conversation covering history, the region and a vision for the future.',
    subtitle_ital:
      'Scarpa nasce nel 1900 nel cuore del Monferrato, a Nizza, ma le sue radici affondano da sempre anche nelle Langhe. Dal 2018, con l`acquisizione di vigneti in tre importanti MGA – Monvigliero a Verduno, Roncaglie a La Morra e Canova a Neive – questo legame storico si è trasformato in un progetto ambizioso e di lungo respiro. Ne abbiamo parlato con Davide Champion, CEO di Scarpa, in una conversazione che attraversa storia, territorio e visione del futuro.',
    content: [
      {
        paragraphs: [
          'Scarpa’s story begins in 1900 in Nizza, in the heart of Monferrato. More than a century later, this origin remains fundamental to the identity of the winery, shaping a way of thinking about wine that is inseparable from territory, history and time.',
          'The Langhe, however, have always been part of this story as well. The relationship between these two great Piedmontese wine regions has gradually developed into a broader vision, connecting Scarpa’s historic roots with new possibilities.',
        ],
        paragraphs_ital: [
          'La storia di Scarpa inizia nel 1900 a Nizza, nel cuore del Monferrato. Più di un secolo dopo, questa origine rimane fondamentale per l’identità della cantina e definisce un modo di pensare il vino inseparabile dal territorio, dalla storia e dal tempo.',
          'Anche le Langhe, però, hanno sempre fatto parte di questo racconto. Il rapporto tra queste due grandi aree vitivinicole piemontesi si è progressivamente trasformato in una visione più ampia, capace di unire le radici storiche di Scarpa a nuove possibilità.',
        ],
      },
      {
        title: 'Three Vineyards, Three Expressions of the Langhe',
        title_ital: 'Tre vigneti, tre espressioni delle Langhe',
        paragraphs: [
          'Since 2018, the acquisition of vineyards in Monvigliero in Verduno, Roncaglie in La Morra and Canova in Neive has given this connection a new dimension. Three different MGA areas offer three distinct perspectives on the complexity of the Langhe.',
          'Each site brings its own conditions, exposures and identity. Together, they form a project that approaches the territory through its differences, allowing each vineyard to remain a precise expression of its origin.',
        ],
        paragraphs_ital: [
          'Dal 2018, l’acquisizione di vigneti a Monvigliero, a Verduno, Roncaglie, a La Morra, e Canova, a Neive, ha dato una nuova dimensione a questo legame. Tre MGA differenti offrono tre prospettive distinte sulla complessità delle Langhe.',
          'Ogni sito porta con sé condizioni, esposizioni e identità proprie. Insieme formano un progetto che interpreta il territorio attraverso le sue differenze, lasciando che ogni vigneto rimanga un’espressione precisa della propria origine.',
        ],
      },
      {
        title: 'A Long-Term Vision',
        title_ital: 'Una visione di lungo periodo',
        paragraphs: [
          'For Davide Champion, this journey is not a departure from Scarpa’s history but a continuation of it. Moving from Monferrato into the Langhe means extending a philosophy built over generations while respecting the identity of each territory.',
          'It is a project designed to unfold over time. History provides continuity, the vineyards provide direction, and the future lies in understanding how these different places can become part of one coherent Scarpa story.',
        ],
        paragraphs_ital: [
          'Per Davide Champion, questo percorso non rappresenta un allontanamento dalla storia di Scarpa, ma la sua continuazione. Dal Monferrato alle Langhe significa estendere una filosofia costruita nel corso delle generazioni, rispettando al tempo stesso l’identità di ogni territorio.',
          'È un progetto pensato per svilupparsi nel tempo. La storia garantisce continuità, i vigneti indicano la direzione e il futuro sta nel comprendere come luoghi differenti possano entrare a far parte di un unico e coerente racconto Scarpa.',
        ],
      },
    ],
  },
];
