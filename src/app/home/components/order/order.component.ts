import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { ActivatedRoute } from '@angular/router';
import { SalesItem, SalesOrder } from '../../interfaces/order.interfaces';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: []
})
export class OrderComponent implements OnInit {
  salesOrder?: SalesOrder;

  constructor(
    private homeService: HomeService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const orderId = this.route.snapshot.paramMap.get('id')!;

    this.homeService.getOrder(parseInt(orderId))
      .subscribe(salesOrder => {
        this.salesOrder = salesOrder;
      })
  }

  downloadBook(item: SalesItem) {
    this.homeService.downloadBookFromSalesItem(this.salesOrder!.id, item.id)
      .subscribe(blob => {
        const _blob = new Blob([blob], {
          type: 'application/pdf; charset=uft-8'
        });

        const a = document.createElement('a');
        const url = window.URL.createObjectURL(_blob);

        a.href = url;
        a.download = `${item.book.title}.pdf`;
        a.click();
        URL.revokeObjectURL(url);

        item.downloadsAvailable -= 1;
      });
  }

}
