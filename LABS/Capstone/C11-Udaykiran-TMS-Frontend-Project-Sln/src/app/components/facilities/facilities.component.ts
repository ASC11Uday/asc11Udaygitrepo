import { Component, OnInit } from '@angular/core';
import { FacilitiesService, Facility } from '../../services/facilities.service';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css'],
})
export class FacilitiesComponent implements OnInit {
  facilities: Facility[] = []; // List of facilities
  newFacility: Facility = {
    name: '',
    description: '',
    availability: '',
    type: '',
  }; // New facility object
  showAddForm: boolean = false; // Toggle for the add form

  constructor(private facilitiesService: FacilitiesService) {}

  ngOnInit(): void {
    this.loadFacilities(); // Fetch facilities on load
  }

  // Load all facilities from the service
  loadFacilities(): void {
    this.facilitiesService.getFacilities().subscribe((facilities: Facility[]) => {
      this.facilities = facilities;
    });
  }

  // Toggle the Add Facility form
  toggleAddForm(): void {
    this.showAddForm = !this.showAddForm;
  }

  // Add a new facility
  addFacility(): void {
    if (
      this.newFacility.name &&
      this.newFacility.description &&
      this.newFacility.availability &&
      this.newFacility.type
    ) {
      this.facilitiesService.addFacility(this.newFacility).subscribe((facility: Facility) => {
        this.facilities.push(facility); // Add to local list
        this.newFacility = { name: '', description: '', availability: '', type: '' }; // Reset form
        this.showAddForm = false; // Hide form
      });
    } else {
      alert('Please fill in all fields before submitting!');
    }
  }
}