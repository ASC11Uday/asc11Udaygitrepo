import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Employee } from "../model/employee_model";
@Injectable({
    providedIn:'root'
})

export class EmployeeService{
    baseUrl : string = 'http://localhost:3000/employees'
    constructor(private http: HttpClient){

    }
    getEmployees(){
        return this.http.get<Employee[]>(this.baseUrl);
    }
    createEmployee(employee:Employee){
        return this.http.post(this.baseUrl,employee);
    }
}