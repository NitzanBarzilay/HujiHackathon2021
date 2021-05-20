import {Component, OnInit} from '@angular/core';
import {StoresService} from '../stores.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  storeList: Store[] = [];

  constructor(private stores: StoresService) {
    this.storeList = stores.getStores();
  }

  ngOnInit(): void {
  }

}
