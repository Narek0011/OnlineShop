import {GET_USER, LOGIN_USER, LOGOUT_USER, SIGNUP_USER} from "../actions/userAction";

const initialState = {
  token: '',
  user: {},
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGOUT_USER:
      return {
        ...state,
        user: {}
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload
      };
    case LOGIN_USER:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload,
      };
    case SIGNUP_USER:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
    default:
      return state
  }
}

export default userReducer