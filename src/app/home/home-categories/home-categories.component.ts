import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../request.service';

@Component({
  selector: 'app-home-categories',
  templateUrl: './home-categories.component.html',
  styleUrls: ['./home-categories.component.scss']
})
export class HomeCategoriesComponent implements OnInit {

  constructor(private catService: RequestService) { }

  cats;
  ngOnInit() {
  }

}
