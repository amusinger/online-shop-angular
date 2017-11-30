import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  prods;
  constructor(private productService: RequestService) { }
  
    ngOnInit() {
      this.productService.getProducts().then(data => this.prods = data);
      console.log('hey');
      console.log(this.prods);
     }

}
