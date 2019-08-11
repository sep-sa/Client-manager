import { Component } from '@angular/core';
import { Customer, CustomerType } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  customers: Customer[] = [
    {
    name: 'Jan Kowalski',
    photoUrl: 'assets/images/avatar.png',
    description: 'Some customer 0',
    age: 35,
    address: { houseNumber: 17, street: 'Modrzewiowa', city: 'Jeleśnia' },
    type: CustomerType.Premium,
    categories: ['Mała firma', 'Ważny klient', 'Magazynowanie']
  },
  {
    name: 'Robert Pieniążkowski',
    photoUrl: 'assets/images/avatar.png',
    description: 'Some customer 1',
    age: 46,
    address: { houseNumber: 35, street: 'Podwale', city: 'Żywiec' },
    type: CustomerType.VIP,
    categories: ['Średnia firma', 'Dzwonić raz w miesiącu', 'Budownictwo']
  },
  {
    name: 'Anna Dzwonek',
    photoUrl: 'assets/images/avatar.png',
    description: 'Some customer 2',
    age: 37,
    address: { houseNumber: 2, street: 'Kolumnowa', city: 'Kraków' },
    type: CustomerType.Standard,
    categories: ['Mała firma', 'Księgowość']
  }
];

  customer: Customer = this.customers[0];

  isActive = false;
  textDecoration = 'none';
  showPhoto = false;
  CustomerType = CustomerType;

  textUnderline() {
    this.textDecoration = this.textDecoration === 'none' ? 'underline' : 'none';
  }
}
