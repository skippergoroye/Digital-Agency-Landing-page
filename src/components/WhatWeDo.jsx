import React from 'react'
import { Heart, Activity, Work } from '../assets'
import { Business} from '../constants/index'
import { AiOutlineArrowRight } from "react-icons/ai";


const WhatWeDo = () => {
  return (
    <section className='py-14 w-full sm:px-16 px-6'>
      <div className="flex flex-col items-start">
          <h6 className='text-[#20B15A] font-poppins text-xs my-2'>WHAT WE DO</h6>
          <h3 className='text-[#000000] text-xl font-poppins font-medium max-w-[330px] break-words'>We provide the Perfect Solution to your business growth</h3>
      </div>


      <div className='flex md:flex-row flex-col py-6 justify-between mt-10 md:ml-10'>
        {Business.map(({ id, icon, title, content,}) => (
          <div key={id}>
            <div className='mb-6'>
              <img src={icon} className='w-[50px] h-[50px] bg-[#D7F5DC] p-[15px] rounded-lg'/>
            </div>
          
            <div>
              <h1 className='text-[#000000] font-poppins text-[15px] font-medium'>{title}</h1>
              <p className='font-light'>{content}</p>
            </div>

            <div className='mt-12 flex items-center gap-2 mb-10' >
              <p>Learn More</p>
              <AiOutlineArrowRight />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhatWeDo
