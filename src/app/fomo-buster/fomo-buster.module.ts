import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './pages/home/home-page.component';
import { ConcertListComponent } from './components/concert-list/concert-list.component';
import { ConcertDetailComponent } from './components/concert-detail/concert-detail.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { AddConcertComponent } from './components/add-concert/add-concert.component';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { SearchBoxComponent } from './components/search-box/search-box.component';

@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    ConcertListComponent,
    ConcertDetailComponent,
    CheckoutComponent,
    ConfirmationComponent,
    AddConcertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
  ],
  exports: [
    HomePageComponent,
    ConcertListComponent,
    ConcertDetailComponent,
    CheckoutComponent,
    ConfirmationComponent,
    AddConcertComponent,
  ]
})
export class FomoBusterModule { }
