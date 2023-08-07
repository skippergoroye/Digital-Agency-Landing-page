import React from 'react'
import { Logo, HeroImage } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={Logo} alt="digital-agency" className="w-[120px] h-[20px]" />

     
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[12px] ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} text-black`}
            >
              <a href={`#${nav.id}`}>
                {nav.title} 
                          
              </a>
            </li>
          ))}
      </ul>


      <div className='mx-5 space-x-3 cursor-pointer text-[12px]'>
       <button className="border border-[#20B15A] p-2">Login</button>
       <button className="text-white bg-[#20B15A] p-1">Register</button>

      </div>
     

     
     
      
    </nav>
  )
}

export default Navbar