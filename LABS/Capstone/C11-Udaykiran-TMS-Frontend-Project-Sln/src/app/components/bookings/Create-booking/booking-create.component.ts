import { Component } from '@angular/core';
import { Booking, BookingService } from '../../../services/booking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-create',
  templateUrl: './booking-create.component.html',
  styleUrls: ['./booking-create.component.css']
})
export class BookingCreateComponent {
  booking: Omit<Booking, 'id'> = {
    guest: '',
    hotel: '',
    date: '',
    status: 'Pending',
  };

  today: string;

  constructor(private bookingService: BookingService, private router: Router) {
    // Set today's date in the format YYYY-MM-DD
    const currentDate = new Date();
    this.today = currentDate.toISOString().split('T')[0];
  }

  onSubmit(): void {
    this.bookingService.createBooking(this.booking).subscribe(() => {
      alert('Booking created successfully!');
      this.router.navigate(['/bookings']);
    });
  }
}
