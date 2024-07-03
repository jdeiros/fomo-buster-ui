import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConcertListComponent } from './fomo-buster/components/concert-list/concert-list.component';
import { ConcertDetailComponent } from './fomo-buster/components/concert-detail/concert-detail.component';
import { CheckoutComponent } from './fomo-buster/components/checkout/checkout.component';
import { ConfirmationComponent } from './fomo-buster/components/confirmation/confirmation.component';
import { AddConcertComponent } from './fomo-buster/components/add-concert/add-concert.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { HomePageComponent } from './fomo-buster/pages/home/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ConcertListComponent,
    ConcertDetailComponent,
    CheckoutComponent,
    ConfirmationComponent,
    AddConcertComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
