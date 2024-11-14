import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;

  constructor() {
    // Check if the user is already logged in by checking session storage
    const isLoggedIn = sessionStorage.getItem('loggedIn');
    this.loggedIn = isLoggedIn === 'true';
  }

  // Simulate login functionality (can replace with actual backend logic)
  login(username: string, password: string): boolean {
    // Example: Check if credentials are valid
    if (username === 'admin' && password === 'pass') {
      this.loggedIn = true;
      sessionStorage.setItem('loggedIn', 'true');  // Store login state in session storage
      return true;
    }
    return false;
  }

  logout(): void {
    this.loggedIn = false;
    sessionStorage.removeItem('loggedIn');  // Remove login state from session storage
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
