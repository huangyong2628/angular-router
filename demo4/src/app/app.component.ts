import {AfterContentChecked, AfterContentInit, AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, AfterContentInit, AfterContentChecked {
  title = 'app';

  ngAfterViewInit(): void {
    console.log('父组件视图内容初始化完毕');
  }

  ngAfterContentInit(): void {
    console.log('父组件投影内容初始化完毕');
  }

  ngAfterContentChecked(): void {
    console.log('父组件投影内容变更检测完毕');
  }
}
