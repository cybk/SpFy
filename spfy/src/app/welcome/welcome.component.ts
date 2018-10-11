import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { SpotifyService } from './../shared/services/spotify.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  public topItems: Array<any>;
  public playlists: Array<any>;
  constructor(
    private spotifyService: SpotifyService,
    private router: Router
    ) { }

  ngOnInit() {
    this.getMyTopArtists();
    this.getMyPlayLists();
  }

  getMyTopArtists(): void {
    this.spotifyService.getTop('artists')
    .then(top => {
      console.log(top);
      this.topItems = top.items;
    })
    .catch(err => console.log(err));
  }

  getMyPlayLists(): void {
    this.spotifyService.getMyPlaylists()
    .then(lists => {
      this.playlists = lists.items;
      console.log(this.playlists);
    })
    .catch(err => console.log(err));
  }

}
