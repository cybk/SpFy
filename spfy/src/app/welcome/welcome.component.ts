import { Component, OnInit } from '@angular/core';

import { SpotifyService } from './../shared/services/spotify.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  public topItems: Array<any>;
  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.spotifyService.getTop('artists')
        .then(top => {
          console.log(top);
          this.topItems = top.items;
        })
        .catch(err => console.log(err));
  }

}
