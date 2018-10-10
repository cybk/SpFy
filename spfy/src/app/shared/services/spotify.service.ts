import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private  spotifyApiUrl = environment.spotifyApiUrl;
  private token = environment.token;
  constructor( private httpClient: HttpClient) { }

  getCurrentUser() {
    this.httpClient.get(`${this.spotifyApiUrl}/me`)
      .toPromise();
  }
}
