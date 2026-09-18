import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

// Círculo que sigue al mouse y crece al pasar sobre textos
export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [size, setSize] = useState(32)

  useEffect(() => {
    const onMove = (e) => setPosition({ x: e.clientX, y: e.clientY })
    const grow = () => setSize(80)
    const shrink = () => setSize(32)

    const texts = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6')
    texts.forEach((el) => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })
    window.addEventListener('mousemove', onMove)

    return () => {
      texts.forEach((el) => {
        el.removeEventListener('mouseenter', grow)
        el.removeEventListener('mouseleave', shrink)
      })
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <motion.div
      className="fixed bg-white rounded-full pointer-events-none mix-blend-difference z-50"
      style={{ width: size, height: size }}
      animate={{ x: position.x - size / 2, y: position.y - size / 2 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    />
  )
}
