import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from './../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private  spotifyApiUrl = environment.spotifyApiUrl;
  private token = environment.token;
  constructor( private httpClient: HttpClient) { }

  getCurrentUser(): Promise<any> {
    const params = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set('Authorization', this.token);
    return this.httpClient.get(`${this.spotifyApiUrl}/me`, {headers: params})
      .toPromise();
  }
}
