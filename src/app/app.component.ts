import { Component } from '@angular/core';
import { Customer, CustomerType } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  customer: Customer = {
    name: 'Jan Kowalski',
    photoUrl: 'assets/images/avatar.png',
    description: 'Some customer',
    age: 35,
    address: { houseNumber: 17, street: 'Modrzewiowa', city: 'Jeleśnia' },
    type: CustomerType.Premium
  };

  isActive = false;
  textDecoration = 'none';
  showPhoto = false;
  CustomerType = CustomerType;

  textUnderline() {
    this.textDecoration = this.textDecoration === 'none' ? 'underline' : 'none';
  }
}
