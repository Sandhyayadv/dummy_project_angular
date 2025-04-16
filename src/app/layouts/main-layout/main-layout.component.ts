// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';
// import {  OnInit } from '@angular/core';
// import { AuthService } from '../services/auth.service';

// @Component({
//   selector: 'app-main-layout',
//   imports: [CommonModule,
//     RouterModule],
//   templateUrl: './main-layout.component.html',
//   styleUrl: './main-layout.component.css'
// })
// export class MainLayoutComponent implements OnInit {

//   this.http.get<Broker>('http://localhost:8080/auth/user?email=' + userEmail)
//   .subscribe(user => {
//     this.userName = user.firstName;
//   });

// }




// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
// import { AuthService } from '../../services/auth.service';




// interface Broker {
//   firstName: string;
// }

// @Component({
//   selector: 'app-main-layout',
//   standalone: true,
//   imports: [CommonModule, RouterModule],
//   templateUrl: './main-layout.component.html',
//   styleUrls: ['./main-layout.component.css']
// })
// export class MainLayoutComponent implements OnInit {
  
//   userName: string = '';

//   constructor(private http: HttpClient) {}

//   ngOnInit(): void {
//     const userEmail = 'test@example.com'; // Replace this with the logged-in user's email
//     this.http.get<Broker>('http://localhost:8080/auth/user?email=' + userEmail)
//       .subscribe(user => {
//         this.userName = user.firstName;
//       });
//   }
// }


import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service'; // Correct import

interface Broker {
  firstName: string;
  lastName:string;
}

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterModule,CommonModule],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  brokerName: string = '';

  constructor(private http: HttpClient, private authService: AuthService) {}
  

  ngOnInit(): void {
    const userEmail = this.authService.getUserEmail();
  
    if (userEmail) {
      this.authService.getBrokerByEmail(userEmail).subscribe({
        next: (user) => this.brokerName = `${user.firstName} ${user.lastName}`,
        error: (err) => console.error('Failed to fetch broker info:', err)
      });
    } else {
      console.warn('User email not found in AuthService');
    }
  }
  

}
