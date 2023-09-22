import {
  LOADING_START,
  SESSION_EXPIRE_ERROR,
  SESSION_API_ERROR,
  EXCEPTION_ERROR,
  RESET_EXCEPTION_ERROR,
  LOGIN_SUCCESS,
  GET_ORG_DETAILS_SUCCESS,
  GET_ALL_QUESTIONS,
} from "../actions/actionTypes";

const initialState = {
  userDetails: [],
  isSessionLive: false,
  isSessionAPIError: false,
  isSessionExpiry: false,
  isInternalServerError: false,
  showLoading: false,
  isLoginFetched: false,
  isOrgDetailsFetched: false,
  chatActionInfo: null,
  allQuestionsList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_START:
      return {
        ...state,
        showLoading: true,
      };
    case SESSION_EXPIRE_ERROR:
      return {
        ...state,
        isSessionExpiry: true,
        showLoading: false,
      };
    case SESSION_API_ERROR:
      return {
        ...state,
        apiError: action.apiError,
        showLoading: false,
        isSessionAPIError: true,
      };
    case EXCEPTION_ERROR:
      return {
        ...state,
        ISError: action.ISError,
        showLoading: false,
        isInternalServerError: true,
      };
    case RESET_EXCEPTION_ERROR:
      return {
        ...state,
        ISError: action.ISError,
        showLoading: false,
        isInternalServerError: false,
        isSessionAPIError: false,
      };
    case LOGIN_SUCCESS:
      localStorage.clear();
      localStorage.setItem("userDetails", JSON.stringify(action.userDetails));
      return {
        ...state,
        userDetails: action.userDetails,
        submitted: action.submitted,
        isLoginFetched: true,
        isSessionLive: true,
        isSessionExpiry: false,
        isSessionAPIError: false,
        isInternalServerError: false,
        showLoading: false,
      };
    case GET_ORG_DETAILS_SUCCESS:
      return {
        ...state,
        orgDetailsData: action.orgDetailsData,
        isOrgDetailsFetched: true,
        isLoginFetched: true,
        isSessionLive: true,
        isSessionExpiry: false,
        isSessionAPIError: false,
        isInternalServerError: false,
        showLoading: false,
      };
    case GET_ALL_QUESTIONS:
      return {
        ...state,
        allQuestionsList: action.allQuestionsList
      };
    default:
      return state;
  }
};

export default reducer;
