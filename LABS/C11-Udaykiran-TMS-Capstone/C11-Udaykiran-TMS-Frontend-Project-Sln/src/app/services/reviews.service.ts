import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review } from '../Model/review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  private apiUrl = 'http://localhost:3000/reviews'; 

  constructor(private http: HttpClient) {}

  // Fetch all reviews from the server
  getReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(this.apiUrl);
  }

  // Post a new review to the server
  submitReview(reviewData: Review): Observable<any> {
    return this.http.post(this.apiUrl, reviewData);
  }
}
