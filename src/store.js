import { configureStore } from "@reduxjs/toolkit";
import tripReducer from "./features/trip/tripSlice";

export default configureStore({
  reducer: {
    trip: tripReducer,
  },
});
