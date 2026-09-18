import { FaEnvelope, FaLinkedinIn, FaGithub } from 'react-icons/fa'

export const profile = {
  email: 'romeroandre499@gmail.com',
  phone: '+593 981636816',
  phoneHref: 'tel:+593981636816',
  resume: '/assets/resume.pdf',
}

export const socials = [
  {
    name: 'Gmail',
    Icon: FaEnvelope,
    url: `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=Contacto desde tu sitio web`,
  },
  { name: 'LinkedIn', Icon: FaLinkedinIn, url: 'https://www.linkedin.com/in/driu/' },
  { name: 'GitHub', Icon: FaGithub, url: 'https://github.com/yiixaj' },
]
