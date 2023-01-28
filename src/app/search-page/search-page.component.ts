import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../data-type';
import { SearchBarService } from '../home-page-service/search-bar.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  display_search_product_results: undefined | Product[]
  constructor(private activeRoute: ActivatedRoute, private service: SearchBarService) { }
  ngOnInit(): void {
    let query = this.activeRoute.snapshot.paramMap.get('query')
    // console.log(query)
    query && this.service.product_search(query).subscribe((data) => {
      console.log(data)
      this.display_search_product_results = data
    })
  }
}
