import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs';

export interface Hotel {
  id: string;
  Hotel_Name: string;
  location: string;
  rating: number;
}

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  private apiUrl = 'http://localhost:8080/api/v1/hotels'; // JSON Server URL
  private allHotels: Hotel[] = []; // To store all hotels fetched from API

  constructor(private http: HttpClient) {}

  // Generate a unique hotel ID in the format "CNNNN"
  private generateHotelId(hotels: Hotel[]): string {
    const prefix = 'H';
    const maxId = hotels.reduce((max, hotel) => {
      const numericId = parseInt(hotel.id.substring(1), 10);
      return numericId > max ? numericId : max;
    }, 0);
    return `${prefix}${(maxId + 1).toString().padStart(4, '0')}`;
  }

  // Create a new hotel
  createHotel(hotel: Omit<Hotel, 'id'>): Observable<Hotel> {
    return new Observable(observer => {
      this.getHotels().subscribe(hotels => {
        const newHotel: Hotel = {
          id: this.generateHotelId(hotels),
          ...hotel,
        };
        this.http.post<Hotel>(this.apiUrl, newHotel).subscribe(response => {
          observer.next(response);
          observer.complete();
        });
      });
    });
  }

  // Get all hotels
  getHotels(): Observable<Hotel[]> {
    // If hotels are already fetched, return them from the cache
    if (this.allHotels.length > 0) {
      return new Observable(observer => {
        observer.next(this.allHotels);
        observer.complete();
      });
    }

    return this.http.get<Hotel[]>(this.apiUrl).pipe(
      // Cache the result for future use
      tap((hotels) => {
        this.allHotels = hotels;
      })
    );
  }

  // Get a hotel by ID
  getHotelById(id: string): Observable<Hotel> {
    return this.http.get<Hotel>(`${this.apiUrl}/${id}`);
  }

  // Update a hotel
  updateHotel(id: string, updatedHotel: Hotel): Observable<Hotel> {
    return this.http.put<Hotel>(`${this.apiUrl}/${id}`, updatedHotel);
  }

  // Delete a hotel
  deleteHotel(id: string): Observable<boolean> {
    return new Observable(observer => {
      this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => {
        // Remove the hotel from the cache as well
        this.allHotels = this.allHotels.filter(hotel => hotel.id !== id);
        observer.next(true);
        observer.complete();
      });
    });
  }

  // Search hotels based on name or location
  searchHotels(searchTerm: string): Observable<Hotel[]> {
    if (!searchTerm.trim()) {
      return new Observable(observer => observer.next(this.allHotels));
    }

    const filteredHotels = this.allHotels.filter(
      hotel =>
        hotel.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hotel.Hotel_Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hotel.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return new Observable(observer => observer.next(filteredHotels));
  }
}
