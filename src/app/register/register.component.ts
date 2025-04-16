
import { Router } from '@angular/router'; 
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [FormsModule, CommonModule, ReactiveFormsModule, HttpClientModule],
  standalone: true
})
export class RegisterComponent {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (this.user.password !== this.user.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    this.authService.register(this.user).subscribe(
      (response) => {
        alert('Registration successful!');
        this.router.navigate(['/login']);  // Redirect to login page after success
      },
      (error) => {
        console.error('Registration error:', error);
        alert('Registration failed. Please try again.');
      }
    );
  }
}
