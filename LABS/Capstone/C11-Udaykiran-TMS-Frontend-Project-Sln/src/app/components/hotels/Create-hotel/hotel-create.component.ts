import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../../services/hotel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel-create',
  templateUrl: './hotel-create.component.html',
  styleUrls: ['./hotel-create.component.css'],
})
export class HotelCreateComponent implements OnInit {
  hotel = {
    Hotel_Name: '',
    location: '',
    rating: 1,
  };

  constructor(private hotelService: HotelService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    // Create the hotel
    this.hotelService.createHotel(this.hotel).subscribe((response) => {
      if (response) {
        alert('Hotel created successfully!');
        this.router.navigate(['/hotels']);
      } else {
        alert('Error creating hotel!');
      }
    });
  }
}
