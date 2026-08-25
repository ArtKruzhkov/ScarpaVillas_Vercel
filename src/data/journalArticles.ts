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
      'For a wine that knows how to wait, time is a promise. It is precisely this philosophy that inspired “La Bogliona va in scena”, the creative competition with which we have chosen to bring our celebrations marking 125 years of history to a close.',
    subtitle_ital:
      'Il tempo, per un vino che sa aspettare, è una promessa. È esattamente questa filosofia che ha ispirato "La Bogliona va in scena", il contest creativo con cui abbiamo scelto di concludere le celebrazioni per i nostri 125 anni di storia.',
    content: [
      {
        paragraphs: [
          'The story begins with a close relationship between landscape, people and time. Each decision reflects a desire to preserve the identity of the territory while allowing it to evolve.',
          'What emerges is a dialogue between tradition and contemporary vision, shaped by the rhythms of the Langhe.',
        ],
        paragraphs_ital: [
          'La storia nasce da un rapporto profondo tra paesaggio, persone e tempo. Ogni scelta riflette il desiderio di preservare l’identità del territorio, lasciandola al tempo stesso evolvere.',
          'Ne emerge un dialogo tra tradizione e visione contemporanea, scandito dai ritmi delle Langhe.',
        ],
      },
      {
        title: 'A Story Rooted in the Territory',
        title_ital: 'Una storia radicata nel territorio',
        paragraphs: [
          'The landscape is never simply a backdrop. It influences materials, gestures and the way every experience takes shape.',
          'Understanding this relationship means looking beyond individual places and discovering the connections that bind them together.',
        ],
        paragraphs_ital: [
          'Il paesaggio non è mai un semplice sfondo. Influenza i materiali, i gesti e il modo in cui ogni esperienza prende forma.',
          'Comprendere questo rapporto significa guardare oltre i singoli luoghi e scoprire le connessioni che li uniscono.',
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
          'The story begins with a close relationship between landscape, people and time. Each decision reflects a desire to preserve the identity of the territory while allowing it to evolve.',
          'What emerges is a dialogue between tradition and contemporary vision, shaped by the rhythms of the Langhe.',
        ],
        paragraphs_ital: [
          'La storia nasce da un rapporto profondo tra paesaggio, persone e tempo. Ogni scelta riflette il desiderio di preservare l’identità del territorio, lasciandola al tempo stesso evolvere.',
          'Ne emerge un dialogo tra tradizione e visione contemporanea, scandito dai ritmi delle Langhe.',
        ],
      },
      {
        title: 'A Story Rooted in the Territory',
        title_ital: 'Una storia radicata nel territorio',
        paragraphs: [
          'The landscape is never simply a backdrop. It influences materials, gestures and the way every experience takes shape.',
          'Understanding this relationship means looking beyond individual places and discovering the connections that bind them together.',
        ],
        paragraphs_ital: [
          'Il paesaggio non è mai un semplice sfondo. Influenza i materiali, i gesti e il modo in cui ogni esperienza prende forma.',
          'Comprendere questo rapporto significa guardare oltre i singoli luoghi e scoprire le connessioni che li uniscono.',
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
          'The story begins with a close relationship between landscape, people and time. Each decision reflects a desire to preserve the identity of the territory while allowing it to evolve.',
          'What emerges is a dialogue between tradition and contemporary vision, shaped by the rhythms of the Langhe.',
        ],
        paragraphs_ital: [
          'La storia nasce da un rapporto profondo tra paesaggio, persone e tempo. Ogni scelta riflette il desiderio di preservare l’identità del territorio, lasciandola al tempo stesso evolvere.',
          'Ne emerge un dialogo tra tradizione e visione contemporanea, scandito dai ritmi delle Langhe.',
        ],
      },
      {
        title: 'A Story Rooted in the Territory',
        title_ital: 'Una storia radicata nel territorio',
        paragraphs: [
          'The landscape is never simply a backdrop. It influences materials, gestures and the way every experience takes shape.',
          'Understanding this relationship means looking beyond individual places and discovering the connections that bind them together.',
        ],
        paragraphs_ital: [
          'Il paesaggio non è mai un semplice sfondo. Influenza i materiali, i gesti e il modo in cui ogni esperienza prende forma.',
          'Comprendere questo rapporto significa guardare oltre i singoli luoghi e scoprire le connessioni che li uniscono.',
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
      'For a wine that knows how to wait, time is a promise. It is precisely this philosophy that inspired “La Bogliona va in scena”, the creative competition with which we have chosen to bring our celebrations marking 125 years of history to a close.',
    subtitle_ital:
      'Il tempo, per un vino che sa aspettare, è una promessa. È esattamente questa filosofia che ha ispirato "La Bogliona va in scena", il contest creativo con cui abbiamo scelto di concludere le celebrazioni per i nostri 125 anni di storia.',
    content: [
      {
        paragraphs: [
          'The story begins with a close relationship between landscape, people and time. Each decision reflects a desire to preserve the identity of the territory while allowing it to evolve.',
          'What emerges is a dialogue between tradition and contemporary vision, shaped by the rhythms of the Langhe.',
        ],
        paragraphs_ital: [
          'La storia nasce da un rapporto profondo tra paesaggio, persone e tempo. Ogni scelta riflette il desiderio di preservare l’identità del territorio, lasciandola al tempo stesso evolvere.',
          'Ne emerge un dialogo tra tradizione e visione contemporanea, scandito dai ritmi delle Langhe.',
        ],
      },
      {
        title: 'A Story Rooted in the Territory',
        title_ital: 'Una storia radicata nel territorio',
        paragraphs: [
          'The landscape is never simply a backdrop. It influences materials, gestures and the way every experience takes shape.',
          'Understanding this relationship means looking beyond individual places and discovering the connections that bind them together.',
        ],
        paragraphs_ital: [
          'Il paesaggio non è mai un semplice sfondo. Influenza i materiali, i gesti e il modo in cui ogni esperienza prende forma.',
          'Comprendere questo rapporto significa guardare oltre i singoli luoghi e scoprire le connessioni che li uniscono.',
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
          'The story begins with a close relationship between landscape, people and time. Each decision reflects a desire to preserve the identity of the territory while allowing it to evolve.',
          'What emerges is a dialogue between tradition and contemporary vision, shaped by the rhythms of the Langhe.',
        ],
        paragraphs_ital: [
          'La storia nasce da un rapporto profondo tra paesaggio, persone e tempo. Ogni scelta riflette il desiderio di preservare l’identità del territorio, lasciandola al tempo stesso evolvere.',
          'Ne emerge un dialogo tra tradizione e visione contemporanea, scandito dai ritmi delle Langhe.',
        ],
      },
      {
        title: 'A Story Rooted in the Territory',
        title_ital: 'Una storia radicata nel territorio',
        paragraphs: [
          'The landscape is never simply a backdrop. It influences materials, gestures and the way every experience takes shape.',
          'Understanding this relationship means looking beyond individual places and discovering the connections that bind them together.',
        ],
        paragraphs_ital: [
          'Il paesaggio non è mai un semplice sfondo. Influenza i materiali, i gesti e il modo in cui ogni esperienza prende forma.',
          'Comprendere questo rapporto significa guardare oltre i singoli luoghi e scoprire le connessioni che li uniscono.',
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
          'The story begins with a close relationship between landscape, people and time. Each decision reflects a desire to preserve the identity of the territory while allowing it to evolve.',
          'What emerges is a dialogue between tradition and contemporary vision, shaped by the rhythms of the Langhe.',
        ],
        paragraphs_ital: [
          'La storia nasce da un rapporto profondo tra paesaggio, persone e tempo. Ogni scelta riflette il desiderio di preservare l’identità del territorio, lasciandola al tempo stesso evolvere.',
          'Ne emerge un dialogo tra tradizione e visione contemporanea, scandito dai ritmi delle Langhe.',
        ],
      },
      {
        title: 'A Story Rooted in the Territory',
        title_ital: 'Una storia radicata nel territorio',
        paragraphs: [
          'The landscape is never simply a backdrop. It influences materials, gestures and the way every experience takes shape.',
          'Understanding this relationship means looking beyond individual places and discovering the connections that bind them together.',
        ],
        paragraphs_ital: [
          'Il paesaggio non è mai un semplice sfondo. Influenza i materiali, i gesti e il modo in cui ogni esperienza prende forma.',
          'Comprendere questo rapporto significa guardare oltre i singoli luoghi e scoprire le connessioni che li uniscono.',
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
          'The story begins with a close relationship between landscape, people and time. Each decision reflects a desire to preserve the identity of the territory while allowing it to evolve.',
          'What emerges is a dialogue between tradition and contemporary vision, shaped by the rhythms of the Langhe.',
        ],
        paragraphs_ital: [
          'La storia nasce da un rapporto profondo tra paesaggio, persone e tempo. Ogni scelta riflette il desiderio di preservare l’identità del territorio, lasciandola al tempo stesso evolvere.',
          'Ne emerge un dialogo tra tradizione e visione contemporanea, scandito dai ritmi delle Langhe.',
        ],
      },
      {
        title: 'A Story Rooted in the Territory',
        title_ital: 'Una storia radicata nel territorio',
        paragraphs: [
          'The landscape is never simply a backdrop. It influences materials, gestures and the way every experience takes shape.',
          'Understanding this relationship means looking beyond individual places and discovering the connections that bind them together.',
        ],
        paragraphs_ital: [
          'Il paesaggio non è mai un semplice sfondo. Influenza i materiali, i gesti e il modo in cui ogni esperienza prende forma.',
          'Comprendere questo rapporto significa guardare oltre i singoli luoghi e scoprire le connessioni che li uniscono.',
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
          'The story begins with a close relationship between landscape, people and time. Each decision reflects a desire to preserve the identity of the territory while allowing it to evolve.',
          'What emerges is a dialogue between tradition and contemporary vision, shaped by the rhythms of the Langhe.',
        ],
        paragraphs_ital: [
          'La storia nasce da un rapporto profondo tra paesaggio, persone e tempo. Ogni scelta riflette il desiderio di preservare l’identità del territorio, lasciandola al tempo stesso evolvere.',
          'Ne emerge un dialogo tra tradizione e visione contemporanea, scandito dai ritmi delle Langhe.',
        ],
      },
      {
        title: 'A Story Rooted in the Territory',
        title_ital: 'Una storia radicata nel territorio',
        paragraphs: [
          'The landscape is never simply a backdrop. It influences materials, gestures and the way every experience takes shape.',
          'Understanding this relationship means looking beyond individual places and discovering the connections that bind them together.',
        ],
        paragraphs_ital: [
          'Il paesaggio non è mai un semplice sfondo. Influenza i materiali, i gesti e il modo in cui ogni esperienza prende forma.',
          'Comprendere questo rapporto significa guardare oltre i singoli luoghi e scoprire le connessioni che li uniscono.',
        ],
      },
    ],
  },
];
