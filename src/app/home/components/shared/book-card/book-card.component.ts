import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/home/services/cart.service';
import { Book } from 'src/app/interfaces/book.interface';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: []
})
export class BookCardComponent {
  @Input({ required: true }) book!: Book;

  rol: string = ''
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  let authString = localStorage.getItem('bookstoreweb_auth')
  let _auth
  if(authString){
    _auth = JSON.parse(authString);
    // console.log(_auth.user)
    this.rol = _auth.user.role
    console.log(this.rol)
  }
}

  addBookToCart() {
    this.cartService.addItem(this.book);
  }

  removeBookFromCart() {
    this.cartService.removeItem(this.book);
  }

  bookIsInCart() {
    return this.cartService.itemAlreadyExists(this.book);
  }



}
