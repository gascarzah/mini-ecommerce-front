import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book, BookPage } from 'src/app/interfaces/book.interface';
import { environment } from 'src/environments/environment';
import { SalesOrder } from '../interfaces/order.interfaces';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient
  ) { }

  getLastBooks() {
    return this.http.get<Book[]>(`${environment.apiBase}/last-books`);
  }

  paginate(page: number = 0, size: number = 6) {
    let params = new HttpParams();
    params = params.append('size', size);
    params = params.append('page', page);
    params = params.append('sort', 'createdAt,desc');

    return this.http.get<BookPage>(`${environment.apiBase}/books`, { params });
  }

  getBook(slug: string) {
    return this.http.get<Book>(`${environment.apiBase}/books/${slug}`);
  }

  getOrder(id: number) {
    return this.http.get<SalesOrder>(`${environment.apiBase}/orders/${id}`);
  }

  downloadBookFromSalesItem(orderId: number, itemId: number) {
    return this.http.get(`${environment.apiBase}/orders/${orderId}/items/${itemId}/book/download`, {
      responseType: 'blob'
    });
  }
}
