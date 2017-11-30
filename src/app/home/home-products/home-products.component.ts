import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.scss']
})
export class HomeProductsComponent implements OnInit {

  constructor() { }
  @Input() prods: any[];
  ngOnInit() {
  }

}
