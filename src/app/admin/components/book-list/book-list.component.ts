import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book, BookPage } from '../../../interfaces/book.interface';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: []
})
export class BookListComponent implements OnInit {
  bookPage?: BookPage;
  displayedColumns = ['title', 'price', 'createdAt', 'actions'];

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks() {
    this.bookService.paginate()
      .subscribe(bookPage => {
        this.bookPage = bookPage;
      })
  }

  deleteBook(book: Book) {
    if (confirm('¿Estás seguro de eliminar este producto?')) {
      this.bookService.delete(book)
        .subscribe(() => {
          this.loadBooks();
        });
    }
  }

  paginateBooks(event: PageEvent) {
    const { pageIndex, pageSize } = event;

    this.bookService.paginate(pageSize, pageIndex)
      .subscribe(bookPage => {
        this.bookPage = bookPage;
      });
  }

}
