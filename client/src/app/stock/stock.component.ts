import { Component, OnInit } from '@angular/core';
import {Headers, Http} from '@angular/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  dataSource: Observable<any>;

  stocks: Observable<any>;

  constructor(public http: Http) {
    // this.dataSource = this.http.get('/api/stock').pipe(map(response => response.json()));

    const myHeaders: Headers = new Headers();
    myHeaders.append('Authorization', 'Basic 123456');

    this.stocks = this.http.get('/api/stock', {headers: myHeaders}).pipe(map(response => response.json()));
  }

  ngOnInit() {
    // this.dataSource.subscribe(
    //   data => this.stocks = data
    // );
  }

}
