import {AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ChildComponent} from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked {

  message: string;

  ngAfterViewInit(): void {
    console.log('父组件的视图初始化完毕');
    // this.message = 'Hello'; 此处会报错，原因是angular禁止视图组装完成之后再对视图进行更新
    setTimeout(() => {
      // 通过setTimeout，让【对视图进行更新】的操作在另外一个运行周期中去运行
      this.message = 'Hello';
    }, 0);
  }

  ngAfterViewChecked(): void {
    console.log('父组件的视图变更检测完毕');
  }

  // 声明模板本地变量 child1,用来在父组件中调用子组件
  @ViewChild('child1')
  child1: ChildComponent;

  title = 'app';

  ngOnInit(): void {
    setInterval(() => {
      this.child1.greeting('Tom');
    }, 5000);
  }
}
