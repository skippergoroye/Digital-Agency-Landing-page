import React from 'react';
import { Project } from '../constants/index'


const Stats = () => {
  return (
    <section className='py-14 bg-[#FAFFFB] sm:px-16 px-6'>
      <div className='flex md:flex-row md: flex-col md:space-x-10 gap-5 justify-center'>
        {Project.map((proj) => (
          <div key={proj.id} className="border-red-500 z-50 flex flex-col items-center gap-2">
            <img src={proj.icon}  className='w-[70px] H-[70px]'/>
            <p>{proj.title}</p>
            <h1 className='text-2xl text-[#20B15A] font-poppins '>{proj.stat}</h1>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats