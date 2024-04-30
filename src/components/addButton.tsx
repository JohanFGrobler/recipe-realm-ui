'use client';
import {motion, useAnimation} from 'framer-motion';
import {useEffect} from 'react';

type AddButtonProps = {
  action: any
}

export default function AddButton({action}: AddButtonProps) {
  // Hooks
  const controls = useAnimation();

  // Effects
  useEffect(() => {
    controls.start({scale: 1});
  }, [controls]);

  return (
    <motion.button
      className={`
      absolute bottom-[10rem] right-[5rem] 
      w-[5rem] h-[5rem] 
      bg-primary rounded-full
      border-4 border-black
      shadow-custom
      text-4xl text-white 
      grid place-content-center
      `}
      initial={{opacity: 0, scale: 0.75}}
      animate={{opacity: 1, scale: 1}}
      transition={{duration: 0.5, ease: 'backOut'}}
      whileHover={{scale: 1.1}}
      whileTap={{scale: 0.9}}
      onHoverStart={() => controls.start({scale: 1.1})}
      onHoverEnd={() => controls.start({
        scale: 1,
        transition: {type: 'spring', stiffness: 800, damping: 10, duration: 0.15}
      })}
      onClick={action}
    >
      +
    </motion.button>
  );
}