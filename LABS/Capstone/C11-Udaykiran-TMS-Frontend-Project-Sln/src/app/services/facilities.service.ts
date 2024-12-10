import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define Facility interface
export interface Facility {
  name: string;
  description: string;
  availability: string;
  type: string;
}

@Injectable({
  providedIn: 'root',
})
export class FacilitiesService {
  private apiUrl = 'http://localhost:3000/facilities'; // JSON Server URL

  constructor(private http: HttpClient) {}

  // Fetch all facilities
  getFacilities(): Observable<Facility[]> {
    return this.http.get<Facility[]>(this.apiUrl);
  }

  // Add a new facility
  addFacility(facility: Facility): Observable<Facility> {
    return this.http.post<Facility>(this.apiUrl, facility);
  }
}
