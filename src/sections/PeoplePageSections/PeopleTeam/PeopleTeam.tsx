import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function PeopleTeam() {
  const baseUrl = process.env.PUBLIC_URL;
  const { t } = useTranslation();

  const people = [
    {
      id: 1,
      nameKey: 'peopleTeam.people.0.name',
      positionKey: 'peopleTeam.people.0.position',
      descriptionKey: 'peopleTeam.people.0.description',
      image: `${baseUrl}/images/PeoplePage/people_team/davide.webp`,
    },
    {
      id: 2,
      nameKey: 'peopleTeam.people.1.name',
      positionKey: 'peopleTeam.people.1.position',
      descriptionKey: 'peopleTeam.people.1.description',
      image: `${baseUrl}/images/PeoplePage/people_team/paola.webp`,
    },
    {
      id: 3,
      nameKey: 'peopleTeam.people.2.name',
      positionKey: 'peopleTeam.people.2.position',
      descriptionKey: 'peopleTeam.people.2.description',
      image: `${baseUrl}/images/PeoplePage/people_team/flavia.webp`,
    },
    {
      id: 4,
      nameKey: 'peopleTeam.people.3.name',
      positionKey: 'peopleTeam.people.3.position',
      descriptionKey: 'peopleTeam.people.3.description',
      image: `${baseUrl}/images/PeoplePage/people_team/pos1.webp`,
    },
    {
      id: 5,
      nameKey: 'peopleTeam.people.4.name',
      positionKey: 'peopleTeam.people.4.position',
      descriptionKey: 'peopleTeam.people.4.description',
      image: `${baseUrl}/images/PeoplePage/people_team/pos2.webp`,
    },
    {
      id: 6,
      nameKey: 'peopleTeam.people.5.name',
      positionKey: 'peopleTeam.people.5.position',
      descriptionKey: 'peopleTeam.people.5.description',
      image: `${baseUrl}/images/PeoplePage/people_team/pos2.webp`,
    },
  ];

  return (
    <section className="bg-white p-4 lg:p-6">
      <div className="mx-auto grid max-w-8xl gap-4 lg:gap-6 md:grid-cols-2 lg:grid-cols-3 overflow-hidden">
        {people.map((person, index) => (
          <motion.article
            key={person.id}
            viewport={{ once: true, amount: 0.2 }}
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative overflow-hidden">
            {/* IMAGE */}
            <div className="overflow-hidden">
              <motion.img
                src={person.image}
                alt={t(person.nameKey)}
                className="h-full w-full object-cover"
                initial={{
                  scale: 1.08,
                }}
                whileInView={{
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 1.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />

            {/* CONTENT */}
            <div className="absolute inset-x-0 bottom-0 flex h-full flex-col justify-end px-6 py-10 text-white">
              <h3 className="font-serif text-[28px] lg:text-[32px] 2xl:text-[38px] leading-none">
                {t(person.nameKey)}
              </h3>

              <div className="mt-2 md:mt-4 h-[2px] w-full bg-white" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={t(person.descriptionKey)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="md:min-h-[108px] xl:min-h-[128px]">
                  <p className="mt-2 md:mt-4 font-sans text-[13px] leading-[16px] lg:text-[15px] lg:leading-[20px] 2xl:text-[18px] 2xl:leading-[28px] font-semibold uppercase tracking-[0.28em]">
                    {t(person.positionKey)}
                  </p>

                  <p className="mt-2 md:mt-3 font-sans text-[13px] leading-[16px] lg:text-[15px] lg:leading-[20px] 2xl:text-[18px] 2xl:leading-[28px] text-white">
                    "{t(person.descriptionKey)}"
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
