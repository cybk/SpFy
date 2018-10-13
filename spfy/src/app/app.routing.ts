import { Routes, RouterModule, Router } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { OauthGuard } from './shared/guards/oauth.guard';
import { TokenComponent } from './token/token.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'token', component: TokenComponent},
  { path: 'welcome', component: WelcomeComponent, canActivate: [OauthGuard], data: {value: 'first'} },
  { path: 'artist/:id', component: ArtistDetailsComponent },
  { path: 'search', component: SearchResultsComponent }
];

export const router = RouterModule.forRoot(routes);
