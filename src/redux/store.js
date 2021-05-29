import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import db from "../db.json";
import actions from "./actions";
import { createReducer } from "@reduxjs/toolkit";

const itemsReducer = (state = db, action) => {
  return state;
};

const rootReducer = combineReducers({
  items: itemsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
