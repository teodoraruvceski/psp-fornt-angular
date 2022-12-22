import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from '../payment-service/payment.service';

@Component({
  selector: 'app-payment-notification',
  templateUrl: './payment-notification.component.html',
  styleUrls: ['./payment-notification.component.css']
})
export class PaymentNotificationComponent implements OnInit {

  message  : string ='Processing . . .';
  img : string ='';//'../../assets/success.png';
  backToShop() : void{

  }
  constructor(  private paymentService: PaymentService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // { orderby: "price" }
        let token = params['token'];
        let payerId = params['PayerID'];
        this.paymentService.capturePayPalPayment(payerId,token).subscribe(
          (data: Object) => {
            console.log(data)
          },
          (error) => {
            console.log(error)
          }
        );
        //this.amount = params['total'];
        //console.log('amount',this.amount); // price
      }
    );
  }

}
