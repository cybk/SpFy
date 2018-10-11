
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { WelcomeComponent } from './welcome/welcome.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { router } from './app.routing';
import { CardComponent } from './shared/card/card.component';
import { CardHolderComponent } from './shared/card-holder/card-holder.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    ArtistDetailsComponent,
    CardComponent,
    CardHolderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    router
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
