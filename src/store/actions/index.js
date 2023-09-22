import {
  LOADING_START,
  LOGIN_SUCCESS,
  EXCEPTION_ERROR,
  RESET_EXCEPTION_ERROR,
  USER_LOGIN_INITIATE,
  GET_ORG_DETAILS,
  GET_ORG_DETAILS_SUCCESS,
  SESSION_EXPIRE_ERROR,
  SESSION_API_ERROR,
  GET_ALL_QUESTIONS,
} from "./actionTypes";

export const exceptionError = (response) => {
  return {
    type: EXCEPTION_ERROR,
    ISError: response,
  };
};

export const loadingStart = () => {
  return {
    type: LOADING_START,
  };
};

export const exceptionSessionExpire = (response, test) => {
  return {
    type: SESSION_EXPIRE_ERROR,
    sessionError: response,
    test: test,
  };
};

export const exceptionAPIError = (response) => {
  return {
    type: SESSION_API_ERROR,
    apiError: response,
  };
};

export const resetExceptionError = () => {
  return { type: RESET_EXCEPTION_ERROR };
};

export const userLogin = (username, password, submitted) => {
  return {
    type: USER_LOGIN_INITIATE,
    username,
    password,
    submitted,
  };
};

export const userLoginSuccess = (response, submitted) => {
  return {
    type: LOGIN_SUCCESS,
    userDetails: response,
    submitted,
  };
};

export const getOrgDetails = () => {
  return {
    type: GET_ORG_DETAILS,
  };
};

export const getOrgDetailsSuccess = (response) => {
  return {
    type: GET_ORG_DETAILS_SUCCESS,
    orgDetailsData: response,
  };
};

export const getAllQuestions = () => {
  return {
    type: GET_ALL_QUESTIONS,
  };
};

export const clearAllQuestions = (response = null) => {
  return {
    type: GET_ALL_QUESTIONS,
    allQuestionsList: response,
  };
};

export const setAllQuestions = (response) => {
  return {
    type: GET_ALL_QUESTIONS,
    allQuestionsList: response,
  };
};
