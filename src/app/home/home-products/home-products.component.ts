import { Component, OnInit, Input } from '@angular/core';
import { RequestService } from '../../request.service';

@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.scss']
})
export class HomeProductsComponent implements OnInit {

  constructor(private filterService: RequestService) { }
  @Input() prods: any[];

  min;
  max;

  ngOnInit() {
  }

  filterItems(){
    this.filterService.filterProducts(this.min, this.max).then( data=>{
     this.prods = data;
    })
  }
   compare(a,b) {
    if (a.title[0].toLowerCase() < b.title[0].toLowerCase())
      return -1;
    if (a.title[0].toLowerCase() > b.title[0].toLowerCase())
      return 1;
    return 0;
  }
  
  Reset(){
    this.filterService.getProducts().then(data => {
      this.prods = data;
      this.max = "";
      this.min = "";
    })
  }
  OrderByName(){
    this.prods.sort(this.compare); 
  }

  OrderByPrice(){
    this.prods.sort(this.priceCompare);
  }
  priceCompare(a,b) {
    if (a.price < b.price)
      return -1;
    if (a.price > b.price)
      return 1;
    return 0;
  }

}
