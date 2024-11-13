// import { CommonModule } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { Employee } from './model/employeephonedetails';
// import { PhoneService } from './service/phone_service';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   // imports: [RouterOutlet],
//   imports :[CommonModule],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent implements OnInit {
//   title = 'PracticeWork';
//   employees?:Employee[] = [];
//   constructor(private phone_service:  PhoneService){

//   }
//   ngOnInit(): void{
//     console.log("asynchrnously retrieving data from the server");
//     this.phone_service.getEmployees().subscribe(data => this.employees = data);
// }
// }
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Employee } from './model/employeephonedetails';
import { PhoneService } from './service/phone_service';

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
  title = 'PracticeWork';
  employees: Employee[] = [];
  selectedEmployee: Employee = {};
  isEditing = false;

  constructor(private phoneService: PhoneService) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.phoneService.getEmployees().subscribe(data => {
      this.employees = data;
    });
  }

  onSelect(employee: Employee): void {
    this.selectedEmployee = { ...employee };
    this.isEditing = true;
  }

  onSubmit(): void {
    if (this.isEditing && this.selectedEmployee.id) {
      // Update
      this.phoneService.updateEmployee(this.selectedEmployee).subscribe(() => {
        this.loadEmployees();
        this.resetForm();
      });
    } else {
      // Create
      this.phoneService.createEmployee(this.selectedEmployee).subscribe(() => {
        this.loadEmployees();
        this.resetForm();
      });
    }
  }

  onDelete(id: number): void {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.phoneService.deleteEmployee(id).subscribe(() => {
        this.loadEmployees();
      });
    }
  }

  resetForm(): void {
    this.selectedEmployee = {};
    this.isEditing = false;
  }
}