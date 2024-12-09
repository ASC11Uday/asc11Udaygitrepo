import { Component } from '@angular/core';
import { GuestService, Guest } from '../../../services/guest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-guest',
  templateUrl: './create-guest.component.html',
  styleUrls: ['./create-guest.component.css']
})
export class CreateGuestComponent {
  guest: Omit<Guest, 'id'> = {
    name: '',
    email: '',
    bookingDetails: '',
  };

  constructor(private guestService: GuestService, private router: Router) {}

  // Handle form submission
  onSubmit(): void {
    if (this.guest.name && this.guest.email) {
      this.guestService.createGuest(this.guest).subscribe((newGuest) => {
        console.log('New guest added:', newGuest);
        this.router.navigate(['/guest-list']); // Navigate to the guest list after adding the guest
      });
    }
  }
}
