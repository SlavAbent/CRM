import { CRMPanelsReducer } from "./crm-panels/slice";
import { combineReducers } from "@reduxjs/toolkit";

export const viewReducers = combineReducers({
  crmPanels: CRMPanelsReducer,
});
