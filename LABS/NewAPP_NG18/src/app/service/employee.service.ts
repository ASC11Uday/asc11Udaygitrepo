// 1. Connect to an external API to get the list of employees
import { HttpClient } from "@angular/common/http";
// 2. create service to get the list of emplyees.
import { Injectable } from "@angular/core";
// 3.Use an observable to get the list of employee
import { Observable } from "rxjs";
// 4. Use the Employee model to define the structure of the mployee object
import { Employee } from "../model/employee.model";


@Injectable({
    providedIn: "root"
})
export class EmployeeService{
    baseurl : string = "http://localhost:3000/employees";
    constructor(private httpclient:HttpClient){
    }
    //get the list of employees
    getEmployees(){
        return this.httpclient.get<Employee[]>(this.baseurl);
    }
    //get an employee by id
    getEmployeeId(id : number){
        return this.httpclient.get<Employee>(this.baseurl + "/" + id);
    }
    // create an employee
    createEmployee(employee : Employee){
        return this.httpclient.post<Employee>(this.baseurl,employee);
    }
    // update an employee
    updateEmployee(id: number,employee:any){
        // return this.httpclient.put<Employee>(this.baseurl + "/" + id);
        return this.httpclient.put(`${this.baseurl}/${id}`,employee);
    }
    //delete an employee
    deleteEmployee(id:number){
        return this.httpclient.delete(this.baseurl +"/"+ id);
    }

}