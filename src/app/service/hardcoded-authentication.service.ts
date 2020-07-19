import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password): boolean {
    if (username === 'pranavan' && password === 'abcd1234'){
      sessionStorage.setItem('authenticateUser', username);
      return true;
    }
    return false;
  }

  isUserLoggedIn(): boolean{
    let user = sessionStorage.getItem('authenticateUser');
    return !(user === null);
  }

  logout(): void{
    sessionStorage.removeItem('authenticateUser');
  }


}
