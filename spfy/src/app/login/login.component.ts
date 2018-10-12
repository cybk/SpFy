import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(  ) {
  }

  ngOnInit() {
    const { client_id, client_secret, spotifyAccount, appUrl } = environment;
    const urlSpotify = `${spotifyAccount}authorize?client_id=${client_id}&response_type=code&redirect_uri=${appUrl}token`;
    console.log(urlSpotify);
    window.location.href = urlSpotify;
  }

}
