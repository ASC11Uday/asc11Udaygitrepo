import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from '../../../services/hotel.service';

@Component({
  selector: 'app-hotel-edit',
  templateUrl: './hotel-edit.component.html',
  styleUrl:'./hotel-edit.component.css',
})
export class HotelEditComponent implements OnInit {
  hotel: any = { id: '', Hotel_Name: '', location: '', rating: 1 };

  constructor(
    private hotelService: HotelService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const hotelId = this.route.snapshot.paramMap.get('id');
    if (hotelId) {
      this.hotelService.getHotelById(hotelId).subscribe((hotel) => {
        if (hotel) {
          this.hotel = hotel;
        } else {
          alert('Hotel not found');
          this.router.navigate(['/hotels']);
        }
      });
    }
  }

  onSubmit() {
    this.hotelService.updateHotel(this.hotel.id, this.hotel).subscribe((updatedHotel) => {
      if (updatedHotel) {
        alert('Hotel updated successfully!');
        this.router.navigate(['/hotels']);
      } else {
        alert('Error updating hotel!');
      }
    });
  }
}
