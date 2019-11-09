import { ActionReducerMap } from "@ngrx/store";

import { AppState } from "./model/app.model";
import { appReducer } from "./reducer/app.reducers";
import { loginReducer } from "./reducer/login.reducer";
import { LoginEffects } from "./effects/login.effects";

export interface State {
  app: AppState;
  login: object;
}

export const reducers: ActionReducerMap<State> = {
  app: appReducer,
  login: loginReducer
};

export const effects = [LoginEffects];
