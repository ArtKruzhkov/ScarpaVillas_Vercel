import type { RegionFeatureProps } from '../sections/RegionPageSection/RegionFeature/RegionFeature';

export const wineLandscapeSection: RegionFeatureProps = {
  id: 'wine',
  backgroundImage: `${process.env.PUBLIC_URL}/images/RegionPage/region_feature/wine/wine.png`,

  titleKey: 'regionWineLandscape.title',

  paragraphKeys: [
    'regionWineLandscape.paragraph1',
    'regionWineLandscape.paragraph2',
    'regionWineLandscape.paragraph3',
  ],

  sliderBackground: 'white',

  slides: [
    {
      titleKey: 'regionWineLandscape.slides.vineyardRoads.title',
      subtitleKey: 'regionWineLandscape.slides.vineyardRoads.subtitle',
      image: `${process.env.PUBLIC_URL}/images/RegionPage/region_feature/wine/vineyard-roads.png`,
    },
    {
      titleKey: 'regionWineLandscape.slides.laMorra.title',
      subtitleKey: 'regionWineLandscape.slides.laMorra.subtitle',
      image: `${process.env.PUBLIC_URL}/images/RegionPage/region_feature/wine/la-morra.png`,
    },
    {
      titleKey: 'regionWineLandscape.slides.cappella.title',
      subtitleKey: 'regionWineLandscape.slides.cappella.subtitle',
      image: `${process.env.PUBLIC_URL}/images/RegionPage/region_feature/wine/cappella.png`,
    },
    {
      titleKey: 'regionWineLandscape.slides.cedro.title',
      subtitleKey: 'regionWineLandscape.slides.cedro.subtitle',
      image: `${process.env.PUBLIC_URL}/images/RegionPage/region_feature/wine/cedro.png`,
    },
    {
      titleKey: 'regionWineLandscape.slides.vineyardRoads.title',
      subtitleKey: 'regionWineLandscape.slides.vineyardRoads.subtitle',
      image: `${process.env.PUBLIC_URL}/images/RegionPage/region_feature/wine/vineyard-roads.png`,
    },
    {
      titleKey: 'regionWineLandscape.slides.laMorra.title',
      subtitleKey: 'regionWineLandscape.slides.laMorra.subtitle',
      image: `${process.env.PUBLIC_URL}/images/RegionPage/region_feature/wine/la-morra.png`,
    },
    {
      titleKey: 'regionWineLandscape.slides.cappella.title',
      subtitleKey: 'regionWineLandscape.slides.cappella.subtitle',
      image: `${process.env.PUBLIC_URL}/images/RegionPage/region_feature/wine/cappella.png`,
    },
    {
      titleKey: 'regionWineLandscape.slides.cedro.title',
      subtitleKey: 'regionWineLandscape.slides.cedro.subtitle',
      image: `${process.env.PUBLIC_URL}/images/RegionPage/region_feature/wine/cedro.png`,
    },
  ],
};

export const villagesHistorySection: RegionFeatureProps = {
  id: 'villages',
  backgroundImage: `${process.env.PUBLIC_URL}/images/RegionPage/region_feature/villages/villages.png`,

  titleKey: 'regionVillagesHistory.title',

  paragraphKeys: [
    'regionVillagesHistory.paragraph1',
    'regionVillagesHistory.paragraph2',
    'regionVillagesHistory.paragraph3',
    'regionVillagesHistory.paragraph4',
  ],

  sliderBackground: 'blue',

  slides: [
    {
      titleKey: 'regionVillagesHistory.slides.cherasco.title',
      subtitleKey: 'regionVillagesHistory.slides.cherasco.subtitle',
      image: `${process.env.PUBLIC_URL}/images/RegionPage/region_feature/villages/cherasco.png`,
    },
    {
      titleKey: 'regionVillagesHistory.slides.barolo.title',
      subtitleKey: 'regionVillagesHistory.slides.barolo.subtitle',
      image: `${process.env.PUBLIC_URL}/images/RegionPage/region_feature/villages/barolo.png`,
    },
    {
      titleKey: 'regionVillagesHistory.slides.serralunga.title',
      subtitleKey: 'regionVillagesHistory.slides.serralunga.subtitle',
      image: `${process.env.PUBLIC_URL}/images/RegionPage/region_feature/villages/serralunga.png`,
    },
    {
      titleKey: 'regionVillagesHistory.slides.grinzane.title',
      subtitleKey: 'regionVillagesHistory.slides.grinzane.subtitle',
      image: `${process.env.PUBLIC_URL}/images/RegionPage/region_feature/villages/grinzane.png`,
    },
    {
      titleKey: 'regionVillagesHistory.slides.monforte.title',
      subtitleKey: 'regionVillagesHistory.slides.monforte.subtitle',
      image: `${process.env.PUBLIC_URL}/images/RegionPage/region_feature/villages/monforte.png`,
    },

    // Duplicate slides for smooth loop
    {
      titleKey: 'regionVillagesHistory.slides.cherasco.title',
      subtitleKey: 'regionVillagesHistory.slides.cherasco.subtitle',
      image: `${process.env.PUBLIC_URL}/images/RegionPage/region_feature/villages/cherasco.png`,
    },
    {
      titleKey: 'regionVillagesHistory.slides.barolo.title',
      subtitleKey: 'regionVillagesHistory.slides.barolo.subtitle',
      image: `${process.env.PUBLIC_URL}/images/RegionPage/region_feature/villages/barolo.png`,
    },
    {
      titleKey: 'regionVillagesHistory.slides.serralunga.title',
      subtitleKey: 'regionVillagesHistory.slides.serralunga.subtitle',
      image: `${process.env.PUBLIC_URL}/images/RegionPage/region_feature/villages/serralunga.png`,
    },
    {
      titleKey: 'regionVillagesHistory.slides.grinzane.title',
      subtitleKey: 'regionVillagesHistory.slides.grinzane.subtitle',
      image: `${process.env.PUBLIC_URL}/images/RegionPage/region_feature/villages/grinzane.png`,
    },
    {
      titleKey: 'regionVillagesHistory.slides.monforte.title',
      subtitleKey: 'regionVillagesHistory.slides.monforte.subtitle',
      image: `${process.env.PUBLIC_URL}/images/RegionPage/region_feature/villages/monforte.png`,
    },
  ],
};

export const foodTraditionsSection: RegionFeatureProps = {
  id: 'food',

  backgroundImage: `${process.env.PUBLIC_URL}/images/RegionPage/region_feature/food/food.png`,

  titleKey: 'regionFoodTraditions.title',

  paragraphKeys: [
    'regionFoodTraditions.paragraph1',
    'regionFoodTraditions.paragraph2',
    'regionFoodTraditions.paragraph3',
  ],

  sliderBackground: 'white',

  slides: [
    {
      titleKey: 'regionFoodTraditions.slides.hazelnuts.title',
      subtitleKey: 'regionFoodTraditions.slides.hazelnuts.subtitle',
      image: `${process.env.PUBLIC_URL}/images/RegionPage/region_feature/food/hazelnuts.png`,
    },
    {
      titleKey: 'regionFoodTraditions.slides.albaMarket.title',
      subtitleKey: 'regionFoodTraditions.slides.albaMarket.subtitle',
      image: `${process.env.PUBLIC_URL}/images/RegionPage/region_feature/food/alba_market.png`,
    },
    {
      titleKey: 'regionFoodTraditions.slides.whiteTruffle.title',
      subtitleKey: 'regionFoodTraditions.slides.whiteTruffle.subtitle',
      image: `${process.env.PUBLIC_URL}/images/RegionPage/region_feature/food/white_truffle.png`,
    },
    {
      titleKey: 'regionFoodTraditions.slides.merendaSinoira.title',
      subtitleKey: 'regionFoodTraditions.slides.merendaSinoira.subtitle',
      image: `${process.env.PUBLIC_URL}/images/RegionPage/region_feature/food/merenda.png`,
    },

    // Duplicate slides for smooth loop
    {
      titleKey: 'regionFoodTraditions.slides.hazelnuts.title',
      subtitleKey: 'regionFoodTraditions.slides.hazelnuts.subtitle',
      image: `${process.env.PUBLIC_URL}/images/RegionPage/region_feature/food/hazelnuts.png`,
    },
    {
      titleKey: 'regionFoodTraditions.slides.albaMarket.title',
      subtitleKey: 'regionFoodTraditions.slides.albaMarket.subtitle',
      image: `${process.env.PUBLIC_URL}/images/RegionPage/region_feature/food/alba_market.png`,
    },
    {
      titleKey: 'regionFoodTraditions.slides.whiteTruffle.title',
      subtitleKey: 'regionFoodTraditions.slides.whiteTruffle.subtitle',
      image: `${process.env.PUBLIC_URL}/images/RegionPage/region_feature/food/white_truffle.png`,
    },
    {
      titleKey: 'regionFoodTraditions.slides.merendaSinoira.title',
      subtitleKey: 'regionFoodTraditions.slides.merendaSinoira.subtitle',
      image: `${process.env.PUBLIC_URL}/images/RegionPage/region_feature/food/merenda.png`,
    },
  ],
};

export const beyondRoutesSection: RegionFeatureProps = {
  id: 'routes',

  backgroundImage: `${process.env.PUBLIC_URL}/images/RegionPage/region_feature/routes/routes.png`,

  titleKey: 'regionBeyondRoutes.title',

  paragraphKeys: [
    'regionBeyondRoutes.paragraph1',
    'regionBeyondRoutes.paragraph2',
    'regionBeyondRoutes.paragraph3',
    'regionBeyondRoutes.paragraph4',
  ],

  sliderBackground: 'blue',

  slides: [
    {
      titleKey: 'regionBeyondRoutes.slides.hiddenVillages.title',
      subtitleKey: 'regionBeyondRoutes.slides.hiddenVillages.subtitle',
      image: `${process.env.PUBLIC_URL}/images/RegionPage/region_feature/routes/hidden-villages.png`,
    },
    {
      titleKey: 'regionBeyondRoutes.slides.altaLanga.title',
      subtitleKey: 'regionBeyondRoutes.slides.altaLanga.subtitle',
      image: `${process.env.PUBLIC_URL}/images/RegionPage/region_feature/routes/alta-langa.png`,
    },
    {
      titleKey: 'regionBeyondRoutes.slides.sentieriBarolo.title',
      subtitleKey: 'regionBeyondRoutes.slides.sentieriBarolo.subtitle',
      image: `${process.env.PUBLIC_URL}/images/RegionPage/region_feature/routes/sentieri-barolo.png`,
    },
    {
      titleKey: 'regionBeyondRoutes.slides.ebikeRoutes.title',
      subtitleKey: 'regionBeyondRoutes.slides.ebikeRoutes.subtitle',
      image: `${process.env.PUBLIC_URL}/images/RegionPage/region_feature/routes/ebike-routes.png`,
    },

    // Duplicate slides for smooth loop
    {
      titleKey: 'regionBeyondRoutes.slides.hiddenVillages.title',
      subtitleKey: 'regionBeyondRoutes.slides.hiddenVillages.subtitle',
      image: `${process.env.PUBLIC_URL}/images/RegionPage/region_feature/routes/hidden-villages.png`,
    },
    {
      titleKey: 'regionBeyondRoutes.slides.altaLanga.title',
      subtitleKey: 'regionBeyondRoutes.slides.altaLanga.subtitle',
      image: `${process.env.PUBLIC_URL}/images/RegionPage/region_feature/routes/alta-langa.png`,
    },
    {
      titleKey: 'regionBeyondRoutes.slides.sentieriBarolo.title',
      subtitleKey: 'regionBeyondRoutes.slides.sentieriBarolo.subtitle',
      image: `${process.env.PUBLIC_URL}/images/RegionPage/region_feature/routes/sentieri-barolo.png`,
    },
    {
      titleKey: 'regionBeyondRoutes.slides.ebikeRoutes.title',
      subtitleKey: 'regionBeyondRoutes.slides.ebikeRoutes.subtitle',
      image: `${process.env.PUBLIC_URL}/images/RegionPage/region_feature/routes/ebike-routes.png`,
    },
  ],
};
