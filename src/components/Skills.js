
import React from 'react';
import { motion } from 'framer-motion';
import { ManComIcon, CssIcon, HtmlIcon, MongoDbIcon, NextJsIcon, NodeJsIcon, ReactjsIcon } from './Icons';
import about1 from '../../public/images/about1.png'

const Skill=({icon,x,y})=>{
  return(
    
    <motion.div className='flex absolute cursor-pointer rounded-full items-center'
    whileHover={{scale:1.05}}
    initial={{x:0,y:0}}
    whileInView={{x:x,y:y}}
    transition={{duration:1.5}}
    >
   {icon}
  </motion.div>
  )
}

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-6xl w-full mt-32 text-center md:text-4xl">Skills</h2>

      <div className=" flex w-full h-screen items-center justify-center relative rounded-full mt-20 md:mt-5 shadow-2xl">
        <motion.div className='absolute grid cursor-pointer items-center '>
          <ManComIcon className="md:w-20 h-auto"/>
        </motion.div>
        <Skill icon={<CssIcon/>} x="-7vw" y="-20vw"/>
        <Skill icon={<HtmlIcon/>} x="-28vw" y="0vw"/>
        <Skill icon={<ReactjsIcon/>} x="23vw" y="-11vw"/>
        <Skill icon={<NextJsIcon/>} x="-22vw" y="-12vw"/>
        <Skill icon={<NodeJsIcon/>} x="9vw" y="-20vw"/>
        <Skill icon={<MongoDbIcon/>} x="28vw" y="-0vw"/>
      </div>
    </>
  );
};

export default Skills;
