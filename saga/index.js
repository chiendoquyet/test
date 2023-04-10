import { all, takeLatest } from "redux-saga/effects";
import { getNewsDetail, getCategory, getNewList } from "./newsList.saga";
import { getDetail, getCategories, getList } from "../redux/root";

export default function* rootSaga() {
  yield all([
    takeLatest(getList, getNewList),
    takeLatest(getDetail, getNewsDetail),
    takeLatest(getCategories, getCategory),
  ]);
}
