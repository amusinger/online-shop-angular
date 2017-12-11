import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private prodService: RequestService) { }
  id;
  sub;
  prods;
  cat;
    ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
        this.id = params['id']; 
        this.prodService.getCategoryName(this.id).then(
          data =>{
            this.cat = data;
            this.prodService.getProductsInCategory(this.id)
            .then(data => this.prods = data);
          }
        )
      
        
     });
    }

}
