import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tripsDurationFilter: "month",
};

export const tripSlice = createSlice({
  name: "trip",
  initialState,
  reducers: {
    changeTripsDurationFilter: (state, action) => {
      state.tripsDurationFilter = action.payload;
    },
  },
});

export const { changeTripsDurationFilter } = tripSlice.actions;

export default tripSlice.reducer;
