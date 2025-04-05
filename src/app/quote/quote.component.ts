// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-quote',
//   imports: [],
//   templateUrl: './quote.component.html',
//   styleUrl: './quote.component.css'
// })
// export class QuoteComponent {

// }


import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent  {
  
  reviews = [
    'Great service and easy claims process!',
    'Affordable plans and great customer support.',
    'Highly recommended for hassle-free insurance!'
  ];

  
}
