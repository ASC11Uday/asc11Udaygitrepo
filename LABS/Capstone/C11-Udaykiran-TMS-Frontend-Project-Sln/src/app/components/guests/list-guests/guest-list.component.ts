import { Component, OnInit } from '@angular/core';
import { GuestService, Guest } from '../../../services/guest.service';
import { Router } from '@angular/router'; // Import the Router if you want to navigate to an edit page

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.css']
})
export class GuestListComponent implements OnInit {
  guests: Guest[] = [];
  filteredGuests: Guest[] = [];
  searchTerm: string = '';

  constructor(private guestService: GuestService, private router: Router) {}

  ngOnInit(): void {
    this.guestService.getGuests().subscribe((data) => {
      this.guests = data;
      this.filteredGuests = data; // Initialize filteredGuests
    });
  }

  // Handle search functionality
  onSearch(): void {
    this.filteredGuests = this.guestService.searchGuests(this.searchTerm, this.guests);
  }

  // Delete a guest
  deleteGuest(id: string): void {
    this.guestService.deleteGuest(id).subscribe(() => {
      this.filteredGuests = this.filteredGuests.filter((guest) => guest.id !== id);
    });
  }

  // Edit guest method
  editGuest(id: string): void {
    console.log(`Edit guest with ID: ${id}`);
    this.router.navigate([`/edit-guest/${id}`]);  
  }
}
