import { Component, OnInit } from '@angular/core';

import { SpotifyService } from './../shared/services/spotify.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private userData: string;
  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.spotifyService.getCurrentUser()
      .then(data => {
        console.log(data);
      });
  }

}
