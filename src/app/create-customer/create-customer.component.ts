import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CustomerService } from '../services/customer.service';
@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class CreateCustomerComponent implements OnInit {

  step: number = 1; 
  personal!: FormGroup;
  brokerId = 1; 

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.personal = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', Validators.required],
      phone: ['', Validators.required],
      pan: ['', Validators.required],
      aadhar: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      pin: ['', Validators.required]
    });
  }

  fields = [
    { label: 'First Name', key: 'firstName', type: 'text' },
    { label: 'Last Name', key: 'lastName', type: 'text' },
    { label: 'Email Address', key: 'email', type: 'email' },
    { label: 'Date of Birth', key: 'dob', type: 'date' },
    { label: 'Phone Number', key: 'phone', type: 'text' },
    { label: 'PAN Number', key: 'pan', type: 'text' },
    { label: 'Aadhar Number', key: 'aadhar', type: 'text' },
    { label: 'Current Address', key: 'address', type: 'text' },
    { label: 'City', key: 'city', type: 'text' },
    { label: 'Pin Code', key: 'pin', type: 'text' }
  ];

  // createCustomer(): void {
  //   if (this.personal.valid) {
  //     console.log(this.personal.value);
  //     // No toastr notifications, just a console log
  //     alert('Customer created successfully!'); // Simple alert instead
  //     this.router.navigate(['/customer']);
  //   } else {
  //     alert('Please fill in all required fields.');
  //     this.personal.markAllAsTouched();
  //   }
  // }


  createCustomer(): void {
    if (this.personal.valid) {
      const formData = this.personal.value;

      this.customerService.createCustomer(this.brokerId, formData).subscribe({
        next: (res) => {
          alert('Customer created successfully!');
          this.router.navigate(['/customer']); // navigate to view-all page
        },
        error: (err) => {
          console.error('Error creating customer:', err);
          alert('Something went wrong. Please try again.');
        }
      });
    } else {
      alert('Please fill in all required fields.');
      this.personal.markAllAsTouched();
    }
  }

}
