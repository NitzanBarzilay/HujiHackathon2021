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
  categories: string[];

  constructor(private fb: FormBuilder, private stores: StoresService) {
    this.categories = stores.getHebCatagories();
    this.registrationForm = this.fb.group({
      name: [''],
      ownerName: [''],
      ownerEmail: [''],
      city: [''],
      description: [''],
      category: [''],
      veganFriendly: [false],
      secondHand: [false],
      kosher: [false],
      ecoFriendly: [false],
      socialBusiness: [false],
      madeInIsrael: [false],
    });
  }

  submitStoreInfo() {
    let engCategory = this.stores.turnHebCategoryToEng(this.registrationForm.value.category);
    let newStore: Store = {
      name: this.registrationForm.value.name,
      ownerEmail: this.registrationForm.value.ownerEmail,
      city: this.registrationForm.value.city,
      description: this.registrationForm.value.description,
      category: engCategory,
      veganFriendly: this.registrationForm.value.veganFriendly,
      secondHand: this.registrationForm.value.secondHand,
      kosher: this.registrationForm.value.kosher,
      ecoFriendly: this.registrationForm.value.ecoFriendly,
      socialBusiness: this.registrationForm.value.socialBusiness,
      madeInIsrael: this.registrationForm.value.madeInIsrael,
    };
    this.stores.addStore(newStore);
    this.stores.postStore(newStore);
  }
}