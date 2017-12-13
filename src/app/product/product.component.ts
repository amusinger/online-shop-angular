import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from '../request.service';
import { EventEmitter } from 'selenium-webdriver';
import { Output } from '@angular/core/src/metadata/directives';
import { HeaderComponent } from '../core/header/header.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor( private route: ActivatedRoute,
    private prodService: RequestService, private header: HeaderComponent) { }
id;
sub;
prod;

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; 
      this.prodService.ViewItem(this.id)
      .then(data => this.prod = data);
      
   });
  }
  
  addToCart(id: string){
    this.prodService.AddToCart(id);
    if(localStorage.getItem("userID")){
      var x = Number(localStorage.getItem("count")) + 1;
      localStorage.setItem("count", String(x));
    }
       
  }

}
