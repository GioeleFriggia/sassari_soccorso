import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  LOGOUT_USER,
} from "../actions";

const initialState = {
  user: null,
  token: null,
  errors: null,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        errors: null,
      };
    case FETCH_USER_SUCCESS:
      return { ...state, user: action.payload, errors: null };
    case LOGIN_USER_FAILURE:
    case FETCH_USER_FAILURE:
      return { ...state, errors: action.payload };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        errors: null,
      };
    case REGISTER_USER_FAILURE:
      return { ...state, errors: action.payload };
    case LOGOUT_USER:
      return { ...state, user: null, token: null, errors: null };
    default:
      return state;
  }
}

export default userReducer;
