import { createSlice } from "@reduxjs/toolkit";

export interface authModalSlice {
  isOpen: boolean;
}

const initialState: authModalSlice = {
  isOpen: false,
};

export const authModalSlice = createSlice({
  name: "authModal",
  initialState,
  reducers: {
    onOpen: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isOpen = true;
    },
    onClose: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isOpen = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onOpen, onClose } = authModalSlice.actions;

export default authModalSlice.reducer;
