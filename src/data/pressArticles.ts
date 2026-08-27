export interface PressArticle {
  id: string;
  image: string;
  title: string;
  title_ital: string;
  date: string;
  date_ital: string;
  text: string;
  text_ital: string;
}

const baseUrl = process.env.PUBLIC_URL;

export const pressArticles: PressArticle[] = [
  {
    id: 'article-1',
    image: `${baseUrl}/images/PressPage/press_articles/article1.webp`,

    title: 'Monaco Life',
    title_ital: 'Monaco Life',

    date: 'JULY 8, 2026',
    date_ital: 'LUGLIO 8, 2026',

    text: 'Just over two and a half hours from Monaco, the rolling vineyards of Italy’s Langhe unfold across the hills of Piedmont, home to some of the world’s most celebrated wines and one of the country’s great gastronomic regions.',
    text_ital:
      'A poco più di due ore e mezza da Monaco, i vigneti ondulati delle Langhe italiane si estendono sulle colline del Piemonte, patria di alcuni dei vini più rinomati al mondo e una delle grandi regioni gastronomiche del Paese.',
  },
  {
    id: 'article-2',
    image: `${baseUrl}/images/PressPage/press_articles/article2.webp`,

    title: 'Gala',
    title_ital: 'Gala',

    date: 'JULY 1, 2026',
    date_ital: 'LUGLIO 1, 2026',

    text: 'The hills of Piedmont still hide a few well-kept treasures. Nestled in the heart of the Barolo vineyards, Scarpa Villas offers an immersive experience of the Italian art of living, with exceptional wine tastings, leisurely gourmet meals, and scenic bike rides.',
    text_ital:
      'Le colline del Piemonte nascondono ancora alcuni tesori ben custoditi. Immerse nel cuore dei vigneti del Barolo, le Scarpa Villas offrono un’esperienza immersiva nell’arte di vivere all’italiana, con degustazioni di vini eccezionali, pasti gourmet senza fretta e gite panoramiche in bicicletta.',
  },
  {
    id: 'article-3',
    image: `${baseUrl}/images/PressPage/press_articles/article3.webp`,

    title: 'Times Monaco',
    title_ital: 'Times Monaco',

    date: 'JUNE 5, 2026',
    date_ital: 'GIUGNO 5, 2026',

    text: 'Scarpa Villas are not simply a luxury destination. They are an invitation to experience Piedmont at its very best through its landscapes, its people, its traditions, and its wines.',
    text_ital:
      'Scarpa Villas non è semplicemente una destinazione di lusso. È un invito a vivere il Piemonte al meglio attraverso i suoi paesaggi, la sua gente, le sue tradizioni e i suoi vini.',
  },
  {
    id: 'article-4',
    image: `${baseUrl}/images/PressPage/press_articles/article4.webp`,

    title: 'CELLAR TOURS',
    title_ital: 'CELLAR TOURS',

    date: 'FEBRUARY 5, 2025',
    date_ital: 'FEBBRAIO 5, 2025',

    text: 'In the heart of Barolo wine country, four villas are set around a panoramic pool overlooking the Langhe countryside.',
    text_ital:
      'Nel cuore delle colline del Barolo, quattro ville si affacciano su una piscina panoramica con vista sul paesaggio delle Langhe.',
  },
  {
    id: 'article-5',
    image: `${baseUrl}/images/PressPage/press_articles/article5.webp`,

    title: 'THE ITALY EDIT',
    title_ital: 'THE ITALY EDIT',

    date: 'APRIL 26, 2022',
    date_ital: 'APRILE 26, 2022',

    text: 'A heavenly villa surrounded by the expansive Barolo vineyard landscape.',
    text_ital: "Una splendida villa immersa nell'ampio paesaggio dei vigneti del Barolo.",
  },
  {
    id: 'article-6',
    image: `${baseUrl}/images/PressPage/press_articles/article6.webp`,

    title: 'THE FASHION PRINCESS',
    title_ital: 'THE FASHION PRINCESS',

    date: 'AUGUST 4, 2020',
    date_ital: 'AGOSTO 4, 2020',

    text: 'Monvigliero Vineyard Villas, the perfect place to stay for a holiday in the Langhe.',
    text_ital: 'Monvigliero Vineyard Villas, la residenza perfetta per una vacanza nelle Langhe.',
  },
];
