// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-edit-customer',
//   imports: [],
//   templateUrl: './edit-customer.component.html',
//   styleUrl: './edit-customer.component.css'
// })
// export class EditCustomerComponent {

// }


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CustomerService } from '../services/customer.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css'],
  standalone:true,
  imports: [CommonModule, ReactiveFormsModule,RouterLink]
})
export class EditCustomerComponent implements OnInit {
  customerForm!: FormGroup;
  customerId!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    // Get the customer id from the route parameters.
    this.customerId = Number(this.route.snapshot.paramMap.get('id'));

    // Initialize the form.
    this.customerForm = this.fb.group({
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

    // Load and populate the customer details.
    this.customerService.getCustomerById(this.customerId).subscribe({
      next: (data) => {
        this.customerForm.patchValue({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          dob: data.dob,
          phone: data.phone,
          pan: data.pan,
          aadhar: data.aadhar,
          address: data.address,
          city: data.city,
          pin: data.pin
        });
      },
      error: (err) => {
        console.error('Failed to load customer details', err);
        this.router.navigate(['/customers']);
      }
    });
  }

  onSubmit(): void {
    if (this.customerForm.valid) {
      this.customerService.updateCustomer(this.customerId, this.customerForm.value).subscribe({
        next: (updatedCustomer) => {
          alert('Customer updated successfully!');
          this.router.navigate(['/customer']);
        },
        error: (err) => {
          console.error('Failed to update customer', err);
          alert('Update failed! Please try again.');
        }
      });
    } else {
      alert('Please fix the errors in the form.');
      this.customerForm.markAllAsTouched();
    }
  }
}
