import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row" id="about">
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img src="/assets/about-me.svg" alt="About Me Illustration" />
      </motion.div>

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
          Sobre <span className="font-extrabold">Mí</span>
        </h2>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
        Soy un apasionado desarrollador full-stack especializado en diseño web frontend. Me encanta combinar la experiencia técnica con un diseño UI/UX elegante para crear aplicaciones de alto rendimiento y fáciles de usar.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
        Mi viaje de desarrollo web comenzó en 2020, y desde entonces, he evolucionado continuamente, asumiendo nuevos retos y manteniéndome al día con las últimas tecnologías. Hoy en día, construyo aplicaciones web, especialmente el lado frontend, sin dejar de lado las configuraciones para un backend práctico.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
        Más allá de la codificación, tambien tengo conocimiento en electronica que me ha permitido crear dispositivos que he podido conectar con mi trabajo como web developer.
        </p>
      </motion.div>
    </div>
  );
}
