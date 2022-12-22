import { PathLocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Link } from '../models/Link';
import { PaymentService } from '../payment-service/payment.service';

@Component({
  selector: 'app-payment-way',
  templateUrl: './payment-way.component.html',
  styleUrls: ['./payment-way.component.css'],
})
export class PaymentWayComponent implements OnInit {
  amount: number = 32;
  newRoute: string = '';
  errorMessage: string = '';
  payPalClick() {
    console.log('usao pay clcik');
    this.paymentService.payPalPayment(this.amount).subscribe(
      (data: Link) => {
        console.log(data, data.value);
        window.location.href = data.value;

        //window.open(data.value, '_blank');
        this.errorMessage = '';
      },
      (error) => {
        console.log('error');
        this.errorMessage = 'Something went wrong: ' + error;
      }
    );
  }
  bankClick() {
    this.paymentService.payPalPayment(this.amount).subscribe(
      (data: object) => {
        window.location.href = 'string';
        this.errorMessage = '';
      },
      (error) => {
        this.errorMessage = 'Something went wrong: ' + error;
      }
    );
  }
  bitcoinClick() {
    this.paymentService.payPalPayment(this.amount).subscribe(
      (data: object) => {
        window.location.href = 'string';
        this.errorMessage = '';
      },
      (error) => {
        this.errorMessage = 'Something went wrong: ' + error;
      }
    );
  }

  constructor(
    private paymentService: PaymentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // { orderby: "price" }
        this.amount = params['total'];
        console.log('amount',this.amount); // price
      }
    );
    //this.amount = Number(this.route.snapshot.params['amount']);
  }
}
