import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Stock, StockService} from '../stock.service';
import {FormControl} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {

  stocks: Observable<Stock[]>;

  nameFilter: FormControl = new FormControl();

  keyWord: string;

  constructor(public router: Router, private stockService: StockService) {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit1');
    this.stocks = this.stockService.getStocks();
    console.log(this.stocks);
    this.nameFilter.valueChanges
      .pipe(debounceTime(500)) // 间隔0.5秒，未继续输入，则发射
      .subscribe(value => {
          this.keyWord = value;
          console.log('ngOnInit2');
        }
      );
  }

  create() {
    this.router.navigateByUrl('/stock/0');
  }

  update(stock: Stock) {
    this.router.navigateByUrl('/stock/' + stock.id);
  }

  delete(stock: Stock) {

  }

}
