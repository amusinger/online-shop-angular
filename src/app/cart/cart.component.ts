import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartService: RequestService) { }

  inCart;

  ngOnInit() {
    this.getItems();
    console.log(this.inCart);
  }

  getItems(){
    this.cartService.ViewCart()
    .then(data => this.inCart = data);
  }

  // buyItem(id: String){
  //   this.cartService.BuyItem(id);
  // }

  removeItem(id: String){
    for(let i in this.inCart){
      if(i['product_id'] == id){
        this.inCart.removeItem(i);
      }
    }
    
    this.cartService.RemoveFromCart(id);
    this.cartService.CountCart().subscribe(data => {
      var x = data.json()
      localStorage.setItem("count", String(x));
    })

    this.getItems();

  }

  // ngAfterViewChecked(){
  //   this.getItems();
  // }

}
