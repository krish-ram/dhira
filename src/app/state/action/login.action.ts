import { createAction, props } from "@ngrx/store";

export const login = createAction("[LOGIN] Login");

export const loginSuccess = createAction(
  "[LOGIN] Login Success",
  props<{ payload: { value: object } }>()
);
