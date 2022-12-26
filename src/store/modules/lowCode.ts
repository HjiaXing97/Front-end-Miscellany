import { createSlice } from "@reduxjs/toolkit";

const lowCodeSlice = createSlice({
  name: "lowCodeSlice",
  initialState: {
    formList: [],
    itemInfo: {}
  },
  reducers: {
    addFormActions: (state, { payload }) => {
      state.formList = payload;
    },
    itemInfoActions: (state, { payload }) => {
      state.itemInfo = payload;
    }
  }
});
export const { addFormActions, itemInfoActions } = lowCodeSlice.actions;
export default lowCodeSlice.reducer;
