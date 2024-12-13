import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;

  constructor() {

    const isLoggedIn = sessionStorage.getItem('loggedIn');
    this.loggedIn = isLoggedIn === 'true';
  }


  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'pass') {
      this.loggedIn = true;
      sessionStorage.setItem('loggedIn', 'true');  
      return true;
    }
    return false;
  }

  logout(): void {
    this.loggedIn = false;
    sessionStorage.removeItem('loggedIn'); 
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
