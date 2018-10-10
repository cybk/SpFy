import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './../shared/services/spotify.service';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.scss']
})
export class ArtistDetailsComponent implements OnInit {
  public artist: any = {};
  public albums: Array<any>;
  constructor( private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.spotifyService.getArtistDetails()
      .then(details => {
        this.artist = details;
        console.log(details);
    }).catch(err => console.log(err));

      this.spotifyService.getArtistAlbums()
      .then(albums => {
        this.albums = albums;
        console.log(this.albums);
      }).catch(err => console.log('[Api error]', err));
  }

}
