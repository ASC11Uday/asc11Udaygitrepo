import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../../services/hotel.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  hotels: any[] = [];
  filteredHotels: any[] = [];
  searchTerm: string = '';

  private searchTermSubject: Subject<string> = new Subject<string>();

  constructor(private hotelService: HotelService, private router: Router) {}

  ngOnInit() {
    // Fetch all hotels initially
    this.hotelService.getHotels().subscribe((hotels) => {
      this.hotels = hotels;
      this.filteredHotels = hotels; // Show all hotels initially
    });

    // Watch for changes to the search term and filter hotels dynamically
    this.searchTermSubject.pipe(
      debounceTime(300), // Debounce for 300ms to prevent excessive API calls
      distinctUntilChanged(), // Emit only when the search term changes
      switchMap((searchTerm) => this.hotelService.searchHotels(searchTerm)) // Use search method from service
    ).subscribe((filteredHotels) => {
      this.filteredHotels = filteredHotels;
    });
  }

  // Handle search input changes
  onSearch() {
    this.searchTermSubject.next(this.searchTerm);
  }

  editHotel(id: string) {
    this.router.navigate(['/edit-hotel', id]);
  }

  deleteHotel(id: string) {
    this.hotelService.deleteHotel(id).subscribe((success) => {
      if (success) {
        this.hotels = this.hotels.filter((hotel) => hotel.id !== id);
        this.filteredHotels = this.filteredHotels.filter((hotel) => hotel.id !== id);
      }
    });
  }
}
