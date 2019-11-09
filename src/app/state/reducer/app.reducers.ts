import { createReducer, on } from "@ngrx/store";
import { saveHeader } from "../action/app.action";
import { AppState } from "../model/app.model";

export const initialState: AppState = {
  header: ""
};

const _appReducer = createReducer(
  initialState,
  on(saveHeader, (state, action) => {
    let value = "Lord " + action.payload.value;
    return {
      ...state,
      header: value
    };
  })
);

export function appReducer(state, action) {
  return _appReducer(state, action);
}
