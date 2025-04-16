// import { Injectable} from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class CustomerService {

//   constructor() { }

//   // createCustomer(customerData: any): Observable<any> {
//   //   return this.http.post(`${this.apiUrl}/customers`, customerData);
//   // }
  
// }





// src/app/services/customer.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CustomerService {
  private baseUrl = 'http://localhost:8080/api/customers'; // Spring Boot base URL

  constructor(private http: HttpClient) {}

  createCustomer(brokerId: number, customerData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/create/${brokerId}`, customerData);
  }

  getCustomers(brokerId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/broker/${brokerId}`);
  }



  softDeleteCustomer(customerId: number): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/softDelete/${customerId}`, {});
  }
  
  
  updateCustomer(customerId: number, customerData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/update/${customerId}`, customerData);
  }
  
  getCustomerById(customerId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/getCustomerById/${customerId}`);
  }
  
}
