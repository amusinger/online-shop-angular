import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from '../request.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-make-order',
  templateUrl: './make-order.component.html',
  styleUrls: ['./make-order.component.scss']
})
export class MakeOrderComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private orderService: RequestService) { }

  public product;
  productID: string;
  private sub: any;
  address: String;
  

  ngOnInit() {
    console.log(this.route);
    this.sub = this.route.params.subscribe(params => {
      this.productID = params['id'] as string; 
      console.log(this.productID);
      this.orderService.ViewItem(this.productID).then(data => this.product = data)
   });
  }

  buyItem(){
    this.orderService.BuyItem(this.product.id, this.address);
    // console.log(this.product);
    // console.log(this.address);
  }

}
