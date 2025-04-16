// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   constructor() { }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/auth';

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<string> {
    return this.http.post(`${this.baseUrl}/login`, { email, password }, { responseType: 'text' });
  }

  register(data: any): Observable<string> {
    return this.http.post(`${this.baseUrl}/register`, data, { responseType: 'text' });
  }



  redirectToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  getBrokerDetails(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/loggedBroker`); // API endpoint to get broker details
  }

  // getUserEmail(): string | null {
  //   const user = localStorage.getItem('user'); // if storing user as JSON
  //   if (user) {
  //     const parsed = JSON.parse(user);
  //     return parsed.email; // 👈 just return email string
  //   }
  //   return null;
  // }

  getUserEmail(): string | null {
    if (typeof window !== 'undefined' && localStorage.getItem('userEmail')) {
      return localStorage.getItem('userEmail');
    }
    return null;
  }
  

  getBrokerByEmail(email: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/loggedBroker`, { params: { email } });
  }
  
  
}
