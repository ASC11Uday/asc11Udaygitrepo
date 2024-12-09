// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-guests',
//   templateUrl: './guests.component.html',
//   styleUrls: ['./guests.component.css']
// })
// export class GuestsComponent implements OnInit {
//   guests = [
//     { name: 'John Doe', Email: 'john.doe@example.com', bookingDetails: 'Booked at Hotel A' },
//     { name: 'Jane Smith', Email: 'jane.smith@example.com', bookingDetails: 'Booked at Hotel B' },
//     // Add more mock data for testing
//   ];

//   constructor() {}

//   ngOnInit(): void {}
// }
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.css']
})
export class GuestsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Any logic needed for the main guest component
  }
}
