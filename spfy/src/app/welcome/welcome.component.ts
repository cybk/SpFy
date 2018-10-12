import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { SpotifyService } from './../shared/services/spotify.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  public topItems: Array<any>;
  public playlists: Array<any>;
  mySearch: FormGroup;
  constructor(
    private spotifyService: SpotifyService,
    private router: Router,
    private fb: FormBuilder
    ) {
      this.createForm();
    }

  ngOnInit() {
    this.getMyTopArtists();
    this.getMyPlayLists();
  }

  getMyTopArtists(): void {
    this.spotifyService.getTop('artists')
    .then(top => {
      console.log(top);
      this.topItems = top.items;
    })
    .catch(err => console.log(err));
  }

  getMyPlayLists(): void {
    this.spotifyService.getMyPlaylists()
    .then(lists => {
      this.playlists = lists.items;
      console.log(this.playlists);
    })
    .catch(err => console.log(err));
  }

  onSearch(): void {
    console.log('qry', this.mySearch.value.search);
    this.router.navigate(['/search'], {queryParams: {q: this.mySearch.value.search}} );
  }

  createForm(): void {
    this.mySearch = this.fb.group({
      search: [null, Validators.required],
      range: [null, [Validators.required]]
    });
  }
}
