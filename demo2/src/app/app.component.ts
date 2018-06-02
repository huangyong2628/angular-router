import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  greeting: string = 'Hello';

  user: { name: string } = { name: 'Tom' };

  stock: { name: string } = { name: '微软' };

  stockName: string = 'IBM';

  title = 'Tom';

}
