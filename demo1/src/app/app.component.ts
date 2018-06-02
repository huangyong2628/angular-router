import { Component } from '@angular/core';
import {StockInfo} from './stock-search/stock-search.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  search: string;

  currentPrice: number;

  stockInfo: StockInfo;

  searchResultHandler(stockInfo: StockInfo) {
    this.currentPrice = stockInfo.price;
  }

  addCarttHandler(stockInfo: StockInfo) {
    this.stockInfo = stockInfo;
  }
}
