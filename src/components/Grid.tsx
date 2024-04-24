// React
import React, {useRef} from 'react';

// React window
import {FixedSizeGrid as Grid} from 'react-window';

// Custom hooks
import useContainerDimensions from '@/hooks/useContainerDimensions'; // Assuming the hook is stored in a hooks folder
import useResponsiveColumnCount from '@/hooks/useResponsiveColumnCount'; // The new hook

export default function VirtualGrid() {
  // Hooks
  const gridRef = useRef<HTMLDivElement>(null);
  const {width, height} = useContainerDimensions(gridRef);
  const columnCount = useResponsiveColumnCount(); // Get dynamic column count based on screen size

  // Constants
  const rowCount = 20;
  const itemHeight = 450;
  const itemWidth = Math.floor(width / columnCount); // Adjust width dynamically

  return (
    <div ref={gridRef} className="w-full h-full overflow-x-hidden">
      <Grid
        className={'scrollbar-hide overflow-x-hidden'}
        height={height - (5 * 16)}
        width={width}
        columnCount={columnCount}
        rowCount={rowCount}
        rowHeight={itemHeight}
        columnWidth={itemWidth - 3}
        itemData={Array.from({length: rowCount * columnCount}, (_, index) => `Item ${Math.floor(index / columnCount)}, ${index % columnCount}`)}
      >
        {({columnIndex, rowIndex, style}) => (
          <div className="flex items-center justify-center border border-gray-200 text-white" style={style}>
            {`Item ${rowIndex * columnCount + columnIndex}`}
          </div>
        )}
      </Grid>
    </div>
  );
};
