import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

interface LoginCredentials {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private validCredentials: LoginCredentials = {
    username: 'lautaro',
    password: 'garcia'
  };

  constructor() { }

  checkLoginCredentials(credentials: any): Observable<boolean> {
    const obs = new Observable<boolean>(suscriber => {
      setTimeout(() => {
        suscriber.next(this._checkLoginCredentials(credentials));
        suscriber.complete();
      }, 1500);
    });
    return obs;
  }

  _checkLoginCredentials(credentials: any): boolean {
    if (credentials.username === this.validCredentials.username && credentials.password === this.validCredentials.password) {
      return true;
    } else {
      return false;
    }
  }
}
