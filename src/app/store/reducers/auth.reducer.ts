import { createReducer, on } from '@ngrx/store';
import { login, register } from '../actions/auth.actions';
import { act } from '@ngrx/effects';

export const initialState = {
    isLoggedIn: false
};

const _authReducer = createReducer(initialState,
    on(login, state => Object.assign(state, { isLoggedIn: true})),
    );

export function authReducer(state, action) {
    return _authReducer(state, action);
}
