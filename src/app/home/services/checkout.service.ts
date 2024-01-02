import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PaypalCapture, PaypalOrder } from '../interfaces/checkout.interface';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(
    private http: HttpClient
  ) { }

  createPaypalCheckout(bookIds: number[]) {
    const returnUrl = environment.paypalReturnUrl;
    return this.http.post<PaypalOrder>(`${environment.apiBase}/checkout/paypal/create?returnUrl=${returnUrl}`, bookIds);
  }

  capturePaypalCheckout(token: string) {
    return this.http.post<PaypalCapture>(`${environment.apiBase}/checkout/paypal/capture?token=${token}`, null);
  }
}
