import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <div className="bg-black px-8 lg:px-28 py-3 lg:py-6 flex items-center justify-between mt-16">
      <img className="invert h-9 lg:h-5" src="/assets/cat.gif" alt="" />
      <div className="text-white lg:font-semibold lg:text-sm font-normal text-[10px] text-right lg:space-y-3">
        <p>{t('footer.copyright')}</p>
        <p>{t('footer.madeBy')}</p>
      </div>
    </div>
  )
}
