import { createReducer, on } from "@ngrx/store";
import { loginSuccess, login } from "../action/login.action";

export const initialState = {
  userDetails: {}
};

const _loginReducer = createReducer(
  initialState,
  on(login, state => state),

  on(loginSuccess, (state, action) => {
    let userData = action.payload.value;
    return {
      ...state,
      userDetails: userData
    };
  })
);

export function loginReducer(state, action) {
  return _loginReducer(state, action);
}
