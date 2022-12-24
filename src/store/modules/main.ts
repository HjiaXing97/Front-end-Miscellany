import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "mainSlice",
  initialState: {
    name: "hjx"
  },
  reducers: {
    changeNameActions: (state, { payload }) => {
      state.name = payload;
    }
  }
});
export const { changeNameActions } = mainSlice.actions;
export default mainSlice.reducer;
