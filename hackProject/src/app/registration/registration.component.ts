import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StoresService } from '../stores.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationForm: FormGroup
  categories: string[];

  constructor(private fb: FormBuilder, private stores: StoresService) {
    this.categories = stores.getHebCategories();
    console.log('this.categories' + this.categories)
    this.registrationForm = this.fb.group({
      name: [''],
      ownerName: [''],
      ownerEmail: [''],
      city: [''],
      description: [''],
      category: [''],
      imageUrl: [''],
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
      email: this.registrationForm.value.ownerEmail,
      city: this.registrationForm.value.city,
      description: this.registrationForm.value.description,
      category: "food",
      image_url: this.registrationForm.value.imageUrl,
      vegan_friendly: this.registrationForm.value.veganFriendly,
      second_hand: this.registrationForm.value.secondHand,
      kosher: this.registrationForm.value.kosher,
      eco_friendly: this.registrationForm.value.ecoFriendly,
      social_business: this.registrationForm.value.socialBusiness,
      made_in_israel: this.registrationForm.value.madeInIsrael,
    };
    this.stores.postAddStore(newStore);
  }
}