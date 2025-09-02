import React from 'react'
import {motion, useScroll} from 'framer-motion'

const LiIcon = ({ reference }) => {
    const { scrollYProgress } = useScroll(
        {
            target: reference,
            offset: ["center end", "center center"]
        }
    );

    return (
        <figure className="absolute left-0 stroke-black">
            <svg 
                width="75" 
                height="75" 
                viewBox="0 0 100 100" 
                pathLength="1" 
                className="rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px] sm:w-[50px] sm:h-[50px]" 
            >
                <circle 
                    cx="75" 
                    cy="50" 
                    r="20" 
                    className="stroke-rose-600 stroke-1 fill-none bg-transparent" 
                />
                <motion.circle 
                    cx="75" 
                    cy="50" 
                    r="20"
                    className="stroke-[5px] fill-white"
                    style={{ pathLength: scrollYProgress }}
                />
                <circle 
                    cx="75" 
                    cy="50" 
                    r="10" 
                    className="stroke-1 fill-rose-600" 
                />
            </svg>
        </figure>
    );
}

export default LiIcon;
