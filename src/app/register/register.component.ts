// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-register',
//   imports: [],
//   templateUrl: './register.component.html',
//   styleUrl: './register.component.css'
// })
// export class RegisterComponent {

// }


import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone:true,
  imports:[FormsModule,CommonModule]
})
export class RegisterComponent {
  user = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  onSubmit() {
    if (this.user.password !== this.user.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    console.log('User Registered:', this.user);
    alert('Registration Successful!');
  }
}

