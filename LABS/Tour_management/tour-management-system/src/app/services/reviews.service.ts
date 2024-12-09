import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReviewsService {
  private apiUrl = 'http://localhost:3000/reviews'; // JSON Server URL

  constructor(private http: HttpClient) {}

  getReviews(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addReview(review: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, review);
  }
}
