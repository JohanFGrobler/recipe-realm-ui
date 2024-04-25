import {useState, useEffect} from 'react';

export default function useResponsiveColumnCount() {
  const [columnCount, setColumnCount] = useState(5); // Default to large screens

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setColumnCount(1);
      } else if (screenWidth >= 768 && screenWidth < 1280) {
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
