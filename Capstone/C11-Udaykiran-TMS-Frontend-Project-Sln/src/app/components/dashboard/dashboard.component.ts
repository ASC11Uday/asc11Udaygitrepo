import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  sections = [
    { title: 'Manage Hotels', description: 'Add, view, or update hotel details.', iconClass: 'bi-building fs-2 text-primary', btnClass: 'btn-primary', routerLink: '/hotels', buttonText: 'Manage Hotels' },
    { title: 'Manage Guests', description: 'View, edit, or delete guest details.', iconClass: 'bi-person fs-2 text-success', btnClass: 'btn-success', routerLink: '/guests', buttonText: 'Manage Guests' },
    { title: 'Manage Facilities', description: 'Add or update available facilities for hotels.', iconClass: 'bi-gear fs-2 text-warning', btnClass: 'btn-warning', routerLink: '/facilities', buttonText: 'Manage Facilities' },
    { title: 'Manage Bookings', description: 'View, modify, or cancel hotel bookings.', iconClass: 'bi-calendar-check fs-2 text-info', btnClass: 'btn-info', routerLink: '/bookings', buttonText: 'Manage Bookings' },
    { title: 'Manage Reviews', description: 'View and manage customer reviews for hotels.', iconClass: 'bi-stars fs-2 text-danger', btnClass: 'btn-danger', routerLink: '/reviews', buttonText: 'Manage Reviews' },
    { title: 'Plans', description: 'Add new records for hotels, guests, and more.', iconClass: 'bi-plus-circle fs-2 text-primary', btnClass: 'btn-primary', routerLink: '/Plans', buttonText: 'Plans' }
  ];


}
