import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {StoresService} from '../stores.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationForm: FormGroup

  constructor(private fb: FormBuilder, private stores: StoresService) {
    this.registrationForm = this.fb.group({
      storeName: [''],
      storeOwner: [''],
      city: [''],
    });
  }

  submitStoreInfo() {
    let newStore: Store = {
      name: this.registrationForm.value.storeName, 
      owner: this.registrationForm.value.storeOwner, 
      city: this.registrationForm.value.city 
    };
    this.stores.addStore(newStore);
  }
}