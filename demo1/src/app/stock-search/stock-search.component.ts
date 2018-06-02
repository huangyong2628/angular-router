import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-stock-search',
  templateUrl: './stock-search.component.html',
  styleUrls: ['./stock-search.component.css']
})
export class StockSearchComponent implements OnInit {

  @Input()
  keyWord: string;

  price: number;

  @Output('lastPrice')
  searchResult: EventEmitter<StockInfo> = new EventEmitter<StockInfo>();

  @Output()
  addCard: EventEmitter<StockInfo> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      const stockInfo: StockInfo = new StockInfo(this.keyWord, 100 * Math.random());
      this.price = stockInfo.price;
      this.searchResult.emit(stockInfo);
    }, 3000);
  }

  buyStock() {
    this.addCard.emit(new StockInfo(this.keyWord, this.price));
  }
}

export class StockInfo {
  constructor(public name: string, public price: number) {
  }
}
