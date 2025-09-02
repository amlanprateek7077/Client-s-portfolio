import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ examname, school, time, subject, grade }) => {
  const ref=useRef(null);
  return (
    <li ref={ref} className='my-8 flex flex-col first:mt-0 last:mb-0 items-start justify-center w-[60%] md:w-[80%] shadow-2xl bg-gray-800 rounded-bl-2xl rounded-tr-2xl border'>
      <LiIcon reference={ref}/>
      <div className='p-6 flex flex-col gap-2'>
        <h3 className='text-rose-400 font-semibold'>{examname}</h3>
        <hr />
        <span className=' text-white text-sm'>{school}</span>
        <span className=' text-rose-600 text-xs'>
          {time} | {subject}
        </span>
        <p className='text-pink-100 text-sm '>
         Grade: <span>{grade}</span>
        </p>
      </div>
    </li>

  )
}


const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  })
  return (
    <div className='my-64 md:my-32 sm:my-20 xs:my-10'>
      <h2 className='font-bold text-6xl mb-32 w-full text-center md:text-4xl'> My Education</h2>
      <div ref={ref} className='w-[75%] mx-auto relative ld:w-[90%] md:w-full'>
        <div
          style={{ scaleY: scrollYProgress }}
          className='absolute  left-9 top-0 w-[4px] h-full bg-black rounded-full origin-top md:w-[2px] md-left-[30px] xs:left-[20px]' />
         
        <ul className='w-full flex flex-col items-center justify-center ml-4 xs:ml-2'>
          <Details
            examname="Secondary Education"
            school="Durga Prasad Saraf Vidyapeeth"
            time="Year:2020"
            //subject='Phy, Chem, Math, Bio'
            grade="96.6%"
          />
          <Details
            examname="Higher Secondary (H.S)"
            school="DAV Unit 8 "
            subject='Phy, Chem, Math, Bio'
            time="Year:2022"
            grade="90.4%"
          />
          <Details
           examname="B.Tech "
           school="Parala Maharaja Engineering College"
           time="Year:2023-2027"
           grade="9 Sgpa"
          />
         
        </ul>
      </div>
    </div>
  )
}

export default Education 