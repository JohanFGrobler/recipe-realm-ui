// Framer
import {motion, useAnimation} from 'framer-motion';
import {useEffect} from 'react';

// Types
type ContainerProps = {
  animateHover?: boolean,
  className?: string,
  children: any
}

export default function Container({className, animateHover, children}: ContainerProps) {
  // Hooks
  const controls = useAnimation();

  // Effects
  useEffect(() => {
    controls.start({scale: 1});
  }, [controls]);

  return (
    <motion.div
      initial={{opacity: 0, scale: 0.75}}
      animate={{opacity: 1, scale: 1}}
      transition={{duration: 0.5, ease: 'backOut'}}
      whileHover={animateHover ? ({scale: 1.025}) : undefined}
      whileTap={animateHover ? ({scale: 0.9}) : undefined}
      onHoverStart={animateHover ? () => controls.start({scale: 1.05}) : undefined}
      onHoverEnd={animateHover ? () => controls.start({scale: 1, transition: {type: 'spring', stiffness: 800, damping: 10, duration: 0.15}}) : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
}