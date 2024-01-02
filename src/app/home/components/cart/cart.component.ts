import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Book } from 'src/app/interfaces/book.interface';
import { CheckoutService } from '../../services/checkout.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: []
})
export class CartComponent implements OnInit {
  loading = false;

  constructor(
    private cartService: CartService,
    private checkoutService: CheckoutService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const token = this.route.snapshot.queryParamMap.get('token');
    const payerId = this.route.snapshot.queryParamMap.get('PayerID');

    if (token && payerId) {
      this.loading = true;

      this.checkoutService.capturePaypalCheckout(token)
        .subscribe(response => {
          if (response.completed) {
            this.cartService.clear();
            this.router.navigate(['/orders', response.orderId]);
          }
        })
    }
  }

  get items() {
    return this.cartService.items;
  }

  get total() {
    return this.items.map(b => b.price).reduce((p1, p2) => p1 + p2, 0);
  }

  remove(book: Book) {
    this.cartService.removeItem(book);
  }

  pay() {
    const bookIds = this.items.map(item => item.id);

    this.loading = true;

    this.checkoutService.createPaypalCheckout(bookIds)
      .subscribe(response => {
        window.location.href = response.approveUrl;
      });
  }

}
