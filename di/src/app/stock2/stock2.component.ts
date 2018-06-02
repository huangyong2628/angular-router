import { Component, OnInit } from '@angular/core';
import {Stock, StockService} from '../shared/stock.service';
import {AnotherStockService} from '../shared/another-stock.service';

@Component({
  selector: 'app-stock2',
  templateUrl: './stock2.component.html',
  styleUrls: ['./stock2.component.css'],
  // providers: [{provide: StockService, useClass: AnotherStockService}]
})
export class Stock2Component implements OnInit {

  stock: Stock;

  constructor(public stockService: StockService) { }

  ngOnInit() {
    this.stock = this.stockService.getStock();
  }

}
