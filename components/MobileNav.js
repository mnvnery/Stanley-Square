import { useState } from 'react'
import Link from 'next/link'
import headerNavLinks from '../data/headerNavLinks'
import siteMetadata from '../data/siteMetadata'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { IoIosPin } from 'react-icons/io'

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden'
      }
      return !status
    })
  }

  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  }
  const item = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      x: 400,
      opacity: 1,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  }

  return (
    <div>
      <button
        type="button"
        className="bg-white text-black px-5 py-1 rounded-full"
        aria-label="Toggle Menu"
        onClick={onToggleNav}
      >
        MENU
      </button>
      <div
        className={`fixed top-0 left-0 z-10 h-full w-full transform duration-500 ease-in-out ${
          navShow ? 'translate-x-0' : 'translate-x-full'
        } ${navShow ? 'bg-white' : 'bg-transparent'}`}
      >
        <div className="flex border-b border-white text-xl justify-center md:justify-start bg-black text-white">
            <div className="uppercase md:border-r border-white px-6 py-2">
                <a className="hover:text-tpurple">Twitter/</a>
                <a className="hover:text-tred">Instagram/</a>
                <a className="hover:text-tpink">Facebook</a>
            </div>
        </div>
        <div className="flex items-center justify-between bg-black px-4 py-6">
          <Link href="/">
            <div onClick={onToggleNav}>
              <Image src={'/logo-mobile.svg'} width={70} height={70} />
            </div>
          </Link>
          <button
            type="button"
            className="mr-5 mt-3 h-8 w-8 "
            aria-label="Toggle Menu"
            onClick={onToggleNav}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 55 55"
              overflow="visible"
              stroke="white"
              strokeWidth="3"
            >
              <line x2="50" y2="50" />
              <line x1="50" y2="50" />
            </svg>
          </button>
        </div>
        <nav className="fixed h-full w-full bg-black">
          <motion.div initial={false} animate={navShow ? 'open' : 'closed'} variants={variants} className='flex flex-col items-center space-y-2'>
            {headerNavLinks.map((link) => (
              <motion.div variants={item} key={link.title}>
                <Link
                  href={link.href}
                >
                  <a className="text-2xl font-bold uppercase tracking-wide" onClick={onToggleNav}>
                  <div
                    className={`py-2 px-5 bg-${link.color} text-black inline-block text-center rounded-full`}
                  >
                    {link.title}
                  </div>
                  </a>
                </Link>
              </motion.div>
            ))}
            <motion.div variants={item} className="w-full">
              <div className="grid grid-cols-2 px-5 py-6 w-full border-t border-white mt-8">
                <div className='leading-none text-lg'>
                  <div className='text-tred'>Stanley Square</div>
                  <div>Sale</div>
                  <div>Manchester</div>
                  <div>M33 7ZZ</div>
                  <div className='mt-3'>
                      <a href={`tel:${siteMetadata.phone}`} className="hover:underline">
                        {siteMetadata.phone}
                      </a>
                      <br />
                      <a href={`mailto:${siteMetadata.email}`} className="hover:underline">
                        {siteMetadata.email}
                      </a>
                  </div>
                </div>
                <div>
                  <div className="flex grow items-center justify-center text-white text-lg"><IoIosPin /> <a href={siteMetadata.maps} target="_blank" rel='noreferrer'>FIND US</a></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </nav>
      </div>
    </div>
  )
}

export default MobileNav
