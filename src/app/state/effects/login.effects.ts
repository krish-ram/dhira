import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of, EMPTY } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import { AppService } from "src/app/services/app.service";
import { login, loginSuccess } from "../action/login.action";

@Injectable()
export class LoginEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      mergeMap(() =>
        this.appService.getLoginData().pipe(
          map(loginData => loginSuccess({ payload: { value: loginData } })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private appService: AppService) {}
}
