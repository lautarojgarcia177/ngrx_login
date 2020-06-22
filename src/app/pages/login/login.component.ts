import { Actions, ofType } from '@ngrx/effects';
import { UserCredentials } from './../../models/user-credentials.model';
import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromState from 'src/app/store/states';
import { fromAuthActions } from 'src/app/store/actions';
import { map, concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoading = false;
  isLoading$ = this.loadingStore;

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  // loginFailure$ = this.actions.pipe(
  //   ofType(fromAuthActions.EAuthActions.LOGINFAILURE)
  // )

  constructor(private fb: FormBuilder,
     private authStore: Store<fromState.IAuthState>,
     private loadingStore: Store<fromState.ILoadingState>,
     private actions: Actions,
     private authService: AuthService
     ) {}

  ngOnInit(): void {
    // this.loginFailure$.subscribe(() => {
    //   this.authService.showInvalidCredentialsMessage().subscribe(res => {
    //     console.log('Login failure from service nottsds');
    //     this.isLoading = false;
    //   });
    // });

    this.isLoading$.subscribe(state => this.isLoading = state.isLoading);
  }

  onSubmit() {
    this.isLoading = true;
    const credentials: UserCredentials = this.loginForm.value;
    const action = new fromAuthActions.Login(credentials);
    this.authStore.dispatch(action);
  }

}
