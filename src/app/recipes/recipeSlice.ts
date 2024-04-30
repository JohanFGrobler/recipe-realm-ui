// Redux
import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

// Types
import type {RootState} from '@/shared/redux/store';
import {Recipe} from '@prisma/client';

// Enums
import {EMode} from '@/shared/enums';

export interface IRecipeSlice {
  data: {
    recipe: Recipe;
    recipes: Recipe[];
  };
  ui: {
    mode: EMode
  };
}

// Define the initial state using that type
const initialState: IRecipeSlice = {
  data: {
    recipe: {} as Recipe,
    recipes: [] as Recipe[]
  },
  ui: {
    mode: EMode.VIEW
  }
};

export const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {}
});

// Actions
export const {} = recipeSlice.actions;

// Selectors
export const SRecipes = (state: RootState) => state.recipes.data.recipes;

export default recipeSlice.reducer;