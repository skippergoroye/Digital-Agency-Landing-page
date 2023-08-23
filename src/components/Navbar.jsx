import React, { useState } from 'react'
import { Logo, HeroImage } from '../assets'
import { navLinks } from '../constants'
import { Close, LogoMobile, Menu } from "../assets";


const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  console.log(toggle)


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

      <div className='mx-5 space-x-3 text-[12px] hidden md:flex'>
        <button className="border border-[#20B15A] p-1 rounded-lg w-16 focus:cursor-auto">Login</button>
        <button className="text-white bg-[#20B15A] p-1 rounded-lg w-16">Register</button>
      </div>





      <div className="flex ss:hidden flex-1 justify-end items-center">
        <img
          src={toggle ? Close : Menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain z-10"
          onClick={() => setToggle((prev) => !prev)}
        />


        {/* mobile toggle content  */}
          <div id="menu" className={`${
              toggle ? "flex" : "hidden"
            } absolute top-0 bottom-0 flex-col left-0 self-end  w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black`}>
            <a href="#" className="hover:text-pink-500">About</a>
            <a href="#" className="hover:text-pink-500">Careers</a>
            <a href="#" className="hover:text-pink-500">Events</a>
            <a href="#" className="hover:text-pink-500">Products</a>
            <a href="#" className="hover:text-pink-500">Support</a>
          </div>
      </div>
    </nav>
  )
}

export default Navbar