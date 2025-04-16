


import { Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomerService } from '../services/customer.service';

interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  name: string; // consolidated property for filtering and display
  email: string;
  phone: string;
  address: string;
  // You can add profession or other fields if needed.
}

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule,RouterModule]
})
export class CustomersComponent implements OnInit {
  Math = Math;
  customers: Customer[] = [];
  filteredCustomers: Customer[] = [];
  displayedCustomers: Customer[] = [];
  searchTerm: string = '';
  activeTab: string = 'list';
  currentPage: number = 1;
  itemsPerPage: number = 5;
  brokerId: number = 1; // Change as needed, e.g., from login

  constructor(private customerService: CustomerService, private router: Router) {}

  ngOnInit(): void {
    this.fetchCustomers();
  }

  /**
   * Fetches customers from the backend and builds the consolidated name field.
   */
  fetchCustomers(): void {
    this.customerService.getCustomers(this.brokerId).subscribe({
      next: (data) => {
        // Reverse so that the newest customers appear at the top,
        // and assign a consolidated "name" field for filtering.
        this.customers = data.reverse().map((customer: any) => {
          customer.name = `${customer.firstName} ${customer.lastName}`;
          return customer;
        });
        this.applyFilters();
      },
      error: (err) => console.error('Failed to load customers:', err)
    });
  }

  /**
   * Navigate to the "Create Customer" page.
   */
  navigateToCreateCustomer(): void {
    this.router.navigate(['/createCustomer']);
  }

  // goToQuoteCreation(customerId: number) {
  //   this.router.navigate(['/quoteCreation'], {
  //     queryParams: { step: 2, customerId }
  //   });
  // }

  /**
   * Calls the service to soft-delete the customer, then refreshes the list.
   */
  onDeleteCustomer(customerId: number): void {
    this.customerService.softDeleteCustomer(customerId).subscribe({
      next: () => {
        // Refresh the customer list after deletion.
        this.fetchCustomers();
      },
      error: (err) => console.error('Failed to delete customer:', err)
    });
  }

  /**
   * Filter customers based on searchTerm. Filters on customer ID and consolidated name.
   */
  applyFilters(): void {
    const searchLower = this.searchTerm ? this.searchTerm.toLowerCase() : '';
    this.filteredCustomers = this.customers.filter(customer =>
      customer.id.toString().toLowerCase().includes(searchLower) ||
      (customer.name && customer.name.toLowerCase().includes(searchLower))
    );
    this.updateDisplayedCustomers();
  }

  /**
   * Updates the displayed customers based on current pagination.
   */
  updateDisplayedCustomers(): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.displayedCustomers = this.filteredCustomers.slice(start, end);
  }

  changePage(page: number): void {
    this.currentPage = page;
    this.updateDisplayedCustomers();
  }

  setTab(tab: string): void {
    this.activeTab = tab;
  }

  totalPages(): number {
    return Math.ceil(this.filteredCustomers.length / this.itemsPerPage);
  }
}


