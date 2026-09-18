import { motion } from 'framer-motion'
import { TbExternalLink } from 'react-icons/tb'
import { FaGithub } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'
import projects from '../data/projects'

export default function Projects() {
  const { t } = useLanguage()

  return (
    <div className="bg-black px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16" id="projects">
      <h2 className="text-2xl lg:text-4xl text-center text-white">
        {t('projects.title')} <span className="font-extrabold">{t('projects.titleBold')}</span>
      </h2>

      <div className="lg:mt-16 mt-8 lg:space-y-16 space-y-8 lg:pb-6 pb-3">
        {projects.map((project, index) => {
          const title = t(`projects.${project.key}.title`)
          return (
            <motion.div
              key={project.key}
              className={`flex justify-between items-center flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 80, damping: 10, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="lg:w-[500px] w-full rounded-2xl overflow-hidden">
                <img
                  className="w-full h-full hover:scale-105 transition-all duration-500 cursor-pointer object-cover"
                  src={project.image}
                  alt={title}
                  loading="lazy"
                />
              </div>

              <div className="lg:w-1/2 lg:space-y-6 space-y-4">
                <h2 className="font-extrabold text-white mt-5 lg:mt-0 text-3xl lg:text-5xl">
                  {String(index + 1).padStart(2, '0')}
                </h2>
                <p className="font-bold text-white text-xl lg:text-3xl">{title}</p>
                <p className="font-light text-sm/6 lg:text-base text-[#71717A]">
                  {t(`projects.${project.key}.description`)}
                </p>

                {project.tags?.length > 0 && (
                  <ul className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="text-xs border border-[#3f3f46] text-[#a1a1aa] rounded-full px-3 py-1"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex items-center gap-5 mt-3 text-white">
                  {project.demo && (
                    <a
                      href={project.demo}
                      aria-label={`${t('projects.viewDemo')}: ${title}`}
                      title={t('projects.viewDemo')}
                      className="hover:opacity-70 transition-opacity"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TbExternalLink size={23} />
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      aria-label={`${t('projects.viewCode')}: ${title}`}
                      title={t('projects.viewCode')}
                      className="hover:opacity-70 transition-opacity"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub size={22} />
                    </a>
                  )}
                  {!project.repo && project.repoPrivate && (
                    <span
                      role="img"
                      aria-label={`${t('projects.repoPrivate')}: ${title}`}
                      title={t('projects.repoPrivate')}
                      className="cursor-default"
                    >
                      <FaGithub size={22} />
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
