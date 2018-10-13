import { OauthService } from './../shared/services/oauth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SpotifyService } from './../shared/services/spotify.service';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss']
})
export class TokenComponent implements OnInit {
  public code: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private spotifyService: SpotifyService,
    private oauthService: OauthService,
    private router: Router
  ) {
    this.activatedRoute.queryParams.subscribe(q => {
      this.code = q.code;

      console.log(q.code);
      this.getToken();
    });


  }

  ngOnInit() {
  }

  getToken(): void {
    this.spotifyService.getToken(this.code)
      .then(tk => {
        this.oauthService.setToken(`${tk.token_type} ${tk.access_token}`);
        this.router.navigate(['/']);
          console.log('TOKEN', tk);
      }).catch(err => console.log(err));
  }
}
