import { put } from "redux-saga/effects";
import {
  userLoginSuccess,
  exceptionError,
  loadingStart,
  exceptionSessionExpire,
  exceptionAPIError,
  getOrgDetailsSuccess,
} from "../actions";
import axios from "axios";
import Cookies from "js-cookie";
import eventEmitter from "../emitter/emitter";
export const url = "http://localhost/";
Cookies.set("ABC", "ABC");
const api = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },

  timeout: 600000,
});
const navMoniter = (response) => {};
//api.addMonitor(navMoniter);

export function* userLoginSaga(actions) {
  yield put(loadingStart());
  var data = JSON.stringify({
    usr: actions.username,
    pwd: actions.password,
  });
  try {
    const response = yield api.post("api/method/login", data);
    yield put(userLoginSuccess(response, actions.submitted));
  } catch (error) {
    yield put(exceptionError(error.toString()));
  }
}

export function* getOrgDetailsSaga(actions) {
  yield put(loadingStart());
  var data = {};
  try {
    const response = yield api.get(
      "api/method/excelrate.api.organization_details",
      data,
      {
        headers: {
          Authorization: "token " + localStorage.getItem("token"),
        },
      }
    );
    if (response.ok) {
      yield put(getOrgDetailsSuccess(response));
    } else if (response.status === 403) {
      if (response.data.hasOwnProperty("_server_messages")) {
        yield put(exceptionSessionExpire(response.data.exception));
      } else if (response.data.hasOwnProperty("_error_message")) {
        yield put(exceptionAPIError(response.data._error_message));
      }
    } else if (response.status === 417) {
      yield put(
        exceptionAPIError(
          JSON.parse(JSON.parse(response.data._server_messages.message))
        )
      );
    } else {
      yield put(exceptionError(response.data.exception));
    }
  } catch (error) {
    yield put(exceptionError(error.toString()));
  }
}

