import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { Book } from 'src/app/interfaces/book.interface';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: []
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  page: number = 0;
  last: boolean = false;

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.homeService.paginate()
      .subscribe(bookPage => {
        this.books = bookPage.content;
        this.page = bookPage.number;
        this.last = bookPage.last;
      })
  }

  loadMoreBooks() {
    if (!this.last) {
      this.homeService.paginate(this.page + 1)
        .subscribe(bookPage => {
          this.books.push(...bookPage.content);
          this.page = bookPage.number;
          this.last = bookPage.last;
        });
    }
  }

}
