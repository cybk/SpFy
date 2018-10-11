import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './../shared/services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.scss']
})
export class ArtistDetailsComponent implements OnInit {
  public artist: any = {};
  public albums: Array<any>;
  public artistID: string;
  constructor(
    private spotifyService: SpotifyService,
    private activatedRoute: ActivatedRoute
    ) {
      this.activatedRoute.params.subscribe( (params: any) => {
        this.getArtistDetails(params.id);
      });
     }

  ngOnInit() {

  }

  getArtistDetails(id): void {
    this.spotifyService.getArtistDetails(id)
    .then(details => {
      this.artist = details;
      console.log(details);
      return this.spotifyService.getArtistAlbums(id);
  }).then(albums => {
    this.albums = albums.items;
    console.log(this.albums);
  })
  .catch(err => console.log(err));
  }

}
