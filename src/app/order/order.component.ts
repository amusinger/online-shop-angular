import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(private orderService: RequestService) { }

  orders;
  prods: any[] = [];
  ngOnInit() {
    this.getItems();
    console.log(this.orders);
  }

  getItems(){
    this.orderService.ViewOrders()
    .then(data => {
      this.orders = data;
      for(let i of data){
        this.orderService.ViewItem(i.product_id).then(
          data => {
            this.prods.push(data);
          }
        )
      }
      
      console.log(this.orders);
    });
  }

}
