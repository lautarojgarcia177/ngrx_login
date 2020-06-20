import { AuthService } from './../../services/auth.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, filter, mergeMap, catchError, tap } from 'rxjs/operators';
import { fromAuthActions } from '../actions';

@Injectable()
export class AuthEffects {

  // effectName$ = createEffect(
  //   () => this.actions$.pipe(
  //     ofType(FeatureActions.actionOne),
  //     map(() => FeatureActions.actionTwo())
  //   )
  // );

  login$ = createEffect(
    () => this.actions$.pipe(
      ofType(fromAuthActions.EAuthActions.LOGIN),
      tap((v) => console.log('from effect, login action', v))
  ),
    {dispatch: false}
  );

  _login$ = createEffect(
    () => this.actions$.pipe(
      ofType(fromAuthActions.EAuthActions.LOGIN),
      map(() => new fromAuthActions.LoginSuccessful())
    )
  );



  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {}
}
