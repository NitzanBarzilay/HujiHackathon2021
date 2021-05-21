import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoresService {
  stores: Store[] = [
    this.createMockStore("name1", "food"),
    this.createMockStore("name2", "food"),
    this.createMockStore("name3", "food"), 
  ];

  getStores() : Store[]{
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

  getHebCatagories() : string[]{
    return [
      'אופנה',
      'אוכל',
      'ציוד משרדי',
      'קוסמטיקה',
      'ספרים ואומנות',
      'גינון',
      'אלקטרוניקה',
      'בריאות',
      'ספורט'
    ];
  }

  turnHebCategoryToEng(category: string) {
    var ind = this.getHebCatagories().indexOf(category);
    return this.getCatagories()[ind]
  }

  getStoresByCatagory(category: string) : Store[]{
    category = this.turnHebCategoryToEng(category);
    switch(category) {
      case 'Fashion': {
        return [
          this.createMockStore("fashion1", "fashion"),
          this.createMockStore("fashion2", "fashion"),
          this.createMockStore("fashion3", "fashion"), 
        ];
      }
      case 'Food': {
        return [
          this.createMockStore("food1", "food"),
          this.createMockStore("food2", "food"),
          this.createMockStore("food3", "food"), 
        ];
      }
      case 'all': {
        return [
          this.createMockStore("food1", "food"),
          this.createMockStore("fashion1", "fashion"),
          this.createMockStore("food2", "food"), 
        ];
      }
      default: {
        return [];
      }
    }
  }

  createMockStore(inName: string, inCatagory: string) : Store {
    return { name: inName,
      ownerName: "owner1",
      ownerEmail: "mail",
      city: "city",
      description: "desc",
      category: inCatagory,
      veganFriendly: true,
      secondHand: false,
      kosher: false,
      ecoFriendly: true,
      socialBusiness: false,
      madeInIsrael: false,
    }
  }
  constructor() { }  
}
