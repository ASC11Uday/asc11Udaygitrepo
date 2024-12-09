import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  bookings: any[] = [];

  constructor(private bookingService: BookingService, private router: Router) {}

  ngOnInit() {
    this.bookingService.getBookings().subscribe((data) => {
      this.bookings = data;
    });
  }

  viewBooking(id: string) {
    this.router.navigate(['/view-booking', id]);
  }

  editBooking(id: string) {
    this.router.navigate(['/edit-booking', id]);
  }

  deleteBooking(id: string) {
    this.bookingService.deleteBooking(id).subscribe(() => {
      this.bookings = this.bookings.filter((booking) => booking.id !== id);
    });
    
  }
}
