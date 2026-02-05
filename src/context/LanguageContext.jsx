import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const translations = {
  es: {
    // Navbar
    nav: {
      about: "Sobre Mí",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
      resume: "Resume"
    },
    // Home
    home: {
      greeting: "Hola, Soy Andre Romero",
      role: "Developer",
      basedIn: "Based In",
      description: "Apasionado de la tecnología, me especializo en Desarrollo Web. Estoy centrado en la construcción de soluciones innovadoras y en la continua expansión de mis habilidades. Mi objetivo es crecer como desarrollador y contribuir a proyectos de impacto en la industria tecnológica."
    },
    // About
    about: {
      title: "Sobre",
      titleBold: "Mí",
      paragraph1: "Soy un apasionado desarrollador full-stack especializado en diseño web frontend. Me encanta combinar la experiencia técnica con un diseño UI/UX elegante para crear aplicaciones de alto rendimiento y fáciles de usar.",
      paragraph2: "Mi viaje de desarrollo web comenzó en 2020, y desde entonces, he evolucionado continuamente, asumiendo nuevos retos y manteniéndome al día con las últimas tecnologías. Hoy en día, construyo aplicaciones web, especialmente el lado frontend, sin dejar de lado las configuraciones para un backend práctico.",
      paragraph3: "Más allá de la codificación, tambien tengo conocimiento en electronica que me ha permitido crear dispositivos que he podido conectar con mi trabajo como web developer."
    },
    // Skills
    skills: {
      title: "Habilidades"
    },
    // Projects
    projects: {
      title: "Mis",
      titleBold: "Proyectos",
      project1: {
        title: "ClassTab",
        description: "Pagina de aprendizaje en linea"
      },
      project2: {
        title: "Battleship",
        description: "Juego hecho en python usando RPC."
      },
      project3: {
        title: "LearnDeck",
        description: "Herramienta gratuita que permite crear, gestionar cursos, tareas y calificaciones."
      },
      project4: {
        title: "Linkfast",
        description: "Proyecto sobre una red social que nos permite interactuar con cualquier persona."
      },
      project5: {
        title: "Pagina web para panaderia",
        description: "Pagina web para la panaderia D' Genesis que cuenta con sistema de compra"
      },
      project6: {
        title: "DIY NAS",
        description: "Proyecto en curso que contará con gestor de fotos, de archivos y editor en linea"
      }
    },
    // Contact
    contact: {
      title: "Contácta",
      titleBold: "me",
      namePlaceholder: "Nombre",
      emailPlaceholder: "Correo",
      messagePlaceholder: "¿En qué puedo ayudar?",
      submitButton: "Póngase en contacto",
      conversationTitle1: "Vamos a",
      conversationTitle2: "conversar",
      conversationTitle3: "para",
      conversationTitle4: "crear algo especial",
      description: "Busco superar los límites de la creatividad para crear experiencias interactivas atractivas, fáciles de usar y memorables."
    },
    // Footer
    footer: {
      copyright: "@ 2025 Portafolio Personal",
      madeBy: "Made by Andre R"
    }
  },
  en: {
    // Navbar
    nav: {
      about: "About Me",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      resume: "Resume"
    },
    // Home
    home: {
      greeting: "Hello, I'm Andre Romero",
      role: "Developer",
      basedIn: "Based In",
      description: "Passionate about technology, I specialize in Web Development. I'm focused on building innovative solutions and continuously expanding my skills. My goal is to grow as a developer and contribute to impactful projects in the tech industry."
    },
    // About
    about: {
      title: "About",
      titleBold: "Me",
      paragraph1: "I'm a passionate full-stack developer specializing in frontend web design. I love combining technical expertise with elegant UI/UX design to create high-performance, user-friendly applications.",
      paragraph2: "My web development journey began in 2020, and since then, I've continuously evolved, taking on new challenges and staying up-to-date with the latest technologies. Today, I build web applications, especially on the frontend side, while not overlooking practical backend configurations.",
      paragraph3: "Beyond coding, I also have knowledge in electronics that has allowed me to create devices that I've been able to connect with my work as a web developer."
    },
    // Skills
    skills: {
      title: "Skills"
    },
    // Projects
    projects: {
      title: "My",
      titleBold: "Projects",
      project1: {
        title: "ClassTab",
        description: "Online learning platform"
      },
      project2: {
        title: "Battleship",
        description: "Game made in Python using RPC."
      },
      project3: {
        title: "LearnDeck",
        description: "Free tool that allows creating and managing courses, assignments, and grades."
      },
      project4: {
        title: "Linkfast",
        description: "Social network project that allows us to interact with anyone."
      },
      project5: {
        title: "Bakery website",
        description: "Website for D' Genesis bakery with a purchase system"
      },
      project6: {
        title: "DIY NAS",
        description: "Ongoing project that will feature photo manager, file manager, and online editor"
      }
    },
    // Contact
    contact: {
      title: "Contact",
      titleBold: "Me",
      namePlaceholder: "Name",
      emailPlaceholder: "Email",
      messagePlaceholder: "How can I help?",
      submitButton: "Get in touch",
      conversationTitle1: "Let's",
      conversationTitle2: "talk",
      conversationTitle3: "to",
      conversationTitle4: "create something special",
      description: "I seek to push the boundaries of creativity to create engaging, user-friendly, and memorable interactive experiences."
    },
    // Footer
    footer: {
      copyright: "@ 2025 Personal Portfolio",
      madeBy: "Made by Andre R"
    }
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('es');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value[k];
      if (!value) return key;
    }
    
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
