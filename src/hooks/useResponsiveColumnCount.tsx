import {useState, useEffect} from 'react';

export default function useResponsiveColumnCount() {
  const [columnCount, setColumnCount] = useState(5); // Default to large screens

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) { // Tailwind's 'sm' breakpoint
        setColumnCount(1);
      } else if (screenWidth >= 640 && screenWidth < 1024) { // Tailwind's 'md' breakpoint
        setColumnCount(3);
      } else {
        setColumnCount(5);
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial size

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return columnCount;
};
