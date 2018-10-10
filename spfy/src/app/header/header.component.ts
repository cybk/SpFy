import { Component, OnInit } from '@angular/core';

import { SpotifyService } from './../shared/services/spotify.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userData: any = {};
  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.spotifyService.getCurrentUser()
      .then(data => {
        this.userData = data;
        console.log(this.userData);
      })
      .catch(err => console.log(err));

      this.spotifyService.getTop('artists')
        .then(data => {
          console.log(data);
        })
        .catch(err => console.log(err));
  }

}
