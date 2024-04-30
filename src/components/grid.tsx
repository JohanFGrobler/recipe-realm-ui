// React
import React, {useEffect, useRef, useState} from 'react';

// React window
import {FixedSizeGrid as Grid, GridChildComponentProps} from 'react-window';

// Custom hooks
import useContainerDimensions from '@/shared/hooks/useContainerDimensions';
import useResponsiveColumnCount from '@/shared/hooks/useResponsiveColumnCount';

// Components
import Card from '@/components/card';
import {useAppSelector} from '@/shared/hooks/reduxHooks';
import {SRecipes} from '@/app/recipes/recipeSlice';

export default function VirtualGrid() {
  // Selectors
  const recipes = useAppSelector(SRecipes);

  // Hooks
  const gridRef = useRef<HTMLDivElement>(null);
  const {width, height} = useContainerDimensions(gridRef);
  const columnCount = useResponsiveColumnCount();

  // Constants
  const itemCount = recipes.length;
  const rowCount = Math.ceil(itemCount / columnCount); // Dynamic row count based on column count
  const itemHeight = 475;
  const itemWidth = Math.floor(width / columnCount);

  // State
  const [itemData, setItemData] = useState();

  // Effects
  useEffect(() => {
    setItemData(formatGridData(recipes, columnCount));
  }, [recipes]);

  // Handlers
  const formatGridData = (inputData: any, columnCount: number): any => {
    const result = [];
    for (let i = 0; i < inputData.length; i += columnCount) {
      result.push(inputData.slice(i, i + columnCount));
    }

    return result;
  };

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
        itemData={itemData}
      >
        {({rowIndex, columnIndex, style}) => (
          <div className={'flex items-center justify-center'} style={{...style, width: itemWidth - 3}}>
            {itemData && itemData[rowIndex][columnIndex] ? <Card data={itemData[rowIndex][columnIndex]}/> : null}
          </div>
        )}
      </Grid>
    </div>
  );
};
