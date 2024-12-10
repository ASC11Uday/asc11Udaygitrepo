import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private dbUrl = 'http://localhost:8080/api/v1/register';
  private loggedInKey = 'isLoggedIn'; // Key for storing login state in localStorage
  private attemptsLeft = 3; // Tracks login attempts
  private lockTimeout: any = null; // In-memory lock state

  constructor(private http: HttpClient) {}

  // Get all users from the database
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.dbUrl);
  }

  // Register a new user
  register(user: any): Observable<any> {
    return this.getUsers().pipe(
      map((users) => {
        if (users.some((u) => u.email === user.email)) {
          throw new Error('Email already exists');
        }
        if (users.some((u) => u.phone === user.phone)) {
          throw new Error('Phone number already exists');
        }
        return this.http.post(this.dbUrl, {
          ...user,
          id: users.length + 1, // Increment user ID
        }).subscribe();
      }),
      catchError((error) => {
        throw error;
      })
    );
  }

  // Login function with error handling and account lockout
  login(email: string, password: string): Observable<any> {
    if (this.lockTimeout) {
      return throwError(() => new Error('Account locked for 30 minutes. Try again later.'));
    }

    return this.getUsers().pipe(
      map((users) => {
        const user = users.find((u) => u.email === email);

        if (!user) {
          throw new Error('User not found');
        }

        if (user.password !== password) {
          this.attemptsLeft--;
          if (this.attemptsLeft === 0) {
            this.lockAccount();
            throw new Error('Account locked for 30 minutes. Try again later.');
          }
          throw new Error(`Invalid email or password. ${this.attemptsLeft} attempt(s) left.`);
        }

        this.attemptsLeft = 3; 
        this.setLoggedInState(true); 
        return user;
      }),
      catchError((error) => {
        throw error;
      })
    );
  }
  isAuthenticated(): boolean {
    return localStorage.getItem(this.loggedInKey) === 'true'; // Check login state from localStorage
  }
  
  // Logout
  logout(): void {
    this.setLoggedInState(false); 
  }

  // Check if the user is logged in
  isLoggedIn(): boolean {
    return localStorage.getItem(this.loggedInKey) === 'true'; // Check from localStorage
  }

  // Lock account for 30 minutes
  private lockAccount(): void {
    this.lockTimeout = setTimeout(() => {
      this.lockTimeout = null; 
      this.attemptsLeft = 3; // Reset attempts
    }, 30 * 60 * 1000);
  }

  // Set login state in localStorage
  private setLoggedInState(isLoggedIn: boolean): void {
    if (isLoggedIn) {
      localStorage.setItem(this.loggedInKey, 'true');
    } else {
      localStorage.removeItem(this.loggedInKey);
    }
  }
}
