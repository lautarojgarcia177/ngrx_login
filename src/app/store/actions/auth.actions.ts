// import { createAction } from '@ngrx/store';

// export const login = createAction('[Login Page] Login');
// export const register = createAction('[Register Page] Register');

import { Action } from '@ngrx/store';

export enum EAuthActions {
  LOGIN = '[Login Page] Login'
}

export class Login implements Action {
  readonly type = EAuthActions.LOGIN;

  constructor(public payload: {username: string, password: string}) { }
}

export type AuthActions = Login;
