import React from 'react';
import { Project } from '../constants/index'


const Stats = () => {
  return (
    <section className='py-14 bg-[#FAFFFB] sm:px-16 px-16'>
      <div className='flex md:flex-row flex-col md:space-x-16 items-center justify-center py-4'>
        {Project.map((proj) => (
          <div key={proj.id} className="border-red-500 flex flex-col items-center justify-center md:gap-3 gap-6 mb-10 md:px-2">
            <img src={proj.icon}  className='w-[70px] H-[70px] object-contain'/>
            <p className='text-center font-poppins'>{proj.title}</p>
            <h1 className='text-2xl text-[#20B15A] font-poppins'>{proj.stat}</h1>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats