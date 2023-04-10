import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  list: [],
  new: {},
  error: {},
  pagination: {
    limit: 30,
  },
};

const rootReducerFunc = (state = initialState, action) => {
  return (
    {
      ...state,
      ...action.payload,
    } || {}
  );
};

export const getNewSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    getList: rootReducerFunc,
    getDetail: rootReducerFunc,
    getCategories: rootReducerFunc,
    reset: (state, action) => {
      return { ...initialState, categories: state.categories };
    },
    success: rootReducerFunc,
    failure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { getList, reset, getDetail, getCategories, success, failure } =
  getNewSlice.actions;

export const selectTodo = (state) => state.list;

export default getNewSlice.reducer;
