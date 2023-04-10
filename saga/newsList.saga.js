import { ApiConstant } from "@root/const";
import { AppService } from "@root/services";
import { call, put, select } from "redux-saga/effects";
import { success, failure } from "@root/redux/root.js";

export function* getNewsDetail(action) {
  try {
    const id = action.payload;

    const response = yield call(AppService.getNewDetailService, id);
    const responseData = response.data;

    if (response.status === ApiConstant.STT_OK && responseData.status === 1) {
      yield put(
        success({
          new: responseData.data,
        })
      );
    } else {
      yield put(
        failure({
          error: responseData,
        })
      );
    }
  } catch (error) {
    yield put(
      failure({
        error,
      })
    );
  }
}

export function* getCategory() {
  try {
    const response = yield call(AppService.getCategoryService);
    const responseData = response.data;

    if (response.status === ApiConstant.STT_OK && responseData.status === 1) {
      yield put(
        success({
          categories: responseData.data,
        })
      );
    } else {
      yield put(
        failure({
          error: responseData,
        })
      );
    }
  } catch (error) {
    yield put(
      failure({
        error,
      })
    );
  }
}

export function* getNewList(action) {
  try {
    const id = action.payload;
    const listRedux = yield select((state) => state.app.list);

    const response = yield call(
      AppService.getNewListService,
      id,
      listRedux.length
    );
    const responseData = response.data;

    if (response.status === ApiConstant.STT_OK && responseData.status === 1) {
      const list = responseData.data;

      const newList = [...listRedux, ...list];

      yield put(
        success({
          list: newList,
          pagination: { limit: list.length },
        })
      );
    } else {
      yield put(
        failure({
          error: responseData,
        })
      );
    }
  } catch (error) {
    yield put(
      failure({
        error,
      })
    );
  }
}
