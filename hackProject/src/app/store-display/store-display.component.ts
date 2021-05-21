import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoresService } from '../stores.service';

@Component({
  selector: 'app-store-display',
  templateUrl: './store-display.component.html',
  styleUrls: ['./store-display.component.css']
})
export class StoreDisplayComponent implements OnInit {
  store: Store | undefined;

  constructor(private stores: StoresService,   
    private route: ActivatedRoute) {
    let storeArray: Store[];
    const email: string = this.route.snapshot.paramMap.get('email') ||'null';
    stores.getStoreByEmail(email).subscribe((data) => {
      console.log("data "+data);
      this.store = data[0];
    })
  }

  ngOnInit(): void {
  }

}
