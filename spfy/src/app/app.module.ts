
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { WelcomeComponent } from './welcome/welcome.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { router } from './app.routing';
import { CardComponent } from './shared/card/card.component';
import { CardHolderComponent } from './shared/card-holder/card-holder.component';
import { PopularityDirective } from './shared/directives/popularity.directive';
import { SearchResultsComponent } from './search-results/search-results.component';
import { LoginComponent } from './login/login.component';
import { TokenComponent } from './token/token.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    ArtistDetailsComponent,
    CardComponent,
    CardHolderComponent,
    PopularityDirective,
    SearchResultsComponent,
    LoginComponent,
    TokenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    router
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
