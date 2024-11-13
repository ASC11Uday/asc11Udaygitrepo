import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Phone } from "../model/phone.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PhoneService {
    baseUrl: string = 'http://localhost:3000/phones';
    
    constructor(private http: HttpClient) {}

    // READ (Get all phones)
    getPhones(): Observable<Phone[]> {
        return this.http.get<Phone[]>(this.baseUrl);
    }

    // READ (Get single phone)
    getPhoneById(id: string): Observable<Phone> {
        return this.http.get<Phone>(`${this.baseUrl}/${id}`);
    }

    // CREATE
    createPhone(phone: Phone): Observable<Phone> {
        return this.http.post<Phone>(this.baseUrl, phone);
    }

    // UPDATE
    updatePhone(phone: Phone): Observable<Phone> {
        return this.http.put<Phone>(`${this.baseUrl}/${phone.id}`, phone);
    }

    // DELETE
    deletePhone(id: string): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/${id}`);
    }
}


