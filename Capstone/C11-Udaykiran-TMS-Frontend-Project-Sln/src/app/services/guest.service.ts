// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable, of } from 'rxjs';

// export interface Guest {
//   id: string; 
//   name: string;
//   email: string;
//   bookingDetails: string; 
// }

// @Injectable({
//   providedIn: 'root',
// })
// export class GuestService {
//   private apiUrl = 'http://localhost:3000/guests'; 

//   constructor(private http: HttpClient) {}

  
//   getGuests(): Observable<Guest[]> {
//     return this.http.get<Guest[]>(this.apiUrl);
//   }

  
//   getGuestById(id: string): Observable<Guest> {
//     return this.http.get<Guest>(`${this.apiUrl}/${id}`);
//   }

  
//   createGuest(guest: Omit<Guest, 'id'>): Observable<Guest> {
//     const newGuest = { ...guest, id: this.generateGuestId() }; 
//     return this.http.post<Guest>(this.apiUrl, newGuest);
//   }

  
//   updateGuest(id: string, updatedGuest: Guest): Observable<Guest> {
//     return this.http.put<Guest>(`${this.apiUrl}/${id}`, updatedGuest);
//   }

 
//   deleteGuest(id: string): Observable<void> {
//     return this.http.delete<void>(`${this.apiUrl}/${id}`);
//   }

  
//   searchGuests(searchTerm: string, guests: Guest[]): Guest[] {
//     if (!searchTerm.trim()) {
//       return guests; 
//     }

//     return guests.filter((guest) =>
//       guest.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       guest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       guest.email.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   }

//   private generateGuestId(): string {
//     const prefix = 'G';
//     const randomId = Math.floor(Math.random() * 9000 + 1000); 
//     return `${prefix}${randomId}`;
    
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface Guest {
  id: string; 
  name: string;
  email: string;
  bookingDetails: string; 
}

@Injectable({
  providedIn: 'root',
})
export class GuestService {
  private apiUrl = 'http://localhost:3000/guests'; 

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
    return new Observable<Guest>((subscriber) => {
      this.getGuests().subscribe((guests) => {
        const newGuestId = this.generateGuestId(guests);
        const newGuest = { ...guest, id: newGuestId };
        this.http.post<Guest>(this.apiUrl, newGuest).subscribe({
          next: (createdGuest) => {
            subscriber.next(createdGuest);
            subscriber.complete();
          },
          error: (err) => subscriber.error(err),
        });
      });
    });
  }

  updateGuest(id: string, updatedGuest: Guest): Observable<Guest> {
    return this.http.put<Guest>(`${this.apiUrl}/${id}`, updatedGuest);
  }

  deleteGuest(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  searchGuests(searchTerm: string, guests: Guest[]): Guest[] {
    if (!searchTerm.trim()) {
      return guests; 
    }

    return guests.filter((guest) =>
      guest.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guest.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  private generateGuestId(guests: Guest[]): string {
    const prefix = 'G';
    const maxId = guests.reduce((max, guest) => {
      const numericId = parseInt(guest.id.substring(1), 10);
      return numericId > max ? numericId : max;
    }, 0);
    return `${prefix}${(maxId + 1).toString().padStart(4, '0')}`;
  }
}
