import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../service/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-emp',
  // standalone: true,
  // imports: [],
  templateUrl: './update-emp.component.html',
  styleUrl: './update-emp.component.css'
})
export class UpdateEmpComponent implements OnInit {
  id: number = 0;
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employee = new Employee();
    this.employeeService.getEmployeeId(this.id).subscribe(searchEmployee =>{
      this.employee = searchEmployee;
    },error => console.log(error));
  }

  updateEmployee() : void{
    this.employeeService.updateEmployee(this.id,this.employee)
    .subscribe(updatedEmployee => {console.log(updatedEmployee)},error => console.log(error));
    this.router.navigate(['/employees']);
  }
}
