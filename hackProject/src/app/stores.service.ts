import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoresService {
  stores: Store[] = [
    {name:"aa",owner:"bb",city:"cc"},
    {name:"bb",owner:"cc",city:"dd"},
    {name:"zz",owner:"bb",city:"nn"},
  ];

  getStores() {
    return this.stores;
  }

  addStore(store: Store) {
    this.stores.push(store);
  }

  getCatagories() : string[]{
    return [
      'Fashion',
      'Food',
      'Office supplies',
      'Cosmetics',
      'Books and Arts',
      'Gardening',
      'Electronics',
      'Pharma',
      'Sports'
    ];
  }
  constructor() { }  
}
