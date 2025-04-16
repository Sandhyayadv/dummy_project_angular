import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuoteCreationComponent } from './quote-creation/quote-creation.component';
import { CommonModule } from '@angular/common';
import { PolicyCreationComponent } from './policy-creation/policy-creation.component';
import { CustomersComponent } from './customers/customers.component';
import { ReportComponent } from './report/report.component';
import { SupportComponent } from './support/support.component';
import { ViewAllQuotesComponent } from './view-all-quotes/view-all-quotes.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';

@Component({
  selector: 'app-root',
  imports: [HomeComponent,LoginComponent,RouterOutlet,RouterLink,RegisterComponent,
    DashboardComponent,QuoteCreationComponent,PolicyCreationComponent,CustomersComponent,
    ReportComponent,SupportComponent,ViewAllQuotesComponent,CreateCustomerComponent,EditCustomerComponent],
   standalone:true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  // imports:[CommonModule]
})
export class AppComponent {
  title = 'my-angular-project';
}
