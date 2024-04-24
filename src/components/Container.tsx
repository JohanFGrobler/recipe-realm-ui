// Framer
import {motion} from 'framer-motion';

// Types
type ContainerProps = {
  className?: string,
  children: any
}

export default function Container({className, children}: ContainerProps) {
  return (
    <motion.div
      initial={{opacity: 0, scale: 0.75}}
      animate={{opacity: 1, scale: 1}}
      transition={{duration: 0.5, ease: 'backOut'}}
      className={className}
    >
      {children}
    </motion.div>
  );
}