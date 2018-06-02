import {Resolve, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router/src/router_state';
import {Injectable} from '@angular/core';
import {Stock} from '../stock/stock.component';

@Injectable()
export class StockResolve implements Resolve<Stock> {

  constructor(private router: Router) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Stock> | Promise<Stock> | Stock {
    let id = route.params['id'];
    if (id == 1) {
      return new Stock(1, 'IBM');
    } else {
      this.router.navigate(['/home']);
      return undefined;
    }
  }
}
