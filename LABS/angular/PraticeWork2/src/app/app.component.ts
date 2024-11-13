// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'PraticeWork2';
// }



import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Phone } from './model/phone.model';
import { PhoneService } from './service/phone.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'PhoneManager';
  phones: Phone[] = [];
  selectedPhone: Phone = {
    id: '',
    ownerName: '',
    modelName: '',
    price: '',
    location: ''
  };
  isEditing = false;

  constructor(private phoneService: PhoneService) {}

  ngOnInit(): void {
    this.loadPhones();
  }

  loadPhones(): void {
    this.phoneService.getPhones().subscribe(data => {
      this.phones = data;
    });
  }

  getNextId(): string {
    // Find the maximum ID and increment it
    const maxId = this.phones.reduce((max, phone) => Math.max(max, Number(phone.id)), 0);
    return (maxId + 1).toString();
  }

  onSelect(phone: Phone): void {
    this.selectedPhone = { ...phone };
    this.isEditing = true;
  }

  onSubmit(): void {
    if (this.isEditing && this.selectedPhone.id) {
      // Update
      this.phoneService.updatePhone(this.selectedPhone).subscribe(() => {
        this.loadPhones();
        this.resetForm();
      });
    } else {
      // Create
      this.selectedPhone.id = this.getNextId(); // Set the next incremental ID
      this.phoneService.createPhone(this.selectedPhone).subscribe(() => {
        this.loadPhones();
        this.resetForm();
      });
    }
  }

  onDelete(id: string): void {
    if (confirm('Are you sure you want to delete this phone?')) {
      this.phoneService.deletePhone(id).subscribe(() => {
        this.loadPhones();
      });
    }
  }

  resetForm(): void {
    this.selectedPhone = {
      id: '',
      ownerName: '',
      modelName: '',
      price: '',
      location: ''
    };
    this.isEditing = false;
  }
}
