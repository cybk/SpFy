import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { environment } from './../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private  spotifyApiUrl = environment.spotifyApiUrl;
  private token = environment.token;
  constructor( private httpClient: HttpClient) { }
  // todo: refactor
  private headers = new HttpHeaders()
  .set('Accept', 'application/json')
  .set('Content-Type', 'application/json')
  .set('Authorization', this.token);

  getCurrentUser(): Promise<any> {
    return this.httpClient.get(`${this.spotifyApiUrl}/me`, {headers: this.headers})
      .toPromise();
  }

  getTop(type: string): Promise<any> {
    return this.httpClient.get(`${this.spotifyApiUrl}/me/top/${type}`, {headers: this.headers})
      .toPromise();
  }

  getArtistDetails(id): Promise<any> {
    return this.httpClient.get(`${this.spotifyApiUrl}/artists/${id}`, {headers: this.headers})
      .toPromise();
  }

  getArtistAlbums(id): Promise<any> {
    return this.httpClient.get(`${this.spotifyApiUrl}/artists/${id}/albums`, {headers: this.headers})
      .toPromise();
  }

  getMyPlaylists(): Promise<any> {
    return this.httpClient.get(`${this.spotifyApiUrl}/me/playlists`, {headers: this.headers})
      .toPromise();
  }

  searchArtist(query: string, type: string= 'artist'): Promise<any> {
    let params = new HttpParams();
    params = params.set('q', query).set('type', type);
    return this.httpClient.get(`${this.spotifyApiUrl}/search`, {headers: this.headers, params: params})
    .toPromise();
  }
}
