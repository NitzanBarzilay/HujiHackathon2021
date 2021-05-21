import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoresService {
  private url = "http://172.29.108.96:8080"

  getCategories() : string[]{
    return [
      'fashion',
      'food',
      'office',
      'cosmetics',
      'books',
      'gardening',
      'electronics',
      'pharma',
      'sports'
    ];
  }

  getHebCategories() : string[]{
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
    var ind = this.getHebCategories().indexOf(category);
    return this.getCategories()[ind]
  }

  getStoresByCategory(inCategory: string): Observable<Store[]> {
    let result: Store[] = []; 
    return this.http.get<Store[]>(this.url + '/stores_by_category',  
        {params: {category: inCategory}}
    );
  }

  getStoreByEmail(inEmail: string): Observable<Store[]> {
    return this.http.get<Store[]>(this.url + '/store_by_email',  
        {params: {email: inEmail}}
    );
  }

  postAddStore(store: Store) {
    let url = this.url + '/add_store' + '?' + 
      'name=' + store.name + '&email=' + store.email + '&city=' + store.city + '&description=' + store.description + 
      '&category=' + store.category + '&image_url=' + store.image_url +'&vegan_friendly=' + 
      store.vegan_friendly + '&second_hand=' + store.second_hand + '&kosher=' + store.kosher + 
      '&eco_friendly=' + store.eco_friendly + '&social_business=' + store.social_business +
      '&made_in_israel=' + store.made_in_israel;
    this.http.post<any>(url, {}).subscribe(() => {
      console.log("success")
    });
  }
  
  constructor(private http: HttpClient) { }  
}
