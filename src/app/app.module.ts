import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConcertListComponent } from './concert-list/concert-list.component';
import { ConcertDetailComponent } from './concert-detail/concert-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { AddConcertComponent } from './add-concert/add-concert.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ConcertListComponent,
    ConcertDetailComponent,
    CheckoutComponent,
    ConfirmationComponent,
    AddConcertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
