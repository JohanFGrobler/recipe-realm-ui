// React
import React, {useEffect, useRef} from 'react';

// React window
import {FixedSizeGrid as Grid, GridChildComponentProps} from 'react-window';

// Custom hooks
import useContainerDimensions from '@/hooks/useContainerDimensions';
import useResponsiveColumnCount from '@/hooks/useResponsiveColumnCount';

// Components
import Card from '@/components/Card';

export default function VirtualGrid() {
  // To be removed
  const inputData = [
    {name: 'Pasta Primavera', time: 25, servings: 4},
    {name: 'Chicken Curry', time: 30, servings: 3},
    {name: 'Beef Stroganoff', time: 40, servings: 5},
    {name: 'Vegetable Stir Fry', time: 20, servings: 2},
    {name: 'Lemon Garlic Salmon', time: 22, servings: 4},
    {name: 'Tomato Soup', time: 15, servings: 4},
    {name: 'Grilled Cheese Sandwich', time: 10, servings: 1},
    {name: 'Caesar Salad', time: 15, servings: 2},
    {name: 'Spinach Quiche', time: 45, servings: 6},
    {name: 'Mushroom Risotto', time: 35, servings: 4},
    {name: 'Shakshuka', time: 30, servings: 4},
    {name: 'Tofu Tacos', time: 25, servings: 3},
    {name: 'Banana Bread', time: 60, servings: 8}
  ];

  // Hooks
  const gridRef = useRef<HTMLDivElement>(null);
  const {width, height} = useContainerDimensions(gridRef);
  const columnCount = useResponsiveColumnCount();

  const formatGridData = (inputData: any, columnCount: number) => {
    const result = [];
    for (let i = 0; i < inputData.length; i += columnCount) {
      result.push(inputData.slice(i, i + columnCount));
    }

    return result;
  };

  const formattedData = formatGridData(inputData, columnCount);

  // Constants
  const itemCount = inputData.length;
  const rowCount = Math.ceil(itemCount / columnCount); // Dynamic row count based on column count
  const itemHeight = 475;
  const itemWidth = Math.floor(width / columnCount);


  return (
    <div
      ref={gridRef}
      className={'h-[100svh] w-[100svw] sm:h-screen sm:w-screen overflow-x-hidden flex justify-center'}
    >
      <Grid
        className={'scrollbar-hide'}
        height={height - (5 * 16)} // Gets rid of height from header
        width={width}
        columnCount={columnCount}
        rowCount={rowCount}
        rowHeight={itemHeight}
        columnWidth={itemWidth}
        itemData={formattedData}
      >
        {({rowIndex, columnIndex, style}) => (
          <div className={'flex items-center justify-center'} style={{...style, width: itemWidth - 3}}>
            {formattedData[rowIndex][columnIndex] ? <Card data={formattedData[rowIndex][columnIndex]}/> : null}
          </div>
        )}
      </Grid>
    </div>
  );
};
