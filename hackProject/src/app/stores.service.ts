import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoresService {
  stores: Store[] = [
    this.createMockStore("name1", "food"),
    this.createMockStore("name2", "food"),
    this.createMockStore("name3", "food"), 
  ];
  private url = "http://172.29.108.96:8080"

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
  getStoresByCatagory(category: string) : Store[]{
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

  getStoresByCatagory2(inCategory: string): Observable<Store[]> {
    return this.http.get<Store[]>(this.url + '/stores_by_category',  
        {params: {category: inCategory}}
    ).pipe(
      catchError(this.handleError<Store[]>('getHeroes', []))
    );
  }

  postStore(store: Store) {
    this.http.post(this.url + '/add_store', store).pipe(
      catchError(this.handleError<Store[]>('getHeroes', []))
    ).subscribe(() => {
      console.log("success")
    });
  }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  constructor(private http: HttpClient) { }  
}
