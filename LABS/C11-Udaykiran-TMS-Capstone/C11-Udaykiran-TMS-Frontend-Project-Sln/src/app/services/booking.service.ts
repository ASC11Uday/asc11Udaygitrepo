import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Booking {
  id: string;
  guest: string;
  hotel: string;
  date: string;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private apiUrl = 'http://localhost:8080/api/v1/bookings'; 

  constructor(private http: HttpClient) {}

  // Fetch all bookings
  getBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(this.apiUrl);
  }

  // Fetch a single booking by ID
  getBookingById(id: string): Observable<Booking> {
    return this.http.get<Booking>(`${this.apiUrl}/${id}`);
  }

  // Create a new booking (auto-generate ID)
  createBooking(booking: Omit<Booking, 'id'>): Observable<Booking> {
    const newBooking = { ...booking, id: this.generateBookingId() };
    return this.http.post<Booking>(this.apiUrl, newBooking);
  }

  // Update an existing booking
  updateBooking(id: string, updatedBooking: Booking): Observable<Booking> {
    return this.http.put<Booking>(`${this.apiUrl}/${id}`, updatedBooking);
  }

  // Delete a booking by ID
  deleteBooking(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Generate a unique booking ID (format: CNNNN)
  private bookingCounter: number = 1; // Counter to track the booking ID sequence

  private generateBookingId(): string {
    const prefix = 'B'; // Prefix for bookings
    
    // Retrieve the booking counter from localStorage, or set to 1 if not found
    let bookingCounter = localStorage.getItem('bookingCounter');
    if (!bookingCounter) {
      bookingCounter = '1'; // Default to 1 if no counter is stored
    }
    
    // Convert to a number and ensure it is an integer
    let counter = parseInt(bookingCounter, 10);
    
    const sequentialId = counter.toString().padStart(4, '0'); 
    
    // Create the booking ID
    const bookingId = `${prefix}${sequentialId}`;
    
    // Increment the counter for next booking
    counter++;
    
    // Store the updated counter back in localStorage
    localStorage.setItem('bookingCounter', counter.toString());
    
    return bookingId;
  }
  


  // Search bookings based on ID, guest, hotel, or status
  searchBookings(searchTerm: string): Observable<Booking[]> {
    return new Observable(observer => {
      this.getBookings().subscribe((bookings) => {
        const filteredBookings = bookings.filter((booking) => {
          return (
            booking.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            booking.guest.toLowerCase().includes(searchTerm.toLowerCase()) ||
            booking.hotel.toLowerCase().includes(searchTerm.toLowerCase()) ||
            booking.status.toLowerCase().includes(searchTerm.toLowerCase())
          );
        });
        observer.next(filteredBookings);
        observer.complete();
      });
    });
  }
}
