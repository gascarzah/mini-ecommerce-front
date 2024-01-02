import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './components/index/index.component';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { BooksComponent } from './components/books/books.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { BookComponent } from './components/book/book.component';
import { LayoutComponent } from './components/layout/layout.component';
import { BookCardComponent } from './components/shared/book-card/book-card.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderComponent } from './components/order/order.component';
import { DetailsComponent } from './components/details/details.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    IndexComponent,
    BooksComponent,
    BookComponent,
    LayoutComponent,
    BookCardComponent,
    CartComponent,
    OrderComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    SharedModule,
    InfiniteScrollModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
