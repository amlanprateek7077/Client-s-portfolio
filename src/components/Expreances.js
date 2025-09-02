import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ position, company, time, addres, work }) => {
  const ref=useRef(null);
  return (
    <li ref={ref} className='my-8 flex flex-col first:mt-0 last:mb-0 items-center justify-center w-[60%] md:w-[80%] shadow-2xl bg-gray-800 rounded-bl-2xl rounded-tr-2xl border '>
       <LiIcon reference={ref}/>
      <div className='p-6 flex flex-col gap-2'>
        <h3 className='text-rose-400 font-semibold'>{position}</h3>
        <hr />
        <span className=' text-white text-sm'>{company}</span>
        <span className=' text-rose-600 text-xs'>
          {time} | {addres}
        </span>
        <p className='text-gray-300 text-sm '>
        {work}
        </p>
      </div>
    </li>

  )
}


const Expreances = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  })
  return (
    <div className='my-64 md:my-32 sm:my-20 xs:my-10'>
      <h2 className='font-bold text-6xl mb-32 w-full text-center md:text-4xl'>Experiences</h2>
      <div ref={ref} className='w-[75%] mx-auto relative ld:w-[90%] md:w-full'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute  left-9 top-0 w-[4px] h-full bg-black rounded-full origin-top md:w-[2px] md-left-[30px] xs:left-[20px]' />
         
        <ul className='w-full flex flex-col items-center justify-center ml-4 xs:ml-2'>
          <Details
            position="Development of surveillance system for selecting the most optimal target/ threat internship"
            company="DRDO, Ministry of Defence, Govt. of India"
            time=" June 5 2025– July 5 2025"
            addres="Pxe, Chandipur, Balasore"
            work="Created a user friendly page that guided us to calculate the optimal target for deactivation within a particular range."
          />
        
        </ul>
      </div>
    </div>
  )
}

export default Expreances 