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

}
