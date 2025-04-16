import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service'; // Correct import

interface Broker {
  firstName: string;
  lastName:string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports:[FormsModule,ReactiveFormsModule,CommonModule]
})
export class DashboardComponent {

  brokerName: string = '';
    constructor(private http: HttpClient, private authService: AuthService) {}

    ngOnInit(): void {
      const userEmail = this.authService.getUserEmail();
    
      if (userEmail) {
        this.authService.getBrokerByEmail(userEmail).subscribe({
          next: (user:any) => this.brokerName = `${user.firstName} ${user.lastName}`,
          error: (err:any) => console.error('Failed to fetch broker info:', err)
        });
      } else {
        console.warn('User email not found in AuthService');
      }
    }

  policies = [
    { name: 'Dr. Sarah Johnson', specialty: 'Cardiology', days: 7, premium: '$28,500', daysClass: 'bg-danger' },
    { name: 'Bay Area Surgeons', specialty: 'General Surgery', days: 12, premium: '$76,250', daysClass: 'bg-warning text-dark' },
    { name: 'Dr. Michael Chen', specialty: 'Neurology', days: 21, premium: '$32,100', daysClass: 'bg-warning text-dark' },
    { name: 'Women\'s Health Clinic', specialty: 'OB/GYN', days: 24, premium: '$85,400', daysClass: 'bg-warning text-dark' },
    { name: 'City Anesthesia Group', specialty: 'Anesthesiology', days: 30, premium: '$64,800', daysClass: 'bg-success' }
  ];

  activities = [
    { initial: 'Q', title: 'New Quote Received', description: 'Dr. Robert Anderson (Orthopedics)', time: '15 min ago', badgeClass: 'bg-primary' },
    { initial: 'P', title: 'Policy Bound', description: 'Metropolitan Pediatrics Group', time: '2 hours ago', badgeClass: 'bg-success' },
    { initial: 'C', title: 'New Claim Reported', description: 'Dr. Elizabeth Warner (Dermatology)', time: 'Yesterday', badgeClass: 'bg-danger' },
    { initial: 'S', title: 'Submission Completed', description: 'Lakeview Medical Associates', time: 'Yesterday', badgeClass: 'bg-purple' }
  ];
}
