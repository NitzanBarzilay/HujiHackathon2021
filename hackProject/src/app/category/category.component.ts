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
  hebCategory: string;

  constructor(private stores: StoresService,   
    private route: ActivatedRoute) {
    this.hebCategory = this.route.snapshot.paramMap.get('category') || 'all';
    const engCategory = stores.turnHebCategoryToEng(this.hebCategory);
    stores.getStoresByCategory(engCategory).subscribe((data: Store[]) => {
      this.storeList = data;
    });
  }

  ngOnInit(): void {
  }

}
