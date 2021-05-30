import { createAction } from "@reduxjs/toolkit";

const getItemsRequest = createAction("getItemsRequest");
const getItemsSuccess = createAction("getItemsSuccess");
const getItemsError = createAction("getItemsError");

const addItemRequest = createAction("addItemRequest");
const addItemSuccess = createAction("addItemSuccess");
const addItemError = createAction("addItemError");

const deleteItemRequest = createAction("deleteItemRequest");
const deleteItemSuccess = createAction("deleteItemSuccess");
const deleteItemError = createAction("deleteItemError");

const deleteAllItemRequest = createAction("deleteAllItemRequest");
const deleteAllItemSuccess = createAction("deleteAllItemSuccess");
const deleteAllItemError = createAction("deleteAllItemError");

const setUserRequest = createAction("setUserRequest");
const setUserSuccess = createAction("setUserSuccess");
const setUserError = createAction("setUserError");

export default {
  addItemRequest,
  addItemSuccess,
  addItemError,
  deleteItemRequest,
  deleteItemSuccess,
  deleteItemError,
  getItemsRequest,
  getItemsSuccess,
  getItemsError,
  deleteAllItemRequest,
  deleteAllItemSuccess,
  deleteAllItemError,
  setUserRequest,
  setUserSuccess,
  setUserError,
};
