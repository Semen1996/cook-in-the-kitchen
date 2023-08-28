import { configureStore } from "@reduxjs/toolkit";
import recipesSlice from "./recipesSlice";
import popupSlice from "./popupSlice";


const store = configureStore({
  reducer: {
    recipes: recipesSlice,
    popup: popupSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;