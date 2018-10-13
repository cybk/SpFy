import { OauthService } from './oauth.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { environment } from './../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private  spotifyApiUrl = environment.spotifyApiUrl;
  private token = environment.token;
  constructor(
    private httpClient: HttpClient,
    private oauthService: OauthService
    ) { }

  private headers = new HttpHeaders()
  .set('Accept', 'application/json')
  .set('Content-Type', 'application/json')
  .set('Authorization', this.oauthService.getToken());

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

  private getParams(params: any): HttpParams {
    let httpParams = new HttpParams();

    for (const param in params) {
      if (params.hasOwnProperty(param)) {
        httpParams = httpParams.append(param, params[param]);
       }
    }

    return httpParams;
  }

  getToken(code: string): Promise<any> {
    const { client_id, client_secret, spotifyAccount, appUrl } = environment;
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const params = {
      code: code,
      grant_type: 'authorization_code',
      client_id: client_id,
      client_secret: client_secret,
      redirect_uri: `${appUrl}token`
    };

    const httpParams = this.getParams(params);
    return this.httpClient.post(`${spotifyAccount}api/token`,  httpParams.toString(), {headers: headers})
    .toPromise();
  }
}
