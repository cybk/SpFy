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
  private params = new HttpHeaders()
  .set('Accept', 'application/json')
  .set('Content-Type', 'application/json')
  .set('Authorization', this.token);

  getCurrentUser(): Promise<any> {
    return this.httpClient.get(`${this.spotifyApiUrl}/me`, {headers: this.params})
      .toPromise();
  }

  getTop(type: string): Promise<any> {
    return this.httpClient.get(`${this.spotifyApiUrl}/me/top/${type}`, {headers: this.params})
      .toPromise();
  }
}
