import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Array<Menu>;

  currentMenuId: number;

  title = environment.appTitle;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menus = [
      new Menu(1, '首页', 'dashboard'),
      new Menu(2, '股票管理', 'stock')
    ];
    this.currentMenuId = this.menus[0].id;
  }

  nav(menu: Menu) {
    this.currentMenuId = menu.id;
    this.router.navigateByUrl(menu.link);
  }
}

export class Menu {
  constructor(public id: number, public name: string, public link: string) {
  }
}
