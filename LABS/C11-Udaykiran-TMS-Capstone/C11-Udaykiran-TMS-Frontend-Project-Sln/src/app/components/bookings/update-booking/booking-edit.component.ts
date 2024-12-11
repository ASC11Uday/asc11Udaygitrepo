import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking, BookingService } from '../../../services/booking.service';

@Component({
  selector: 'app-booking-edit',
  templateUrl: './booking-edit.component.html',
})
export class BookingEditComponent implements OnInit {
  booking: Booking = {
    id: '',
    guest: '',
    hotel: '',
    date: '',
    status: '',
  };

  constructor(
    private route: ActivatedRoute,
    private bookingService: BookingService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const bookingId = this.route.snapshot.paramMap.get('id');
    if (bookingId) {
      this.bookingService.getBookingById(bookingId).subscribe((data) => {
        this.booking = data;
      });
    }
  }

  onSubmit(): void {
    this.bookingService.updateBooking(this.booking.id, this.booking).subscribe(() => {
      alert('Booking updated successfully!');
      this.router.navigate(['/bookings']);
    });
  }
}
