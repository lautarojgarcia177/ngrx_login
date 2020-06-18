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
      if (credentials.username === this.validCredentials.username && credentials.password === this.validCredentials.password) {
        suscriber.next(true);
        suscriber.complete();
      } else {
        suscriber.next(false);
        suscriber.complete();
      }
    });
    return obs;
  }
}
