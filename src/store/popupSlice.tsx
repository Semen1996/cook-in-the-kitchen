import { PayloadAction, createSlice} from '@reduxjs/toolkit';

type PopupState = {
  show: boolean;
  id: number;
}

const initialState: PopupState = {
  show: false,
  id: 0,
};

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    openPopup(state, action: PayloadAction<number>) {
      state.show = true;
      state.id = action.payload;
    },
    closePopup(state) {
      state.show = false;
    }
  }
});

export const { openPopup, closePopup } = popupSlice.actions;
export default popupSlice.reducer;

  