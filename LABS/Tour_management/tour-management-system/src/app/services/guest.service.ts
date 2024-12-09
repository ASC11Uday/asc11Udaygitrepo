import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface Guest {
  id: string; // Unique ID
  name: string;
  email: string;
  bookingDetails: string; // E.g., "Booked for Paris Tour"
}

@Injectable({
  providedIn: 'root',
})
export class GuestService {
  private apiUrl = 'http://localhost:3000/guests'; // JSON Server API URL

  constructor(private http: HttpClient) {}

  // Fetch all guests
  getGuests(): Observable<Guest[]> {
    return this.http.get<Guest[]>(this.apiUrl);
  }

  // Fetch a single guest by ID
  getGuestById(id: string): Observable<Guest> {
    return this.http.get<Guest>(`${this.apiUrl}/${id}`);
  }

  // Create a new guest
  createGuest(guest: Omit<Guest, 'id'>): Observable<Guest> {
    const newGuest = { ...guest, id: this.generateGuestId() }; // Generate unique ID
    return this.http.post<Guest>(this.apiUrl, newGuest);
  }

  // Update an existing guest
  updateGuest(id: string, updatedGuest: Guest): Observable<Guest> {
    return this.http.put<Guest>(`${this.apiUrl}/${id}`, updatedGuest);
  }

  // Delete a guest by ID
  deleteGuest(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Search guests by ID, Name, or Email
  searchGuests(searchTerm: string, guests: Guest[]): Guest[] {
    if (!searchTerm.trim()) {
      return guests; // Return all guests if search term is empty
    }

    return guests.filter((guest) =>
      guest.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guest.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  // Generate a unique guest ID
  private generateGuestId(): string {
    const prefix = 'G';
    const randomId = Math.floor(Math.random() * 9000 + 1000); // Generate a 4-digit number
    return `${prefix}${randomId}`;
  }
}
