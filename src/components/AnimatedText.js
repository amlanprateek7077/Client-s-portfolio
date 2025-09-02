import React from 'react'
import {animate, motion} from "framer-motion"


const heading ={
  initial:{
    opacity:0,
    y:50,
  },
  animate:{
    opacity:1,
    y:0,
    transition:{
      duration:1,
    }
  }
}

const AnimatedText = ({text, className = "" }) => {
  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center text-center sm:py-0 overflow-hidden'>
      <motion.h1 className={`inline-block w-full  text-animatedText font-bold capitalize text-6xl  ${className}`}
      variants={heading}
        initial="initial"
        animate="animate"
      
      >
        {
          text.split(" ").map((word,index)=>
          <span key={word+'-'+index}>
            {word}&nbsp;
          </span>
        )
      }</motion.h1>
    </div>
  )
}

export default AnimatedText