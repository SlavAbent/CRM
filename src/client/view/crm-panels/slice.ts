import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { CRM_PANELS } from "./constants";

const initialState = {};

export const CRMPanels = createSlice({
  name: CRM_PANELS,
  initialState,
  reducers: {
    clearCRMPanels: () => initialState,
  },
  extraReducers(builder) {
    // builder
    // .addCase(some.pending, (state) => {
    //   state.isLoading = true;
    // })
  },
});

export const { clearCRMPanels } = CRMPanels.actions;

export const CRMPanelsReducer = CRMPanels.reducer;
