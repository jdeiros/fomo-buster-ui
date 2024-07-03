import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConcertListComponent } from './fomo-buster/components/concert-list/concert-list.component';
import { ConcertDetailComponent } from './fomo-buster/components/concert-detail/concert-detail.component';
import { CheckoutComponent } from './fomo-buster/components/checkout/checkout.component';
import { ConfirmationComponent } from './fomo-buster/components/confirmation/confirmation.component';
import { AddConcertComponent } from './fomo-buster/components/add-concert/add-concert.component';

const routes: Routes = [
  { path: '', component: ConcertListComponent },
  { path: 'concert/:id', component: ConcertDetailComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: 'add', component: AddConcertComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
