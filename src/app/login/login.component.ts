


import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [FormsModule, CommonModule, ReactiveFormsModule, HttpClientModule], // Ensure HttpClientModule is here
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {

    this.authService.login(this.email, this.password).subscribe({
      next: (res) => {
        localStorage.setItem('userEmail', this.email); // ✅ Save email
        this.authService.redirectToDashboard();   // ✅ Navigate to dashboard
      },
      error: (err) => {
        console.error('Login failed', err);
      }
    });
    

  }
}
