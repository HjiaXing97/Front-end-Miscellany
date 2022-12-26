import { createSlice } from "@reduxjs/toolkit";

const lowCodeSlice = createSlice({
  name: "lowCodeSlice",
  initialState: {
    formList: []
  },
  reducers: {
    addFormActions: (state, { payload }) => {
      state.formList = payload;
    }
  }
});
export const { addFormActions } = lowCodeSlice.actions;
export default lowCodeSlice.reducer;
