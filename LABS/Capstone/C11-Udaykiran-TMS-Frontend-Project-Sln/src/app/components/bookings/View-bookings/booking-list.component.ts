import { Component, OnInit } from '@angular/core';
import { Booking, BookingService } from '../../../services/booking.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {
  bookings: Booking[] = [];
  filteredBookings: Booking[] = [];
  searchTerm: string = '';

  private searchTermSubject: Subject<string> = new Subject<string>();

  constructor(private bookingService: BookingService, private router: Router) {}

  ngOnInit(): void {
    // Fetch all bookings initially
    this.bookingService.getBookings().subscribe((data) => {
      this.bookings = data;
      this.filteredBookings = data; // Show all bookings initially
    });

    // Watch for changes to the search term and filter bookings
    this.searchTermSubject.pipe(
      debounceTime(300), // Debounce for 300ms to prevent excessive API calls
      distinctUntilChanged(), // Emit only when the search term changes
      switchMap((searchTerm) => this.bookingService.searchBookings(searchTerm)) // Use search method from service
    ).subscribe((filteredBookings) => {
      this.filteredBookings = filteredBookings;
    });
  }

  getAllBookings(){
    this.bookingService.getBookings().subscribe((data) => {
      this.bookings = data;
      this.filteredBookings = data; // Show all bookings initially
    });
  }

  // Handle search input changes
  onSearch() {
    this.searchTermSubject.next(this.searchTerm);
  }

  editBooking(id: string): void {
    this.router.navigate(['/edit-booking', id]);
  }

  deleteBooking(id: string): void {
    this.bookingService.deleteBooking(id).subscribe({
      next: () => {
        // Update local data without re-fetching
        this.bookings = this.bookings.filter((booking) => booking.id !== id);
        this.filteredBookings = this.filteredBookings.filter((booking) => booking.id !== id);
        alert('Booking deleted successfully!');
      },
      error: (err) => {
        console.error('Error deleting booking:', err);
        alert('Failed to delete booking. Please try again.');
      },
    });
  }
  
}
