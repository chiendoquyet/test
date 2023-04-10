// src/app/store.js
import createSagaMiddleware from "redux-saga";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./root";
import rootSaga from "../saga";

// disalbe thunk and add redux-saga middleware
const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

export default configureStore({
  reducer: {
    app: rootReducer,
  },
  middleware,
});

sagaMiddleware.run(rootSaga);
