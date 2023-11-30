import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movieSlice";
import userReducer from "./userSlice";
import gptReducer from "./gptSlice";
import configreducer from "./configSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    config: configreducer,
  },
});
export default appStore;
