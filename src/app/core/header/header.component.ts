import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../request.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private categoryService: RequestService) { }

  ngOnInit() {
    this.getCategories();
  }
  cats;
  count;
  getCategories(){
    this.categoryService.getCategories().then(data => {
      this.cats = data;
      this.countCart();
    });

  }

  countCart(){
    this.categoryService.CountCart().then(data => this.count = data);
  }

  ngDoCheck(){
    this.countCart();
  }

}
