import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  hotels = [
    { name: 'Hotel A', location: 'Paris', rating: 4.5, price: 100 },
    { name: 'Hotel B', location: 'London', rating: 4.2, price: 120 },
    // Add more mock data for testing
  ];

  constructor() {}

  ngOnInit(): void {
  }
}
