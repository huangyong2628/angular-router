import {StockComponent} from '../stock/stock.component';
import {CanDeactivate} from '@angular/router';

export class FocusGuard implements CanDeactivate<StockComponent> {
  canDeactivate(component: StockComponent) {
    if (component.isFocus()) {
      return true;
    } else {
      return window.confirm('不关注就离开吗？这股票能赚钱哦~');
    }
  }
}
