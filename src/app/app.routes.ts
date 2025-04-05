
// import { FormsModule } from '@angular/forms';

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect root to home
  { path: 'home', component: HomeComponent }, // Ensure this exists
  { path: 'login', component: LoginComponent }, // Example route
  {path:'register',component: RegisterComponent},
  { path: '**', redirectTo: 'home' } // Catch invalid URLs
];
