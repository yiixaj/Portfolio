import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { IoMdMail } from 'react-icons/io'
import { FaPhone } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'
import { profile, socials } from '../data/profile'

const inputClass =
  'border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })
  const { t } = useLanguage()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.8 }}
      className="lg:my-16 lg:px-28 my-8 px-5"
      id="contact"
    >
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="text-2xl lg:text-4xl text-center"
      >
        {t('contact.title')}
        <span className="font-extrabold">{t('contact.titleBold')}</span>
      </motion.h2>

      <div className="flex justify-between items-center mt-8 lg:mt-16 flex-col lg:flex-row">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-[40%]"
        >
          <form className="w-full space-y-3 lg:space-y-5">
            <input
              className={inputClass}
              type="text"
              placeholder={t('contact.namePlaceholder')}
              required
            />
            <input
              className={inputClass}
              type="email"
              placeholder={t('contact.emailPlaceholder')}
              required
            />
            <textarea
              className="resize-none border-2 px-5 py-3 h-32 border-black placeholder:text-[#71717A] rounded text-sm w-full"
              placeholder={t('contact.messagePlaceholder')}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-between gap-3 lg:gap-5 flex-col lg:flex-row"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                type="submit"
                className="bg-black justify-center w-fit lg:w-auto lg:flex-1 hover:shadow-lg text-white px-3 py-2 rounded flex items-center gap-x-3 font-medium"
              >
                {t('contact.submitButton')}
              </motion.button>
              <div className="flex items-center gap-x-2 lg:gap-x-5">
                {socials.map(({ name, Icon, url }) => (
                  <motion.a
                    key={name}
                    href={url}
                    aria-label={name}
                    className="bg-white p-2 lg:p-3 rounded border-2 border-black"
                    whileHover={{ scale: 1.1, backgroundColor: '#000', color: '#fff' }}
                    whileTap={{ scale: 0.9 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </form>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <div className="font-extrabold text-2xl lg:text-5xl mt-5 lg:mt-0 space-y-1 lg:space-y-3">
            <h2>
              {t('contact.conversationTitle1')}{' '}
              <span className="text-white" style={{ WebkitTextStroke: '1px black' }}>
                {t('contact.conversationTitle2')}
              </span>{' '}
              {t('contact.conversationTitle3')}
            </h2>
            <h2>{t('contact.conversationTitle4')}</h2>
          </div>
          <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-6">
            {t('contact.description')}
          </p>

          <div className="font-semibold text-sm lg:text-xl flex flex-col mt-6 gap-2 lg:gap-4">
            <motion.a
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 group"
              href={`mailto:${profile.email}`}
            >
              <span className="border-2 transition-all border-transparent group-hover:border-black rounded-full p-1">
                <IoMdMail className="w-4 h-4 lg:w-5 lg:h-5" />
              </span>
              {profile.email}
            </motion.a>
            <motion.a
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 group"
              href={profile.phoneHref}
            >
              <span className="border-2 transition-all border-transparent group-hover:border-black rounded-full p-[5px]">
                <FaPhone className="w-3 h-3 lg:w-4 lg:h-4" />
              </span>
              {profile.phone}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
