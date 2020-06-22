import { LoadingActions } from './../actions/loading.actions';
import { LoginFailure } from './../actions/auth.actions';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Injectable, ErrorHandler } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { EMPTY, Observable, of } from 'rxjs';
import { map, filter, mergeMap, catchError, tap, switchMap, concatMap } from 'rxjs/operators';
import { fromAuthActions, fromLoadingActions } from '../actions';
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
      map(() => new fromLoadingActions.StartLoading());
      map((action: fromAuthActions.Login) => {
        return this.authService.checkLoginCredentials(action.payload)
          .pipe(
            map((credentialsValid: boolean) => {
              if (credentialsValid) {
                new fromLoadingActions.FinishedLoading();
                new fromAuthActions.LoginSuccessful();
              } else {
                new fromLoadingActions.FinishedLoading();
                new fromAuthActions.LoginFailure();
              }
            })
          )
      })
    );

    @Effect()
    LoginFailure$ = this.actions$.pipe(
      ofType<fromAuthActions.LoginFailure>(fromAuthActions.EAuthActions.LOGINFAILURE),
      switchMap(() => this.authService.showInvalidCredentialsMessage()),
      switchMap(reason => of(new fromLoadingActions.FinishedLoading()))
    );

  loginSuccessful$ = createEffect(() => this.actions$.pipe(
    ofType<fromAuthActions.LoginSuccessful>(fromAuthActions.EAuthActions.LOGINSUCCESFUL),
    map(() => this.router.navigate(['home'])),
    switchMap(() => of(new fromLoadingActions.FinishedLoading()))
  ));

    @Effect({dispatch: false})
    logout$ = this.actions$.pipe(

    );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
