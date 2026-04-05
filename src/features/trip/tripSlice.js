import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tripsDurationFilter: "month",
  showOperationsForm: false,
  showUpdatingTripForm: false,
};

export const tripSlice = createSlice({
  name: "trip",
  initialState,
  reducers: {
    changeTripsDurationFilter: (state, action) => {
      state.tripsDurationFilter = action.payload;
    },
    toggleOperationForm: (state, action) => {
      state.showOperationsForm = action.payload;
    },
    toggleUpdateTripForm: (state, action) => {
      state.showUpdatingTripForm = action.payload;
    },
  },
});

export const {
  changeTripsDurationFilter,
  toggleOperationForm,
  toggleUpdateTripForm,
} = tripSlice.actions;

export default tripSlice.reducer;
