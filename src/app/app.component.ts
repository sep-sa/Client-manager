import { Component } from '@angular/core';
import { Customer } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  customer: Customer = {
    name: 'Jan Kowalski',
    photoUrl: 'assets/images/avatar.png',
    description: 'some customer',
    age: 35,
    address: { houseNumber: 17, street: 'Modrzewiowa', city: 'Jeleśnia' }
  };

  isActive = false;
  textDecoration = 'none';

  textUnderline() {
    this.textDecoration = this.textDecoration === 'none' ? 'underline' : 'none';
  }
}
