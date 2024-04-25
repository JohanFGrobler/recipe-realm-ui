// React
import React, { useRef } from 'react';

// React window
import { FixedSizeGrid as Grid } from 'react-window';

// Custom hooks
import useContainerDimensions from '@/hooks/useContainerDimensions';
import useResponsiveColumnCount from '@/hooks/useResponsiveColumnCount';

// Components
import Card from '@/components/Card';

export default function VirtualGrid() {
  // Hooks
  const gridRef = useRef<HTMLDivElement>(null);
  const { width, height } = useContainerDimensions(gridRef);
  const columnCount = useResponsiveColumnCount();

  // Constants
  const itemCount = 1000;
  const rowCount = Math.ceil(itemCount / columnCount); // Dynamic row count based on column count
  const itemHeight = 475;
  const itemWidth = Math.floor(width / columnCount);

  const data = Array.from({ length: itemCount }, (_, index) => `Item ${Math.floor(index / columnCount)}, ${index % columnCount}`);

  return (
    <div ref={gridRef} className="w-full h-full overflow-x-hidden flex justify-center">
      <Grid
        className="scrollbar-hide"
        height={height - (5 * 16)} // Adjust height as necessary
        width={width}
        columnCount={columnCount}
        rowCount={rowCount}
        rowHeight={itemHeight}
        columnWidth={itemWidth}
        itemData={data}
      >
        {({ columnIndex, rowIndex, style }) => (
          <div className="flex items-center justify-center" style={{...style, width: itemWidth - 3}}>
            <Card />
          </div>
        )}
      </Grid>
    </div>
  );
};
