import {AfterContentChecked, AfterContentInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-red-border',
  templateUrl: './red-border.component.html',
  styleUrls: ['./red-border.component.css']
})
export class RedBorderComponent implements OnInit, AfterContentInit, AfterContentChecked {

  message: string;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    console.log('子组件投影内容初始化完毕');
    // 子组件投影内容初始化完毕后对视图的值进行更新，是允许的。因为这个时候，整个视图的初始化并没有完成。
    this.message = 'Tom';
  }

  ngAfterContentChecked(): void {
    console.log('子组件投影内容变更检测完毕');
  }
}
