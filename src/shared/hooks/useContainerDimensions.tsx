import { useState, useLayoutEffect, useRef } from 'react';

export default function useContainerDimensions(ref: React.RefObject<HTMLDivElement>) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    function updateSize() {
      if (ref.current) {
        setDimensions({
          width: ref.current.offsetWidth,
          height: ref.current.offsetHeight,
        });
      }
    }
    window.addEventListener('resize', updateSize);
    updateSize(); // Initial call to set size
    return () => window.removeEventListener('resize', updateSize);
  }, [ref]);

  return dimensions;
}
