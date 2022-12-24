import { configureStore } from "@reduxjs/toolkit";

import mainSlice from "./modules/main";

const store = configureStore({
  reducer: {
    mainSlice
  }
});

export default store;
