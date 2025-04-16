


import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-all-quotes',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './view-all-quotes.component.html',
  styleUrls: ['./view-all-quotes.component.css']
})
export class ViewAllQuotesComponent {
  constructor(private router:Router){}
  quotes = [
    {
      id: 'Q-20250411-001',
      company: 'Company 1',
      type: 'Medical Professional',
      status: 'Approved',
      created: '11 Apr 2025',
      premium: '₹8,500',
      coverage: '₹20,00,000'
    },
    {
      id: 'Q-20250410-002',
      company: 'Company 2',
      type: 'General Liability',
      status: 'Pending',
      created: '10 Apr 2025',
      premium: '₹12,750',
      coverage: '₹50,00,000'
    },
    {
      id: 'Q-20250409-003',
      company: 'Company 3',
      type: 'Property Insurance',
      status: 'Draft',
      created: '09 Apr 2025',
      premium: '₹24,200',
      coverage: '₹1,00,00,000'
    },
    {
      id: 'Q-20250408-004',
      company: 'Company 4',
      type: 'Medical Professional',
      status: 'Approved',
      created: '08 Apr 2025',
      premium: '₹9,800',
      coverage: '₹20,00,000'
    }
  ];

  filteredQuotes = [...this.quotes];

  currentView = 'list';
  currentPage = 1;
  itemsPerPage = 2;

  selectedStatus = 'All Statuses';
  selectedType = 'All Coverage Types';
  searchTerm = '';

  get paginatedQuotes() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredQuotes.slice(start, start + this.itemsPerPage);
  }

  goToQuoteCreation(customerId: number) {
    this.router.navigate(['/quote-creation'], {
      queryParams: { step: 2, customerId }
    });
  }

  totalPages(): number[] {
    return Array.from({ length: Math.ceil(this.filteredQuotes.length / this.itemsPerPage) }, (_, i) => i + 1);
  }

  changePage(page: number) {
    this.currentPage = page;
  }

  deleteQuote(id: string) {
    this.quotes = this.quotes.filter(q => q.id !== id);
    this.applyFilters();
  }

  applyFilters() {
    this.filteredQuotes = this.quotes.filter(quote => {
      const matchesStatus = this.selectedStatus === 'All Statuses' || quote.status === this.selectedStatus;
      const matchesType = this.selectedType === 'All Coverage Types' || quote.type === this.selectedType;
      const matchesSearch = quote.company.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                            quote.id.toLowerCase().includes(this.searchTerm.toLowerCase());
      return matchesStatus && matchesType && matchesSearch;
    });

    this.currentPage = 1; // reset to first page
  }
}


