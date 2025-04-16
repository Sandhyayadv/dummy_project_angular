


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-policy-creation',
  templateUrl: './policy-creation.component.html',
  styleUrls: ['./policy-creation.component.css'],
  standalone:true,
  imports:[CommonModule,ReactiveFormsModule,FormsModule]

})
export class PolicyCreationComponent {
  searchTerm = '';
  selectedTab = 'All';
  currentPage = 1;
  itemsPerPage = 3;

  tabs = ['All', 'Active', 'Pending', 'Due for Renewal', 'Expired'];

  policies = [
    {
      number: 'POL-2025-0587',
      customer: 'Acme Inc.',
      type: 'Professional Liability',
      effective: 'Jan 15, 2025',
      expiration: 'Jan 15, 2026',
      premium: '$4,350',
      status: 'Active'
    },
    {
      number: 'POL-2024-0584',
      customer: 'Creative Design Studio',
      type: 'General Liability',
      effective: 'Dec 20, 2024',
      expiration: 'Dec 20, 2025',
      premium: '$2,450',
      status: 'Pending'
    },
    {
      number: 'POL-2024-0583',
      customer: 'Financial Advisors Inc.',
      type: 'Professional Liability',
      effective: 'Dec 15, 2024',
      expiration: 'Dec 15, 2025',
      premium: '$8,750',
      status: 'Due for Renewal'
    },
    {
      number: 'POL-2024-0582',
      customer: 'Healthcare Group LLC',
      type: 'Professional Liability',
      effective: 'Dec 10, 2024',
      expiration: 'Dec 10, 2025',
      premium: '$9,200',
      status: 'Expired'
    },
    {
      number: 'POL-2024-0581',
      customer: 'Construction Experts Co.',
      type: 'Workers Compensation',
      effective: 'Dec 05, 2024',
      expiration: 'Dec 05, 2025',
      premium: '$12,800',
      status: 'Active'
    }
  ];

  selectTab(tab: string, event: Event) {
    event.preventDefault();
    this.selectedTab = tab;
    this.currentPage = 1;
  }

  get filteredPolicies() {
    const term = this.searchTerm.toLowerCase();
    return this.policies.filter(policy => {
      const matchSearch =
        policy.number.toLowerCase().includes(term) ||
        policy.customer.toLowerCase().includes(term) ||
        policy.type.toLowerCase().includes(term);

      const matchStatus =
        this.selectedTab === 'All' || policy.status === this.selectedTab;

      return matchSearch && matchStatus;
    });
  }

  get paginatedPolicies() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredPolicies.slice(start, start + this.itemsPerPage);
  }

  get totalPages() {
    return Math.ceil(this.filteredPolicies.length / this.itemsPerPage);
  }

  get totalPagesArray() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  changePage(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
  }
  
  getStatusClass(status: string): string {
    switch (status) {
      case 'Active':
        return 'bg-success';
      case 'Pending':
        return 'bg-warning text-dark';
      case 'Due for Renewal':
        return 'bg-info text-dark';
      case 'Expired':
        return 'bg-danger';
      default:
        return 'bg-secondary';
    }
  }
  
}
