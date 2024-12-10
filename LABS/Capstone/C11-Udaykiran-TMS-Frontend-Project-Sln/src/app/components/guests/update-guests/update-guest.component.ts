import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GuestService, Guest } from '../../../services/guest.service';

@Component({
  selector: 'app-update-guest',
  templateUrl: './update-guest.component.html',
//   styleUrls: ['./update-guest.component.css'],
})
export class UpdateGuestComponent implements OnInit {
  guest: Guest = {
    id: '',
    name: '',
    email: '',
    bookingDetails: '',
  };

  constructor(
    private guestService: GuestService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Retrieve the guest ID from the URL and fetch the guest details
    const guestId = this.route.snapshot.paramMap.get('id');
    if (guestId) {
      this.guestService.getGuestById(guestId).subscribe((data) => {
        this.guest = data;
      });
    }
  }

  // Handle form submission to update the guest details
  onSubmit(): void {
    if (this.guest.id) {
      this.guestService.updateGuest(this.guest.id, this.guest).subscribe(() => {
        this.router.navigate(['/guests']); // Redirect to guest list page after update
      });
    }
  }
}
