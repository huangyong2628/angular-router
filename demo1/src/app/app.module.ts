import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BindComponent } from './bind/bind.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Bind2Component } from './bind2/bind2.component';
import { MultiplePipe } from './pipe/multiple.pipe';
import { StockSearchComponent } from './stock-search/stock-search.component';
import { StockCartComponent } from './stock-cart/stock-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    BindComponent,
    Bind2Component,
    MultiplePipe,
    StockSearchComponent,
    StockCartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // 数据绑定模块
    ReactiveFormsModule // 响应式编程模块
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
