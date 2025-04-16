




import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { NgChartsModule } from 'ng2-charts'; // ✅ UNCOMMENTED

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgChartsModule], // ✅ INCLUDED
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  selectedTimePeriod = 'This Month';
  selectedPolicyType = 'All Types';

  // Revenue Line Chart
  revenueChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        data: [220000, 235000, 248750, 260000],
        label: 'Total Revenue',
        fill: true,
        borderColor: '#007bff',
        backgroundColor: 'rgba(0,123,255,0.1)'
      }
    ]
  };

  revenueChartOptions: ChartOptions<'line'> = {
    responsive: true
  };

  // Policies Bar Chart
  policiesChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        data: [34, 38, 42, 45],
        label: 'New Policies',
        backgroundColor: '#28a745'
      }
    ]
  };

  policiesChartOptions: ChartOptions<'bar'> = {
    responsive: true
  };

  topProducts = [
    { rank: 1, type: 'Professional Liability', policies: 15, revenue: '$87,250', premium: '$5,816', growth: '+18%' },
    { rank: 2, type: 'Cyber Liability', policies: 12, revenue: '$75,840', premium: '$6,320', growth: '+23%' },
    { rank: 3, type: 'Workers Compensation', policies: 8, revenue: '$56,800', premium: '$7,100', growth: '+11%' },
    { rank: 4, type: 'General Liability', policies: 7, revenue: '$28,860', premium: '$4,123', growth: '+7%' }
  ];
}

