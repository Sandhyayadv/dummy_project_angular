import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
@Component({
  selector: 'app-root',
  imports: [HomeComponent,LoginComponent,RouterOutlet,RouterLink,RegisterComponent],
   standalone:true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-project';
}
