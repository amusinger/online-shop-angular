import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  constructor(private route: ActivatedRoute,private searchService: RequestService) { }
  private sub: any;
  searchWord: string;
  results

  ngOnInit() {

    console.log(this.route);
    this.sub = this.route.params.subscribe(params => {
      this.searchWord = params['word']; 
      this.searchService.searchProducts(this.searchWord).then(data =>{
        this.results = data;
      })

  })
}

}
