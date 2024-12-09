import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../../services/reviews.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
})
export class ReviewsComponent implements OnInit {
  reviews: any[] = [];
  newReview = {
    facility: '',
    hotel: '',
    rating: null,
    comments: '',
  };
  showAddForm = false;

  constructor(private reviewsService: ReviewsService) {}

  ngOnInit(): void {
    this.loadReviews();
  }

  loadReviews(): void {
    this.reviewsService.getReviews().subscribe((reviews: any[]) => {
      this.reviews = reviews;
    });
  }

  addReview(): void {
    this.reviewsService.addReview(this.newReview).subscribe((review) => {
      this.reviews.push(review); // Add the new review to the local array
      this.showAddForm = false; // Hide the form after adding
      this.newReview = { facility: '', hotel: '', rating: null, comments: '' }; // Reset form
    });
  }
}
