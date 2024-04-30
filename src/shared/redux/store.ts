import { configureStore } from '@reduxjs/toolkit'

// Slices
import recipeSlice, {IRecipeSlice} from '@/app/recipes/recipeSlice';

export const store = () => {
  return configureStore({
    reducer: {
      recipes: recipeSlice
    },
  })
}

export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']