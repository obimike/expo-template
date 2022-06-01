import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOrigin } = navSlice.actions;

//Selector

export default navSlice.reducer;
