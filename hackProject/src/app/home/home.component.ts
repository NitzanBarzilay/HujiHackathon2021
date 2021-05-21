import { Component, OnInit } from '@angular/core';
import { StoresService } from '../stores.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories: string[];

  constructor(private stores: StoresService) {
    this.categories = stores.getHebCategories();
  }

  ngOnInit(): void {
  }

}
