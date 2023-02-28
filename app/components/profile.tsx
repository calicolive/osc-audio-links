import { motion } from 'framer-motion';
import {
  FaDiscord,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';
import Logo from 'public/images/osc-logo.png';

const socials = [
  {
    id: 1,
    icon: <FaInstagram className='h-6 w-6 hover:text-stone-400' />,
    link: 'https://www.instagram.com/osc.audio/',
    name: 'Instagram',
  },
  {
    id: 2,
    icon: <FaYoutube className='h-6 w-6 hover:text-stone-400' />,
    link: 'https://www.youtube.com/@oscaudio',
    name: 'Youtube',
  },
  {
    id: 3,
    icon: <FaFacebook className='h-6 w-6 hover:text-stone-400' />,
    link: 'https://www.facebook.com/osc.audio',
    name: 'Facebook',
  },
  {
    id: 4,
    icon: <FaDiscord className='h-6 w-6 hover:text-stone-400' />,
    link: 'https://discord.gg/9jFt9Mec2V',
    name: 'Discord',
  },
  {
    id: 5,
    icon: <FaEnvelope className='h-6 w-6 hover:text-stone-400' />,
    link: 'mailto:oscaudio.co@gmail.com',
    name: 'Email',
  },
];

export default function Profile() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='flex flex-col items-center justify-center text-white pt-14 space-y-4'>
        {/* Image */}
        <img
          src={Logo}
          alt='profile logo'
          className='h-48 w-48 object-cover rounded-full border-4 border-white shadow-xl shadow-slate-900'></img>
        <h1 className='text-2xl tracking-tighter font-bold text-center items-center'>
          OSC Audio
        </h1>
        {/* socials */}
        <ul className='flex space-x-4'>
          {socials.map((social) => {
            return (
              <motion.li
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                transition={{
                  duration: 0.25,
                  delay: social.id * 0.1,
                  type: 'spring',
                  stiffness: 100,
                }}
                key={social.id}>
                <a title={social.name} href={social.link}>
                  {social.icon}
                </a>
              </motion.li>
            );
          })}
        </ul>
      </motion.div>
    </section>
  );
}
