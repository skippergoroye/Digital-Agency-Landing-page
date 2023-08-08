import React from 'react';
import { Project } from '../constants/index'


const Stats = () => {
  return (
    <section className='py-14 bg-[#FAFFFB] sm:px-16 px-6'>
      <div className='flex md:flex-row md: flex-col items-start md:space-x-20 gap-10 justify-center'>
        {Project.map((proj) => (
          <div key={proj.id} className="border-red-500 z-50">
            <img src={proj.icon}  className='w-[20px]'/>
            <p>{proj.title}</p>
            <h1>{proj.stat}</h1>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats