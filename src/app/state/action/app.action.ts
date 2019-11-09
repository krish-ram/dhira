import { createAction, props } from "@ngrx/store";

export const saveHeader = createAction(
  "[APP] SaveHeader",
  props<{ payload: { value: string } }>()
);
