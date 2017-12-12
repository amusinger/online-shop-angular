import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../request.service';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private categoryService: RequestService) {
    this.countCart();
   }

  ngOnInit() {
    this.getCategories();
  }
  cats;
  count: Observable<any>;
  cnt: String = localStorage.getItem("count") || "0"
  getCategories(){
    this.categoryService.getCategories().then(data => {
      this.cats = data;
      this.countCart();
    });

  }

  countCart(){
    this.categoryService.CountCart().subscribe(data=>{
      this.count = data.json();
      var cnt = String(this.count);
      localStorage.setItem("count", cnt)
    });
  }

  ngDoCheck(){
    this.cnt = String(Number(localStorage.getItem("count")) || 0);
  }

  // ngAfterViewInit(){
  //   this.categoryService.CountCart().subscribe(data=>{
  //     this.count = data.json();
  //   });
  // }
  // ngDoCheck(){
  //   console.log("changes!");
  //   var x = localStorage.getItem("userID")
  //   if(Number(x)>=0){
  //     this.countCart();
  //   }else{
  //     this.count= 0;
  //   }
    
  // }

}
