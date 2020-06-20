// import { createReducer, on } from '@ngrx/store';
// import { login, register } from '../actions/auth.actions';
// import { act } from '@ngrx/effects';

// export const initialState = {
//     isLoggedIn: false
// };

// const _authReducer = createReducer(initialState,
//     on(login, state => Object.assign(state, { isLoggedIn: true})),
//     );

// export function authReducer(state, action) {
//     return _authReducer(state, action);
// }

import { initialAuthState, IAuthState } from 'src/app/store/states';
import { fromAuthActions } from 'src/app/store/actions';

export const authReducer = (state = initialAuthState, action: fromAuthActions.AuthActions): IAuthState => {
  switch (action.type) {

    case fromAuthActions.EAuthActions.LOGINSUCCESFUL:
      console.log('from reducer, Action successful');
        return state = {
          isLoggedIn: true
        };

    case fromAuthActions.EAuthActions.LOGIN:
        return state = state;
        break;

    default:
      return state;
  }
};

