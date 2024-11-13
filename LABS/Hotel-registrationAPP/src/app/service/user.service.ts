import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:3000/users';

  // Local user storage (for demo or fallback purposes)
  private users: User[] = [];

  constructor(private httpClient: HttpClient) {}

  // Fetch users from the server
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseUrl);
  }

  // Fetch user by ID from the server
  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.baseUrl}/${id}`);
  }

  // Create a user on the server
  createUser(user: User): Observable<User> {
    const highestId = this.users.length > 0 ? Math.max(0,...this.users.map(u => u.id || 0)) : 0;
    const newUser = { id: highestId + 1, ...user };
    this.users.push(newUser); // Store locally as well
    return this.httpClient.post<User>(this.baseUrl, user);
  }

  // Update user on the server
  updateUser(id: number, updatedUser: Partial<User>): Observable<User> {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
      this.users[userIndex] = { ...this.users[userIndex], ...updatedUser };
      console.log('User updated locally:', this.users[userIndex]);
    }
    return this.httpClient.put<User>(`${this.baseUrl}/${id}`, updatedUser);
  }

  
  deleteUser(id: number): Observable<void> {
    this.users = this.users.filter(user => user.id !== id); 
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }

  
  registerUser(user: User): void {
    const highestId = this.users.length > 0 ? Math.max(0, ...this.users.map(u => u.id ?? 0)) : 0;
    const newUser = { id: highestId + 1, ...user };
    this.users.push(newUser);
    console.log('User registered locally:', newUser);

  }

  // Validate user based on email or phoneNumber and check password
  validateUser(loginId: string, password: string): boolean {
    const user = this.users.find(
      user => user.email === loginId || user.phoneNumber === loginId
    );
    return !!user && user.password === password; // Compare the actual password
  }

  // Fetch all locally stored users (useful when working offline)
  getLocalUsers(): User[] {
    return this.users;
  }
}
