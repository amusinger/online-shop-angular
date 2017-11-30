import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(private orderService: RequestService) { }

  orders
  ngOnInit() {
    this.getItems();
    console.log(this.orders);
  }

  getItems(){
    this.orderService.ViewCart()
    .then(data => this.orders = data);
  }

}
