import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: []
})
export class LayoutComponent {

  constructor(
    private cartService: CartService,
    private authService: AuthService
  ) { }

  get items() {
    return this.cartService.items;
  }

  get user() {
    return this.authService.user;
  }

  logout() {
    this.authService.logout();
  }

}
