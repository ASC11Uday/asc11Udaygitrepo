// import { Injectable } from "@angular/core";
// import { HttpClient } from "@angular/common/http";
// import { Employee } from "../model/employeephonedetails";
// @Injectable({
//     providedIn:'root'
// })
// export class PhoneService{
//     baseUrl : string ='http://localhost:3000/employees'
//     constructor(private http: HttpClient){

//     }
//     getEmployees(){
//         return this.http.get<Employee[]>(this.baseUrl);
//     }
// }
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Employee } from "../model/employeephonedetails";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PhoneService {
    baseUrl: string = 'http://localhost:3000/employees';
    
    constructor(private http: HttpClient) {}

    // READ (Get all employees)
    getEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>(this.baseUrl);
    }

    // READ (Get single employee)
    getEmployeeById(id: number): Observable<Employee> {
        return this.http.get<Employee>(`${this.baseUrl}/${id}`);
    }

    // CREATE
    createEmployee(employee: Employee): Observable<Employee> {
        return this.http.post<Employee>(this.baseUrl, employee);
    }

    // UPDATE
    updateEmployee(employee: Employee): Observable<Employee> {
        return this.http.put<Employee>(`${this.baseUrl}/${employee.id}`, employee);
    }

    // DELETE
    deleteEmployee(id: number): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/${id}`);
    }
}