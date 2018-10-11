import { Routes, RouterModule, Router } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'artist', component: ArtistDetailsComponent }
];

export const router = RouterModule.forRoot(routes);
