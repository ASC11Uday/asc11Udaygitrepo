import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormBuilder,FormGroup, Form } from '@angular/forms';
import { EmployeeService } from '../service/employee-service';
import { group } from '@angular/animations';

@Component({
  selector: 'app-add-emp-del',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-emp-del.component.html',
  styleUrl: './add-emp-del.component.css'
})
export class AddEmpDelComponent  {
  addform:FormGroup;
  constructor(private formbuilder: FormBuilder,private employeeService: EmployeeService){
    this.addform = this.formbuilder.group({
      id:[],
      name:[],
      salary:[],
    });
  }
  // ngOnInit(): void {
  //   this.addform = this.formbuilder.group({
  //     id:[],
  //     name:[],
  //     salary:[],
  //   });
  // }
  saveEmployee(){
    console.log("Employee details sent to server.")
  }

}
