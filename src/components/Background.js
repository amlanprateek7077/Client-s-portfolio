import { motion } from 'framer-motion';

const SubtleBackground = () => {
  const particleVariants = {
    initial: { opacity: 0, scale: 0.5 },
    animate: {
      opacity: [0, 0.6, 0],
      scale: [0.5, 1.2, 0.5],
      y: [0, -10, 0],
      x: [0, 10, -10],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <motion.div
        className="w-full h-full bg-gradient-to-r from-orange-300 via-pink-400 to-purple-500"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Floating particles */}
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-full opacity-30 w-12 h-12 absolute"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          variants={particleVariants}
          initial="initial"
          animate="animate"
        />
      ))}
    </div>
  );
};

export default SubtleBackground;
