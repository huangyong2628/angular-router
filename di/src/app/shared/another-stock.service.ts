import { Injectable } from '@angular/core';
import {Stock, StockService} from './stock.service';
import {LoggerService} from './logger.service';

@Injectable()
export class AnotherStockService implements StockService {

  constructor(public logService: LoggerService) { }

  getStock(): Stock {
    this.logService.log('anotherStock:getStock方法被调用');
    return new Stock(2, '微软');
  }
}
