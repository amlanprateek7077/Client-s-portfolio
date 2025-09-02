import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const TypingEffect = ({ text,className }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => {
        if (prev < text.length) {
          setDisplayedText((prevText) => prevText + text[prev]);
          return prev + 1;
        } else {
          clearInterval(timer);
          return prev;
        }
      });
    }, 100); // Adjust typing speed here (in milliseconds)

    return () => clearInterval(timer);
  }, [text]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={className}
    >
      <span>{displayedText}</span>
    </motion.div>
  );
};



export default TypingEffect;
