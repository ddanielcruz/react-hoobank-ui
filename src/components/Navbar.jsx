import { useState } from 'react'

import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(prev => !prev)

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <a href="#home" className="cursor-pointer">
        <img src={logo} alt="HooBank" className="w-[124px] h-8" />
      </a>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map(({ id, title }, idx) => (
          <li
            key={id}
            className={`font-poppins cursor-pointer text-white hover:opacity-90 ${
              idx === navLinks.length - 1 ? '' : 'mr-10'
            }`}
          >
            <a href={`#${id}`}>{title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={menuOpen ? close : menu}
          alt="Menu"
          className="w-7 h-7 object-contain"
          onClick={toggleMenu}
        />

        <aside
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map(({ id, title }, idx) => (
              <li
                key={id}
                className={`font-poppins cursor-pointer text-white ${
                  idx === navLinks.length - 1 ? '' : 'mb-4'
                }`}
              >
                <a href={`#${id}`} onClick={toggleMenu}>
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </nav>
  )
}
