import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { Book } from 'src/app/interfaces/book.interface';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: []
})
export class IndexComponent implements OnInit {
  lastBooks?: Book[];

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.homeService.getLastBooks()
      .subscribe(lastBooks => {
        this.lastBooks = lastBooks;
      })
  }

}
