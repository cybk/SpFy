import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { SpotifyService } from './../shared/services/spotify.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  public itemResults: Array<any>;
  constructor(
    private spotifyService: SpotifyService,
    private activatedRoute: ActivatedRoute
  ) {
     this.activatedRoute.queryParams.subscribe(q => {
       console.log('query: ', q.q);
       this.search(q.q);
     });
   }

  ngOnInit() {
  }


  search(query: string): void {
    this.spotifyService.searchArtist(query)
      .then(artists => {
        this.itemResults = artists.artists.items;
        console.log(this.itemResults );
      }).catch(err => console.log(err));
  }
}
