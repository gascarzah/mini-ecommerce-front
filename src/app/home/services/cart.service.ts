import { Injectable } from '@angular/core';
import { Book } from 'src/app/interfaces/book.interface';

const cartKey = 'bookstoreweb_cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _items: Book[] = [];

  constructor() {
    const itemsString = localStorage.getItem(cartKey);

    if (itemsString) {
      this._items = JSON.parse(itemsString);
    }
  }

  get items() {
    return this._items;
  }

  addItem(book: Book) {
    this._items.push(book);
    this.saveInLocalStorage();
  }
  
  removeItem(book: Book) {
    this._items = this._items.filter(b => b.id != book.id);
    this.saveInLocalStorage();
  }

  clear() {
    this._items = [];
    this.saveInLocalStorage();
  }

  itemAlreadyExists(book: Book) {
    return this._items.findIndex(b => b.id == book.id) >= 0;
  }

  saveInLocalStorage() {
    localStorage.setItem(cartKey, JSON.stringify(this._items));
  }

}
