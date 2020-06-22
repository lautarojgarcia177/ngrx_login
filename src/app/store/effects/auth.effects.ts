import { LoginFailure } from './../actions/auth.actions';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Injectable, ErrorHandler } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { EMPTY, Observable, of } from 'rxjs';
import { map, filter, mergeMap, catchError, tap, switchMap, concatMap } from 'rxjs/operators';
import { fromAuthActions } from '../actions';
import { LoginSuccessful } from '../actions/auth.actions';

@Injectable()
export class AuthEffects {

  // effectName$ = createEffect(
  //   () => this.actions$.pipe(
  //     ofType(FeatureActions.actionOne),
  //     map(() => FeatureActions.actionTwo())
  //   )
  // );

  // login$ = createEffect(
  //   () => this.actions$.pipe(
  //     ofType(fromAuthActions.EAuthActions.LOGIN),
  //     tap((v) => console.log('from effect, login action', v))
  // ),
  //   {dispatch: false}
  // );

  @Effect()
  login$ = this.actions$.pipe(
      ofType<fromAuthActions.Login>(fromAuthActions.EAuthActions.LOGIN),
      switchMap((action: fromAuthActions.Login) => {
        return this.authService.checkLoginCredentials(action.payload)
          .pipe(
            map((credentialsValid: boolean) => {
              if (credentialsValid) {
                return new fromAuthActions.LoginSuccessful();
              } else {
                return new fromAuthActions.LoginFailure();
              }
            })
          )
      })
    );

    @Effect({dispatch: false})
    LoginFailure$ = this.actions$.pipe(
      ofType<fromAuthActions.LoginFailure>(fromAuthActions.EAuthActions.LOGINFAILURE),
      switchMap(() => this.authService.showInvalidCredentialsMessage()),
      map((reason) => console.log('login uncussdesful with msj from effectos'))
    );

  loginSuccessful$ = createEffect(() => this.actions$.pipe(
    ofType<fromAuthActions.LoginSuccessful>(fromAuthActions.EAuthActions.LOGINSUCCESFUL),
    map(() => this.router.navigate(['home']))
  ), {dispatch: false});

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
