import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import skills from '../data/skills'

export default function Skills() {
  const { t } = useLanguage()

  return (
    <div className="mt-3 lg:mt-16 mb-16" id="skills">
      <div className="px-5 lg:px-28">
        <motion.h2
          className="text-2xl lg:text-4xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="font-extrabold">{t('skills.title')}</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 text-lg font-bold mt-7 lg:mt-16 w-full place-items-center gap-y-6 lg:gap-y-12">
          {skills.map(({ name, Icon }, index) => (
            <motion.div
              key={name}
              className="bg-white border-2 hover:bg-black hover:text-white transition-all cursor-pointer border-black rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: (index + 1) * 0.1 }}
              viewport={{ once: true }}
            >
              <Icon size={50} />
              <p>{name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
