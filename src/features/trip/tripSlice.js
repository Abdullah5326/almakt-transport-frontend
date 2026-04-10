import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tripsDurationFilter: "month",
  showOperationsForm: false,
  showUpdatingTripForm: false,
  tripsDurationType: "daily",
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
    changeTripsDurationType: (state, action) => {
      state.tripsDurationType = action.payload;
    },
  },
});

export const {
  changeTripsDurationFilter,
  toggleOperationForm,
  toggleUpdateTripForm,
  changeTripsDurationType,
} = tripSlice.actions;

export default tripSlice.reducer;
