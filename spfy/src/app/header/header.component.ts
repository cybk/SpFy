import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { SpotifyService } from './../shared/services/spotify.service';
import { OauthService } from '../shared/services/oauth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public me: any = {};
  constructor(
    private spotifyService: SpotifyService,
    private oauthService: OauthService,
    private router: Router
    ) { }

  ngOnInit() {
    this.spotifyService.getCurrentUser()
      .then(data => {
        this.me = data;
        console.log(this.me);
      })
      .catch(err => console.log(err));
  }

  logout(): void {
    this.oauthService.clearToken();
    this.router.navigate(['login']);

  }

}
