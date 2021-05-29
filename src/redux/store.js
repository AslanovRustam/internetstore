import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import db from "../db.json";
import actions from "./actions";
import { createReducer } from "@reduxjs/toolkit";

const itemsReducer = (state = db, action) => {
  return state;
};
// const filteredReducer = (state = db, action) => {
//   return state;
// };
const filteredReducer = createReducer(db, {
  [actions.getItemsSuccess]: (state, action) => {
    return state;
  },
  [actions.addItemSuccess]: (state, action) => {
    return [action.payload, ...state];
  },
  [actions.deleteItemSuccess]: (state, action) => {
    return state.filter((item) => item.id !== action.payload);
  },
  [actions.deleteAllItemSuccess]: (state, action) => {
    return [];
  },
  [actions.addItemSuccess]: (state, action) => {
    return [action.payload, ...state];
  },
});

const rootReducer = combineReducers({
  items: itemsReducer,
  filteredItems: filteredReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
