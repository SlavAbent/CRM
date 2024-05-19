import { combineReducers } from "@reduxjs/toolkit";
import { modelReducers } from "./model/reducer";
import { viewReducers } from "./view/reducer";

const CRMReducer = combineReducers({
  view: viewReducers,
  model: modelReducers,
});

export const rootReducer = { crm: CRMReducer };
