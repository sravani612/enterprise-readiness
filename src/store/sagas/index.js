import { takeEvery } from "redux-saga/effects";
import {
  USER_LOGIN_INITIATE,
  GET_ORG_DETAILS,
} from "../actions/actionTypes";
import {
  userLoginSaga,
  getOrgDetailsSaga,
} from "./API";

export function* root() {
  yield takeEvery(USER_LOGIN_INITIATE, userLoginSaga);
  yield takeEvery(GET_ORG_DETAILS, getOrgDetailsSaga);
}
