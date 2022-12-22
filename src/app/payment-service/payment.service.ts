import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Link } from '../models/Link';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  payPalRoot: string = 'http://localhost:5000';
  bankRoot: string = '';
  bitCoinRoot: string = '';
  
  constructor(private http: HttpClient) {}
  
  payPalPayment(amount: number): Observable<Link> {
    return this.http.get<Link>(
      this.payPalRoot + '/api/home/start-paypal-payment?total=' + String(amount),httpOptions
    );
  }

  capturePayPalPayment(payerId: string, token: string): Observable<Link> {
    return this.http.get<Link>(
      this.payPalRoot + '/api/home/capture-paypal-payment?payerId=' + payerId+"&token="+token
    );
  }
}
