// Next
import {useEffect} from 'react';

// Framer
import {motion, useAnimation} from 'framer-motion';

// Types
type ButtonNavProps = {
  className?: string;
  filled?: boolean;
  label: string;
  href: string;
}

export default function ButtonNav({className, filled, label, href}: ButtonNavProps) {
  // Hooks
  const controls = useAnimation();

  // Effects
  useEffect(() => {
    controls.start({scale: 1});
  }, [controls]);

  return (
    <motion.a
      initial={{opacity: 0, scale: 0.75}}
      animate={{opacity: 1, scale: 1}}
      transition={{duration: 0.8, ease: 'backOut'}}
      whileHover={{scale: 1.025}}
      whileTap={{scale: 0.9}}
      onHoverStart={() => controls.start({scale: 1.05})}
      onHoverEnd={() => controls.start({scale: 1, transition: {type: 'spring', stiffness: 800, damping: 10, duration: 0.15}})}
      href={href}
      className={`${className ? ` ${className} ` : ''}w-full p-2 ${filled ? 'bg-primary' : 'bg-transparent'} text-white rounded-lg font-medium text-center`}
    >
      {label}
    </motion.a>
  );
}