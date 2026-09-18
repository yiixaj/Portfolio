// Para agregar un proyecto: añade un objeto aquí y sus textos (title/description)
// en data/translations.js bajo projects.<key>, en español e inglés.
// Las imágenes van en public/assets/ (proporción 16:9 recomendada).
//   demo: enlace al sitio en vivo (opcional)
//   repo: enlace al repositorio de GitHub (opcional)
//   tags: tecnologías que se muestran bajo la descripción
const GH = 'https://github.com/yiixaj'

const projects = [
  {
    key: 'classtab',
    image: '/assets/project1.png',
    demo: 'https://classtab.vercel.app/',
    repoPrivate: true, // muestra el ícono de GitHub sin enlace (el repo es privado)
    tags: ['Next.js', 'React', 'Tailwind'],
  },
  {
    key: 'bakery',
    image: '/assets/project5.png',
    // demo: 'https://panaderiadegenesis.netlify.app/',  // oculta para que todas las tarjetas usen el ícono de GitHub
    repo: `${GH}/Examen_Analisis_Sistemas`,
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    key: 'board',
    image: '/assets/board.jpg',
    // demo: 'https://board-ten-cyan.vercel.app',  // agrégala cuando protejas la base de datos
    repo: `${GH}/board`,
    tags: ['JavaScript', 'Supabase', 'Realtime'],
  },
  {
    key: 'votaciones',
    image: '/assets/votaciones.jpg',
    // demo: 'https://votaciones-rosy.vercel.app',  // agrégala tras rotar la clave y borrar los datos de estudiantes
    repo: `${GH}/votaciones`,
    tags: ['JavaScript', 'Supabase', 'PostgreSQL'],
  },
  {
    key: 'smartroll',
    image: '/assets/smartroll.jpg',
    repo: `${GH}/smartroll`,
    tags: ['React', 'TypeScript', 'Tailwind'],
  },
  {
    key: 'nas',
    image: '/assets/nas.svg',
    repo: `${GH}/nas-homelab`,
    tags: ['Docker', 'OpenMediaVault', 'Immich', 'Nextcloud'],
  },
  {
    key: 'raspberrypi',
    image: '/assets/raspberrypi.jpg',
    repo: `${GH}/raspberry-pi-wol`,
    tags: ['Python', 'Flask', 'PWA', 'Raspberry Pi'],
  },
  {
    key: 'dashu',
    image: '/assets/dashu.svg',
    repo: `${GH}/dashu`,
    tags: ['Docker', 'Grafana', 'Prometheus', 'Python'],
  },
  {
    key: 'jarvis',
    image: '/assets/jarvis.svg',
    repo: `${GH}/jarvis`,
    tags: ['Python', 'Claude', 'Home Assistant', 'Ollama'],
  },
]

export default projects
