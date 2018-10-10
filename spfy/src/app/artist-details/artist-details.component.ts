import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './../shared/services/spotify.service';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.scss']
})
export class ArtistDetailsComponent implements OnInit {
  public artist: any = {};
  constructor( private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.spotifyService.getArtistDetails()
      .then(details => {
        this.artist = details;
        console.log(details);
      }).catch(err => console.log(err));
  }

}
