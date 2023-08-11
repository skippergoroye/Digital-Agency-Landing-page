import React from 'react'
import { Logo, HeroImage } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
  return (
    <nav className="w-full h-[100p] flex py-6 justify-between items-center">
      <img src={Logo} alt="digital-agency" className="w-[120px] h-[20px] cursor-pointer" />
     
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[12px] ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} text-black`}
          > 
            <a href={`#${nav.id}`}>
              {nav.title} 
            </a>
              <img src={nav.icon}  className='w-[10px] absolute top-[34px] right-[430px]' />              
          </li>
        ))}
      </ul>

      <div className='mx-5 space-x-3 text-[12px] hidden xs:flex'>
        <button className="border border-[#20B15A] p-1 rounded-lg w-16 focus:cursor-auto">Login</button>
        <button className="text-white bg-[#20B15A] p-1 rounded-lg w-16">Register</button>
      </div>
    </nav>
  )
}

export default Navbar