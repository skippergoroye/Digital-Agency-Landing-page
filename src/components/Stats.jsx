import React from 'react';
import { Project } from '../constants/index'

console.log(Project)


const Stats = () => {
  return (
    <section className='py-14 bg-[#FAFFFB] sm:px-16 px-6'>
      <div className='flex md:flex-row md: flex-col items-start gap-10 justify-center'>
        {Project.map((proj) => (
          <div classsName="border-red-500 z-50">
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