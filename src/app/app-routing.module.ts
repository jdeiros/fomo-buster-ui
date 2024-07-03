import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConcertListComponent } from './concert-list/concert-list.component';
import { ConcertDetailComponent } from './concert-detail/concert-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

const routes: Routes = [
  { path: '', component: ConcertListComponent },
  { path: 'concert/:id', component: ConcertDetailComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'confirmation', component: ConfirmationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
