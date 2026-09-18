import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiX, HiOutlineMenu } from 'react-icons/hi'
import { MdLanguage } from 'react-icons/md'
import { TbDownload } from 'react-icons/tb'
import { useLanguage } from '../context/LanguageContext'
import { profile } from '../data/profile'

const sections = ['about', 'skills', 'projects', 'contact']

function ResumeButton({ label, className = '', ...motionProps }) {
  return (
    <motion.a
      href={profile.resume}
      download="resume.pdf"
      className={`relative inline-block px-4 py-2 group ${className}`}
      {...motionProps}
    >
      <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0" />
      <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black" />
      <span className="relative text-black group-hover:text-white flex items-center gap-x-3">
        {label} <TbDownload size={16} />
      </span>
    </motion.a>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { language, toggleLanguage, t } = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.offsetTop - 110, behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed lg:px-28 px-5 top-0 left-0 w-full z-50 bg-white p-5 transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-none'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scrollTo('home')}
          className="h-11 cursor-pointer"
          src="/assets/cat.gif"
          alt="Logo"
        />

        <ul className="hidden lg:flex items-center gap-x-7 font-semibold">
          {sections.map((id) => (
            <motion.li key={id} className="group" whileHover={{ scale: 1.1 }}>
              <button onClick={() => scrollTo(id)}>{t(`nav.${id}`)}</button>
              <motion.span
                className="w-0 transition-all duration-300 group-hover:w-full h-[2px] bg-black flex"
                layout
              />
            </motion.li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-x-4">
          <motion.button
            onClick={toggleLanguage}
            className="flex items-center gap-x-2 px-3 py-2 rounded border-2 border-black hover:bg-black hover:text-white transition-all font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MdLanguage size={18} />
            <span className="text-sm">{language === 'es' ? 'EN' : 'ES'}</span>
          </motion.button>
          <ResumeButton label={t('nav.resume')} className="font-medium" />
        </div>

        <motion.button
          className="lg:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          whileHover={{ scale: 1.2 }}
        >
          {menuOpen ? <HiX /> : <HiOutlineMenu />}
        </motion.button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed top-0 right-0 h-full w-full bg-white shadow"
          >
            <button
              className="absolute top-5 right-5 text-2xl"
              onClick={() => setMenuOpen(false)}
            >
              <HiX />
            </button>
            <ul className="flex flex-col items-start ml-16 mt-28 h-full gap-y-6 font-semibold">
              {sections.map((id) => (
                <motion.li key={id} className="border-b" whileHover={{ scale: 1.1 }}>
                  <button onClick={() => scrollTo(id)}>{t(`nav.${id}`)}</button>
                </motion.li>
              ))}
              <motion.button
                onClick={toggleLanguage}
                className="flex items-center gap-x-2 px-4 py-2 rounded border-2 border-black font-semibold"
                whileHover={{ scale: 1.05, backgroundColor: '#000', color: '#fff' }}
              >
                <MdLanguage size={18} />
                <span>{language === 'es' ? 'English' : 'Español'}</span>
              </motion.button>
              <ResumeButton
                label={t('nav.resume')}
                className="font-semibold"
                whileHover={{ scale: 1.1 }}
              />
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
