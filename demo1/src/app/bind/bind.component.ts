import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  imgUrl: string;

  size: number;

  divClass: string;

  isBig: boolean;

  isDev: boolean;

  ngDivClass: any = {
    a: false,
    b: false,
    c: false
  };

  ngStyle: any = {
    color: 'red',
    background: 'yellow'
  };

  inputValue1: string;

  inputValue2: string;

  constructor() {
    setTimeout(() => {
      this.divClass = 'a b c';
      this.isBig = true;
      this.ngDivClass = {
        a: true,
        b: true,
        c: true
      };
      this.isDev = true;
      this.ngStyle = {
        color: 'yellow',
        background: 'red'
      };
    }, 3000);
    setInterval(() => {
      this.inputValue1 = '我又回来了';
      this.inputValue2 = '我又回来了';
    }, 1000);
  }

  ngOnInit() {
    this.imgUrl = './assets/img/123.PNG';
    this.size = 2;
  }

  doOnClick(event: any) {
    console.log(event);
  }

  doOnInput(event: any) {
    console.log(event.target.value);
    console.log(event.target.getAttribute('value'));
  }

  doOnInput1(event: any) {
    this.inputValue1 = event.target.value;
  }
}
