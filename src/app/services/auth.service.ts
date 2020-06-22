import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {UserCredentials} from 'src/app/models/user-credentials.model';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private validCredentials: UserCredentials = {
    username: 'lautaro',
    password: 'garcia'
  };

  constructor() { }

  public checkLoginCredentials(credentials: UserCredentials): Observable<boolean> {
    const obs = new Observable<boolean>(suscriber => {
      setTimeout(() => {
        suscriber.next(this._checkLoginCredentials(credentials));
        suscriber.complete();
      }, 1500);
    });
    return obs;
  }

  private _checkLoginCredentials(credentials: UserCredentials): boolean {
    if (credentials.username === this.validCredentials.username && credentials.password === this.validCredentials.password) {
      return true;
    } else {
      return false;
    }
  }

  public showInvalidCredentialsMessage(): Observable<any> {
    const obs = new Observable(suscriber => {
      Swal.fire({
        icon: 'error',
        title: 'Invalid User',
        text: 'Incorrect username or password',
        footer: 'try again! {username: lautaro , password: garcia}'
      }).then(reason => {
        suscriber.next(reason);
        suscriber.complete();
      })
    });
    return obs;
  }
}

