export type Villa = {
  id: string;
  hero: {
    image: string;
    title: string;
    subtitle: {
      part1: string;
      italic: string;
      part2: string;
    };
  };
  overview: {
    title: string;
    description: string;
    images: {
      left: string;
      center: string;
      right: string;
    };
  };
  features: {
    items: {
      icon: string;
      alt: string;
      text?: string;
      before?: string;
      accent?: string;
    }[];

    images: {
      left: string;
      bottom: string[];
      bottomObjectPosition?: string;
    };

    text: {
      intro: string;
      paragraph1: string;
      paragraph2: string;
    };
  };
  bookingCTA: {
    title: {
      bold: string;
      italic: string;
      text: string;
    };
    button: string;
  };
  card: {
    title: string;
    description: string;
    image: string;
  };
  amenities: {
    top: {
      includes: {
        title: string;
        items: {
          icon: string;
          text: string;
        }[];
      };

      images: {
        left: string;
        right: string;
      };

      amenities: {
        title: string;
        items: {
          icon: string;
          text: string;
        }[];
      };
    };
    bottom: {
      image: string;
      title: string;
      description: string;
    };
  };
};

export const villas: Villa[] = [
  {
    id: 'tettineive',
    hero: {
      image: `${process.env.PUBLIC_URL}/images/VillaPage/villa_hero/hero-tettineive.webp`,
      title: 'villa.tettineive.hero.title',
      subtitle: {
        part1: 'villa.tettineive.hero.subtitle.part1',
        italic: 'villa.tettineive.hero.subtitle.italic',
        part2: 'villa.tettineive.hero.subtitle.part2',
      },
    },
    overview: {
      title: 'villa.tettineive.overview.title',
      description: 'villa.tettineive.overview.description',
      images: {
        left: `${process.env.PUBLIC_URL}/images/VillaPage/villa_overview/villa-tettineive-left.webp`,
        center: `${process.env.PUBLIC_URL}/images/VillaPage/villa_overview/villa-tettineive-center.webp`,
        right: `${process.env.PUBLIC_URL}/images/VillaPage/villa_overview/villa-tettineive-right.webp`,
      },
    },
    features: {
      items: [
        {
          icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/guests.svg`,
          before: 'villa.tettineive.features.items.0.before',
          accent: 'villa.tettineive.features.items.0.accent',
          alt: 'Up to 12 guests',
        },
        {
          icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/bedrooms.svg`,
          text: 'villa.tettineive.features.items.1.text',
          alt: '5 bedrooms',
        },
        {
          icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/garden.svg`,
          accent: 'villa.tettineive.features.items.2.accent',
          alt: 'Private garden',
        },
        {
          icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/panoramic_views.svg`,
          text: 'villa.tettineive.features.items.3.text',
          alt: 'Panoramic views',
        },
      ],

      images: {
        left: `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/tettineive-left.webp`,
        bottom: [
          `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/tettineive-bottom.webp`,
          `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/tettineive-bottom-2.webp`,
          `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/tettineive-bottom-3.webp`,
          `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/tettineive-bottom-4.webp`,
        ],
      },

      text: {
        intro: 'villa.tettineive.features.intro',
        paragraph1: 'villa.tettineive.features.paragraph1',
        paragraph2: 'villa.tettineive.features.paragraph2',
      },
    },
    bookingCTA: {
      title: {
        bold: 'villa.tettineive.bookingCTA.title.bold',
        italic: 'villa.tettineive.bookingCTA.title.italic',
        text: 'villa.tettineive.bookingCTA.title.text',
      },
      button: 'villa.tettineive.bookingCTA.button',
    },
    card: {
      title: 'villa.tettineive.card.title',
      description: 'villa.tettineive.card.description',
      image: `${process.env.PUBLIC_URL}/images/VillaPage/villa_otherVillas/tettineive.webp`,
    },
    amenities: {
      top: {
        includes: {
          title: 'villa.tettineive.amenities.top.includes.title',
          items: [
            {
              icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/master-bedroom.svg`,
              text: 'villa.tettineive.amenities.top.includes.items.0.text',
            },
            {
              icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/double-bedroom.svg`,
              text: 'villa.tettineive.amenities.top.includes.items.1.text',
            },
            {
              icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/twin-bedroom.svg`,
              text: 'villa.tettineive.amenities.top.includes.items.2.text',
            },
            {
              icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/sofa.svg`,
              text: 'villa.tettineive.amenities.top.includes.items.3.text',
            },
          ],
        },

        images: {
          left: `${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/tettineive-left.webp`,
          right: `${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/tettineive-right.webp`,
        },

        amenities: {
          title: 'villa.tettineive.amenities.top.amenities.title',
          items: [
            {
              icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/amenities_wifi.svg`,
              text: 'villa.tettineive.amenities.top.amenities.items.0.text',
            },
            {
              icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/amenities_air.svg`,
              text: 'villa.tettineive.amenities.top.amenities.items.1.text',
            },
            {
              icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/amenities_bathrobe.svg`,
              text: 'villa.tettineive.amenities.top.amenities.items.2.text',
            },
            {
              icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/amenities_courtesy.svg`,
              text: 'villa.tettineive.amenities.top.amenities.items.3.text',
            },
            {
              icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/amenities_washMachine.svg`,
              text: 'villa.tettineive.amenities.top.amenities.items.4.text',
            },
            {
              icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/amenities_profKitchen.svg`,
              text: 'villa.tettineive.amenities.top.amenities.items.5.text',
            },
            {
              icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/amenities_areaBBQ.svg`,
              text: 'villa.tettineive.amenities.top.amenities.items.6.text',
            },
          ],
        },
      },
      bottom: {
        image: `${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/tettineive-bottom.webp`,
        title: 'villa.tettineive.amenities.bottom.title',
        description: 'villa.tettineive.amenities.bottom.description',
      },
    },
  },

  {
    id: 'bogliona',
    hero: {
      image: `${process.env.PUBLIC_URL}/images/VillaPage/villa_hero/hero-bogliona.webp`,
      title: 'villa.bogliona.hero.title',
      subtitle: {
        part1: 'villa.bogliona.hero.subtitle.part1',
        italic: 'villa.bogliona.hero.subtitle.italic',
        part2: 'villa.bogliona.hero.subtitle.part2',
      },
    },
    overview: {
      title: 'villa.bogliona.overview.title',
      description: 'villa.bogliona.overview.description',

      images: {
        left: `${process.env.PUBLIC_URL}/images/VillaPage/villa_overview/villa-bogliona-left.webp`,
        center: `${process.env.PUBLIC_URL}/images/VillaPage/villa_overview/villa-bogliona-center.webp`,
        right: `${process.env.PUBLIC_URL}/images/VillaPage/villa_overview/villa-bogliona-right.webp`,
      },
    },
    features: {
      items: [
        {
          icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/guests.svg`,
          before: 'villa.bogliona.features.items.0.before',
          accent: 'villa.bogliona.features.items.0.accent',
          alt: 'Up to 9 guests',
        },
        {
          icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/bedrooms.svg`,
          text: 'villa.bogliona.features.items.1.text',
          alt: '4 bedrooms',
        },
        {
          icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/firepit.svg`,
          accent: 'villa.bogliona.features.items.2.accent',
          alt: 'Private garden & firepit',
        },
        {
          icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/pool_view.svg`,
          text: 'villa.bogliona.features.items.3.text',
          alt: 'Direct view of the infinity pool',
        },
      ],

      images: {
        left: `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/bogliona-left.webp`,
        bottom: [
          `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/bogliona-bottom.webp`,
          `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/bogliona-bottom-2.webp`,
          `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/bogliona-bottom-3.webp`,
          `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/bogliona-bottom-4.webp`,
        ],
      },

      text: {
        intro: 'villa.bogliona.features.intro',
        paragraph1: 'villa.bogliona.features.paragraph1',
        paragraph2: 'villa.bogliona.features.paragraph2',
      },
    },
    bookingCTA: {
      title: {
        bold: 'villa.bogliona.bookingCTA.title.bold',
        italic: 'villa.bogliona.bookingCTA.title.italic',
        text: 'villa.bogliona.bookingCTA.title.text',
      },
      button: 'villa.bogliona.bookingCTA.button',
    },
    card: {
      title: 'villa.bogliona.card.title',
      description: 'villa.bogliona.card.description',
      image: `${process.env.PUBLIC_URL}/images/VillaPage/villa_otherVillas/bogliona.webp`,
    },
    amenities: {
      top: {
        includes: {
          title: 'villa.bogliona.amenities.top.includes.title',
          items: [
            {
              icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/master-bedroom.svg`,
              text: 'villa.bogliona.amenities.top.includes.items.0.text',
            },
            {
              icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/double-bedroom.svg`,
              text: 'villa.bogliona.amenities.top.includes.items.1.text',
            },
            {
              icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/single-bedroom.svg`,
              text: 'villa.bogliona.amenities.top.includes.items.2.text',
            },
            {
              icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/sofa.svg`,
              text: 'villa.bogliona.amenities.top.includes.items.3.text',
            },
          ],
        },

        images: {
          left: `${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/bogliona-left.webp`,
          right: `${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/bogliona-right.webp`,
        },

        amenities: {
          title: 'villa.bogliona.amenities.top.amenities.title',
          items: [
            {
              icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/amenities_wifi.svg`,
              text: 'villa.bogliona.amenities.top.amenities.items.0.text',
            },
            {
              icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/amenities_air.svg`,
              text: 'villa.bogliona.amenities.top.amenities.items.1.text',
            },
            {
              icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/amenities_bathrobe.svg`,
              text: 'villa.bogliona.amenities.top.amenities.items.2.text',
            },
            {
              icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/amenities_courtesy.svg`,
              text: 'villa.bogliona.amenities.top.amenities.items.3.text',
            },
            {
              icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/amenities_washMachine.svg`,
              text: 'villa.bogliona.amenities.top.amenities.items.4.text',
            },
            {
              icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/amenities_profKitchen.svg`,
              text: 'villa.bogliona.amenities.top.amenities.items.5.text',
            },
            {
              icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/amenities_firepit.svg`,
              text: 'villa.bogliona.amenities.top.amenities.items.6.text',
            },
          ],
        },
      },
      bottom: {
        image: `${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/bogliona-bottom.webp`,
        title: 'villa.bogliona.amenities.bottom.title',
        description: 'villa.bogliona.amenities.bottom.description',
      },
    },
  },

  {
    id: 'bricchi',
    hero: {
      image: `${process.env.PUBLIC_URL}/images/VillaPage/villa_hero/hero-bricchi.webp`,
      title: 'villa.bricchi.hero.title',
      subtitle: {
        part1: 'villa.bricchi.hero.subtitle.part1',
        italic: 'villa.bricchi.hero.subtitle.italic',
        part2: 'villa.bricchi.hero.subtitle.part2',
      },
    },
    overview: {
      title: 'villa.bricchi.overview.title',
      description: 'villa.bricchi.overview.description',

      images: {
        left: `${process.env.PUBLIC_URL}/images/VillaPage/villa_overview/villa-bricchi-left.webp`,
        center: `${process.env.PUBLIC_URL}/images/VillaPage/villa_overview/villa-bricchi-center.webp`,
        right: `${process.env.PUBLIC_URL}/images/VillaPage/villa_overview/villa-bricchi-right.webp`,
      },
    },
    features: {
      items: [
        {
          icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/guests.svg`,
          before: 'villa.bricchi.features.items.0.before',
          accent: 'villa.bricchi.features.items.0.accent',
          alt: 'Up to 10 guests',
        },
        {
          icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/bedrooms.svg`,
          text: 'villa.bricchi.features.items.1.text',
          alt: '5 bedrooms',
        },
        {
          icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/large_window.svg`,
          accent: 'villa.bricchi.features.items.2.accent',
          alt: 'Panoramic balconies & large windows',
        },
        {
          icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/outdoor_space.svg`,
          text: 'villa.bricchi.features.items.3.text',
          alt: 'Outdoor pergola space',
        },
      ],

      images: {
        left: `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/bricchi-left.webp`,
        bottom: [
          `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/bricchi-bottom.webp`,
          `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/bricchi-bottom-2.webp`,
          `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/bricchi-bottom-3.webp`,
          `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/bricchi-bottom-4.webp`,
        ],
      },

      text: {
        intro: 'villa.bricchi.features.intro',
        paragraph1: 'villa.bricchi.features.paragraph1',
        paragraph2: 'villa.bricchi.features.paragraph2',
      },
    },
    bookingCTA: {
      title: {
        bold: 'villa.bricchi.bookingCTA.title.bold',
        italic: 'villa.bricchi.bookingCTA.title.italic',
        text: 'villa.bricchi.bookingCTA.title.text',
      },
      button: 'villa.bricchi.bookingCTA.button',
    },
    card: {
      title: 'villa.bricchi.card.title',
      description: 'villa.bricchi.card.description',
      image: `${process.env.PUBLIC_URL}/images/VillaPage/villa_otherVillas/bricchi.webp`,
    },
    amenities: {
      top: {
        includes: {
          title: 'villa.bricchi.amenities.top.includes.title',
          items: [
            {
              icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/master-bedroom.svg`,
              text: 'villa.bricchi.amenities.top.includes.items.0.text',
            },
            {
              icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/double-bedroom.svg`,
              text: 'villa.bricchi.amenities.top.includes.items.1.text',
            },
            {
              icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/ensuite-bath.svg`,
              text: 'villa.bricchi.amenities.top.includes.items.2.text',
            },
            {
              icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/shared-bath.svg`,
              text: 'villa.bricchi.amenities.top.includes.items.3.text',
            },
          ],
        },

        images: {
          left: `${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/bricchi-left.webp`,
          right: `${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/bricchi-right.webp`,
        },

        amenities: {
          title: 'villa.bricchi.amenities.top.amenities.title',
          items: [
            {
              icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/amenities_wifi.svg`,
              text: 'villa.bricchi.amenities.top.amenities.items.0.text',
            },
            {
              icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/amenities_air.svg`,
              text: 'villa.bricchi.amenities.top.amenities.items.1.text',
            },
            {
              icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/amenities_bathrobe.svg`,
              text: 'villa.bricchi.amenities.top.amenities.items.2.text',
            },
            {
              icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/amenities_courtesy.svg`,
              text: 'villa.bricchi.amenities.top.amenities.items.3.text',
            },
            {
              icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/amenities_washMachine.svg`,
              text: 'villa.bricchi.amenities.top.amenities.items.4.text',
            },
            {
              icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/amenities_profKitchen.svg`,
              text: 'villa.bricchi.amenities.top.amenities.items.5.text',
            },
          ],
        },
      },
      bottom: {
        image: `${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/bricchi-bottom.webp`,
        title: 'villa.bricchi.amenities.bottom.title',
        description: 'villa.bricchi.amenities.bottom.description',
      },
    },
  },

  {
    id: 'tettimorra',
    hero: {
      image: `${process.env.PUBLIC_URL}/images/VillaPage/villa_hero/hero-tettimorra.webp`,
      title: 'villa.tettimorra.hero.title',
      subtitle: {
        part1: 'villa.tettimorra.hero.subtitle.part1',
        italic: 'villa.tettimorra.hero.subtitle.italic',
        part2: 'villa.tettimorra.hero.subtitle.part2',
      },
    },
    overview: {
      title: 'villa.tettimorra.overview.title',
      description: 'villa.tettimorra.overview.description',

      images: {
        left: `${process.env.PUBLIC_URL}/images/VillaPage/villa_overview/villa-tettimorra-left.webp`,
        center: `${process.env.PUBLIC_URL}/images/VillaPage/villa_overview/villa-tettimorra-center.webp`,
        right: `${process.env.PUBLIC_URL}/images/VillaPage/villa_overview/villa-tettimorra-right.webp`,
      },
    },
    features: {
      items: [
        {
          icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/guests.svg`,
          before: 'villa.tettimorra.features.items.0.before',
          accent: 'villa.tettimorra.features.items.0.accent',
          alt: 'Up to 10 guests',
        },
        {
          icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/bedrooms.svg`,
          text: 'villa.tettimorra.features.items.1.text',
          alt: '4-5 bedrooms',
        },
        {
          icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/terrace_overlook.svg`,
          accent: 'villa.tettimorra.features.items.2.accent',
          alt: 'Terrace overlooking Monvigliero',
        },
        {
          icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/architectural_details.svg`,
          text: 'villa.tettimorra.features.items.3.text',
          alt: 'Traditional architectural details',
        },
      ],

      images: {
        left: `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/tettimorra-left.webp`,
        bottom: [
          `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/tettimorra-bottom.webp`,
          `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/tettimorra-bottom-2.webp`,
          `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/tettimorra-bottom-3.webp`,
          `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/tettimorra-bottom-4.webp`,
        ],
      },

      text: {
        intro: 'villa.tettimorra.features.intro',
        paragraph1: 'villa.tettimorra.features.paragraph1',
        paragraph2: 'villa.tettimorra.features.paragraph2',
      },
    },
    bookingCTA: {
      title: {
        bold: 'villa.tettimorra.bookingCTA.title.bold',
        italic: 'villa.tettimorra.bookingCTA.title.italic',
        text: 'villa.tettimorra.bookingCTA.title.text',
      },
      button: 'villa.tettimorra.bookingCTA.button',
    },
    card: {
      title: 'villa.tettimorra.card.title',
      description: 'villa.tettimorra.card.description',
      image: `${process.env.PUBLIC_URL}/images/VillaPage/villa_otherVillas/tettimorra.webp`,
    },
    amenities: {
      top: {
        includes: {
          title: 'villa.tettimorra.amenities.top.includes.title',
          items: [
            {
              icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/master-bedroom.svg`,
              text: 'villa.tettimorra.amenities.top.includes.items.0.text',
            },
            {
              icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/double-bedroom.svg`,
              text: 'villa.tettimorra.amenities.top.includes.items.1.text',
            },
            {
              icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/single-bedroom.svg`,
              text: 'villa.tettimorra.amenities.top.includes.items.2.text',
            },
            {
              icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/ensuite-bath.svg`,
              text: 'villa.tettimorra.amenities.top.includes.items.3.text',
            },
          ],
        },

        images: {
          left: `${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/tettimorra-left.webp`,
          right: `${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/tettimorra-right.webp`,
        },

        amenities: {
          title: 'villa.tettimorra.amenities.top.amenities.title',
          items: [
            {
              icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/amenities_wifi.svg`,
              text: 'villa.tettimorra.amenities.top.amenities.items.0.text',
            },
            {
              icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/amenities_air.svg`,
              text: 'villa.tettimorra.amenities.top.amenities.items.1.text',
            },
            {
              icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/amenities_bathrobe.svg`,
              text: 'villa.tettimorra.amenities.top.amenities.items.2.text',
            },
            {
              icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/amenities_courtesy.svg`,
              text: 'villa.tettimorra.amenities.top.amenities.items.3.text',
            },
            {
              icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/amenities_washMachine.svg`,
              text: 'villa.tettimorra.amenities.top.amenities.items.4.text',
            },
            {
              icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/amenities_profKitchen.svg`,
              text: 'villa.tettimorra.amenities.top.amenities.items.5.text',
            },
          ],
        },
      },
      bottom: {
        image: `${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/tettimorra-bottom.webp`,
        title: 'villa.tettimorra.amenities.bottom.title',
        description: 'villa.tettimorra.amenities.bottom.description',
      },
    },
  },
];
