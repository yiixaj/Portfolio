import { FaJs, FaReact, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa'
import {
  SiR,
  SiPostgresql,
  SiNextdotjs,
  SiTailwindcss,
  SiArduino,
} from 'react-icons/si'

// Para agregar una habilidad: importa su icono de react-icons y añade una línea.
const skills = [
  { name: 'JavaScript', Icon: FaJs },
  { name: 'React', Icon: FaReact },
  { name: 'Node.js', Icon: FaNodeJs },
  { name: 'Python', Icon: FaPython },
  { name: 'MongoDB', Icon: FaDatabase },
  { name: 'R Studio', Icon: SiR },
  { name: 'Postgresql', Icon: SiPostgresql },
  { name: 'Next.js', Icon: SiNextdotjs },
  { name: 'Tailwind', Icon: SiTailwindcss },
  { name: 'Arduino', Icon: SiArduino },
]

export default skills
