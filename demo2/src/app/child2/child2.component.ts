import {Component, DoCheck, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit, DoCheck {

  @Input()
  stock: { name: string };

  @Input()
  stockName: string;

  oldStockName: string;

  changeDetected: boolean;

  changeCount: number = 0;

  message: string;

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck(): void {
    if (this.stock.name != this.oldStockName) {
      this.changeDetected = true;
      console.log('Docheck: stock.name从' + this.oldStockName + '变为' + this.stock.name);
      this.oldStockName = this.stock.name;
    }
    if (this.changeDetected) {
      this.changeCount = 0;
    } else {
      this.changeCount = this.changeCount + 1;
      console.log('Docheck: stock.name 没变化时，ngDoCheck方法被调用了' + this.changeCount + '次');
    }
    this.changeDetected = false;
  }
}
