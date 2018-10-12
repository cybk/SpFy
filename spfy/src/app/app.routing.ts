import { Routes, RouterModule, Router } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'artist/:id', component: ArtistDetailsComponent },
  { path: 'search', component: SearchResultsComponent }
];

export const router = RouterModule.forRoot(routes);
