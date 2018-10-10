import { Component, OnInit } from '@angular/core';

import { SpotifyService } from './../shared/services/spotify.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  private top: any;
  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.spotifyService.getTop('artists')
        .then(top => {
          console.log(top);
          this.top = top;
        })
        .catch(err => console.log(err));
  }

}
