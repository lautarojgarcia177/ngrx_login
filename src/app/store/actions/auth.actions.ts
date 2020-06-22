import { UserCredentials } from './../../models/user-credentials.model';
// import { createAction } from '@ngrx/store';

// export const login = createAction('[Login Page] Login');
// export const register = createAction('[Register Page] Register');

import { Action } from '@ngrx/store';

export enum EAuthActions {
  LOGINSUCCESFUL = '[Login Page] Login Successful',
  LOGINFAILURE = '[Login Page] Login Failure',
  LOGIN = '[Login Page] Login',
  LOGOUT = '[Login Page] Logout',
  LOADINGCALLBACK = '[Login Page] Login Failure Callback'
}

export class Login implements Action {
  readonly type = EAuthActions.LOGIN;

  constructor(public payload: UserCredentials) { }
}

export class LoginSuccessful implements Action {
  readonly type = EAuthActions.LOGINSUCCESFUL;
}

export class LoginFailure implements Action {
  readonly type = EAuthActions.LOGINFAILURE;
}

export class Logout implements Action {
  readonly type = EAuthActions.LOGOUT;
}

export class LoadingPageCallback implements Action {
  readonly type = EAuthActions.LOADINGCALLBACK;
}

export type AuthActions = Login | LoginSuccessful | LoginFailure | Logout | LoadingPageCallback;
