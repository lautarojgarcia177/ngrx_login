import { UserCredentials } from './../../models/user-credentials.model';
// import { createAction } from '@ngrx/store';

// export const login = createAction('[Login Page] Login');
// export const register = createAction('[Register Page] Register');

import { Action } from '@ngrx/store';

export enum EAuthActions {
  LOGINSUCCESFUL = '[Login Page] Login Successful',
  LOGIN = '[Login Page] Login',
}

export class Login implements Action {
  readonly type = EAuthActions.LOGIN;

  constructor(public payload: UserCredentials) { }
}

export class LoginSuccessful implements Action {
  readonly type = EAuthActions.LOGINSUCCESFUL;

  constructor() {}
}

export type AuthActions = Login | LoginSuccessful;
