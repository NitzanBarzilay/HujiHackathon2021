import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoresService } from '../stores.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  storeList: Store[] = [];

  constructor(private stores: StoresService,   
    private route: ActivatedRoute) {
    let category: string = this.route.snapshot.paramMap.get('category') || 'all';
    let engCategory = stores.turnHebCategoryToEng(category);
    stores.getStoresByCategory(engCategory).subscribe((data: Store[]) => {
      this.storeList = data;
    });
  }

  ngOnInit(): void {
  }

}
