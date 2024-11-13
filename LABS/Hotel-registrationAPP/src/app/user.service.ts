// user.service.ts
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // Adjusted User Structure
  private users: { 
    id: number; 
    name: string;
    phoneNumber: string;  
    location?: string; 
    gender?: string; 
    salary?: number; 
    age?: number; 
  }[] = [];

  // Register User with Sequential ID (without email or password)
  registerUser(user: { name: string; phoneNumber: string; location?: string; gender?: string; salary?: number; age?: number }) {
    const highestId = this.users.length > 0 ? Math.max(...this.users.map(u => u.id)) : 0;
    const newUser = { id: highestId + 1, ...user };  // Generate a sequential ID
    this.users.push(newUser);
    console.log('User registered:', newUser);
  }

  // Create User for other purposes if needed
  createUser(user: { name: string; phoneNumber: string; location?: string; gender?: string; salary?: number; age?: number }) {
    const highestId = this.users.length > 0 ? Math.max(...this.users.map(u => u.id)) : 0;
    const newUser = { id: highestId + 1, ...user };
    this.users.push(newUser);
    console.log('User created:', newUser);
  }

  // Validate User based on name or phoneNumber (instead of email and password)
  validateUser(loginid: string, password: string): boolean {
    // You could replace "password" here with any other validation logic you want.
    // For example, if you have a universal password check:
    const user = this.users.find(user => user.name === loginid || user.phoneNumber === loginid);
    return !!user && password === "pass";  // Simple password check
  }

  // Get User by ID
  getUserById(id: number): Observable<{ id: number; name: string; phoneNumber: string; location?: string; gender?: string; salary?: number; age?: number } | undefined> {
    const user = this.users.find(user => user.id === id);
    return of(user);
  }

  // Update User by ID
  updateUser(id: number, updatedUser: Partial<{ id: number; name: string; phoneNumber: string; location?: string; gender?: string; salary?: number; age?: number }>): Observable<void> {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
      this.users[userIndex] = { ...this.users[userIndex], ...updatedUser };
      console.log('User updated:', this.users[userIndex]);
    }
    return of();
  }

  // Get All Users
  getUsers(): { id: number; name: string; phoneNumber: string; location?: string; gender?: string; salary?: number; age?: number }[] {
    return this.users;
  }
}
