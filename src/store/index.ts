import { configureStore } from "@reduxjs/toolkit";
import lowCodeSlice from "./modules/lowCode";

const store = configureStore({
  reducer: {
    lowCodeSlice
  }
});

export default store;
