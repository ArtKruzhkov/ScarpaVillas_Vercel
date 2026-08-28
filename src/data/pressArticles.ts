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

    title: 'Times Riviera',
    title_ital: 'Times Riviera',

    date: 'JULY 8, 2026',
    date_ital: 'LUGLIO 8, 2026',

    text: 'Life moves at a gentler pace among these vineyards, where every sunrise over the hills, every carefully prepared meal, every glass of Barolo, and every quiet evening overlooking the landscape contributes to an experience that feels both deeply authentic and wonderfully restorative.',
    text_ital:
      'La vita scorre a un ritmo più tranquillo tra questi vigneti, dove ogni alba sulle colline, ogni pasto preparato con cura, ogni bicchiere di Barolo e ogni serata trascorsa ammirando il paesaggio contribuiscono a creare un’esperienza profondamente autentica e meravigliosamente rigenerante.',
  },
  {
    id: 'article-3',
    image: `${baseUrl}/images/PressPage/press_articles/article3.webp`,

    title: 'Gala',
    title_ital: 'Gala',

    date: 'JULY 1, 2026',
    date_ital: 'LUGLIO 1, 2026',

    text: 'The hills of Piedmont still hide a few well-kept treasures. Nestled in the heart of the Barolo vineyards, Scarpa Villas offers an immersive experience of the Italian art of living, with exceptional wine tastings, leisurely gourmet meals, and scenic bike rides.',
    text_ital:
      'Le colline del Piemonte nascondono ancora alcuni tesori ben custoditi. Immerse nel cuore dei vigneti del Barolo, le Scarpa Villas offrono un’esperienza immersiva nell’arte di vivere all’italiana, con degustazioni di vini eccezionali, pasti gourmet senza fretta e gite panoramiche in bicicletta.',
  },
  {
    id: 'article-4',
    image: `${baseUrl}/images/PressPage/press_articles/article4.webp`,

    title: 'Times Monaco',
    title_ital: 'Times Monaco',

    date: 'JUNE 5, 2026',
    date_ital: 'GIUGNO 5, 2026',

    text: 'Scarpa Villas are not simply a luxury destination. They are an invitation to experience Piedmont at its very best through its landscapes, its people, its traditions, and its wines.',
    text_ital:
      'Scarpa Villas non è semplicemente una destinazione di lusso. È un invito a vivere il Piemonte al meglio attraverso i suoi paesaggi, la sua gente, le sue tradizioni e i suoi vini.',
  },
  {
    id: 'article-5',
    image: `${baseUrl}/images/PressPage/press_articles/article5.webp`,

    title: 'Magazine Lifestyle Brazil',
    title_ital: 'Magazine Lifestyle Brazil',

    date: 'MAY 5, 2026',
    date_ital: 'MAGGIO 5, 2026',

    text: 'Ideal for those seeking a private setting for family gatherings or discreet celebrations, away from prying eyes and the hustle of the world.',
    text_ital:
      'Ideale per chi è alla ricerca di un ambiente riservato per riunioni di famiglia o feste intime, lontano da sguardi indiscreti e dal trambusto del mondo.',
  },
];
