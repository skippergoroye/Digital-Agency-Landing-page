import React from 'react'
import { Logo, HeroImage } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={Logo} alt="digital-agency" className="w-[156px] h-[30px]" />
    </nav>
  )
}

export default Navbar