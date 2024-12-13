import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReviewsService } from '../../services/reviews.service';
import { Review } from '../../Model/review.model';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviewForm!: FormGroup;
  reviews: Review[] = [];
  showForm = false;

  constructor(private fb: FormBuilder, private reviewsService: ReviewsService) {}

  ngOnInit(): void {
    this.loadReviews();

    // Initialize form with validation
    this.reviewForm = this.fb.group({
      facility: ['', [Validators.required]],
      hotel: ['', [Validators.required]],
      rating: [null, [Validators.required, Validators.min(1), Validators.max(5)]],
      comments: ['', [Validators.required]]
    });
  }

  // Fetch reviews from the service
  loadReviews(): void {
    this.reviewsService.getReviews().subscribe((reviews: Review[]) => {
      this.reviews = reviews;
    });
  }

  // Submit the form data and add the review
  submitForm(): void {
    if (this.reviewForm.valid) {
      const newReview: Review = {
        id: Math.random().toString(36).substring(2, 9), // Simple random ID generation
        ...this.reviewForm.value
      };

      this.reviewsService.submitReview(newReview).subscribe(() => {
        this.loadReviews();  
        this.reviewForm.reset();  
        this.showForm = false;  
      });
    } else {
      console.log('Form is invalid');
    }
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
  }
}
