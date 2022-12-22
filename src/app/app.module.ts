import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentWayComponent } from './payment-way/payment-way.component';
import { PaymentNotificationComponent } from './payment-notification/payment-notification.component';

@NgModule({
  declarations: [AppComponent, PaymentWayComponent, PaymentNotificationComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
