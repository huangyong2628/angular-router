import {Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {

  @Input()
  greeting: string;

  @Input()
  user: { name: string };

  massage: string;

  constructor() { }

  ngOnInit() {
  }

  // 对可输入属性的监视(@Input)
  // 触发要求：监视对象的地址发生变化（对象的内容发生变化，不触发）
  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes, null, 2));
  }

}
