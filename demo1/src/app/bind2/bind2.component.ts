import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import {FormControl} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-bind2',
  templateUrl: './bind2.component.html',
  styleUrls: ['./bind2.component.css']
})
export class Bind2Component implements OnInit {

  searchInput: FormControl = new FormControl();

  birthday: Date = new Date();

  pi: number = 3.1415;

  constructor() {
    this.searchInput.valueChanges
      .pipe(debounceTime(500)) // 间隔0.5秒检查一次值的变化，0.5秒后值不变化，再发送
      .subscribe(
        stockCode => this.getStock(stockCode)
      );
    // of(1 , 2, 3)
    //   .pipe(filter(e => e % 2 === 0), map(e => e * e))
    //   .subscribe(
    //     e => console.log('next:' + e),
    //     err => console.error(err),
    //     () => console.log('结束啦'),
    //   );
  }

  ngOnInit() {
  }

  onKey(value: any) {
    console.log(value);
  }

  getStock(code: string) {
    console.log(code);
  }
}
