import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Employee } from './model/employee_model';
import { EmployeeService } from './service/employee-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet],
  imports:[CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'angular-Project';
  employees? : Employee[];
  constructor(private employeeService : EmployeeService){
  }
  ngOnInit(): void{
    console.log("asynchrnously retrieving data from the server");
    this.employeeService.getEmployees().subscribe(data => this.employees = data);
  }
}
