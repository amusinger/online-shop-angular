import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor( private route: ActivatedRoute,
    private prodService: RequestService) { }
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
  }

}
