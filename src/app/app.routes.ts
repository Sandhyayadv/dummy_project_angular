import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuoteCreationComponent } from './quote-creation/quote-creation.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { PolicyCreationComponent } from './policy-creation/policy-creation.component';
import { CustomersComponent } from './customers/customers.component';
import { ReportComponent } from './report/report.component';
import { SupportComponent } from './support/support.component';
import { ViewAllQuotesComponent } from './view-all-quotes/view-all-quotes.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
// export const routes: Routes = [
//   { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect root to home
//   { path: 'home', component: HomeComponent }, // Ensure this exists
//   { path: 'login', component: LoginComponent }, // Example route
//   {path:'signup',component: RegisterComponent},
//   {path:'dashboard', component:DashboardComponent},
//   {path:'quoteCreation',component:QuoteCreationComponent},
//   { path: '**', redirectTo: 'home' } // Catch invalid URLs
// ];

export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: RegisterComponent },
    ]
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
     
      {path: 'dashboard', component: DashboardComponent },
      {path: 'quoteCreation', component: QuoteCreationComponent },
      {path: 'policyCreation', component: PolicyCreationComponent },
      {path:'customer',component:CustomersComponent},
      {path:'report', component:ReportComponent},
      {path:'support', component:SupportComponent},
      {path:'viewAllQuotes',component:ViewAllQuotesComponent},
      {path:'createCustomer', component:CreateCustomerComponent},
      {
        path: 'editCustomer/:id',
        loadComponent: () => import('./edit-customer/edit-customer.component').then(m => m.EditCustomerComponent)
      }
      
      // {path:'editCustomer/:id', component:EditCustomerComponent}
      // add more routes here
    ]
  },
  
  { path: '**', redirectTo: '' } // fallback
];
