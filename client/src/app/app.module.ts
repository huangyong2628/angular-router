import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StockComponent } from './stock/stock.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { WebSocketComponent } from './web-socket/web-socket.component';

@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    WebSocketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
