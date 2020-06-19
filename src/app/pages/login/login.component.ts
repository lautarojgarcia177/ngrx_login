import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IAuthState } from 'src/app/store/states';
import { fromAuthActions } from 'src/app/store/actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoading = false;

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private store: Store<IAuthState>, private login: LoginService, private router: Router) {

  }

  ngOnInit(): void {
  }

  onSubmit() {
    // const action = new fromAuthActions.Login(this.loginForm.value);
    // this.store.dispatch(action);
    this.isLoading = true;
    this.login.checkLoginCredentials(this.loginForm.value).subscribe(res => {
      if (res === true) {
        this.isLoading = false;
        this.router.navigate(['home']);
      }
    });
  }

}
