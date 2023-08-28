import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { IGetResponseRecipes } from '../utils/types';

type RecipesState = {
  list: IGetResponseRecipes;
}

const initialState: RecipesState = {
  list: [],
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    setResipes(state, action: PayloadAction<IGetResponseRecipes>) {
      state.list = action.payload;
    }
  }
});

export const { setResipes } = recipesSlice.actions;
export default recipesSlice.reducer;

  