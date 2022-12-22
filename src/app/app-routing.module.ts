import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentNotificationComponent } from './payment-notification/payment-notification.component';
import { PaymentWayComponent } from './payment-way/payment-way.component';

const routes: Routes = [
  { path: '', redirectTo: '/payment-way', pathMatch: 'full' },
  { path: 'payment-way', component: PaymentWayComponent },
  { path: 'payment-notification', component: PaymentNotificationComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
