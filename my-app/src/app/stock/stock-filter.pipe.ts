import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockFilter'
})
export class StockFilterPipe implements PipeTransform {

  transform(list: any[], field: string, keyword: string) {
    if (!field || !keyword) {
      console.log('!field || !keyword', field, keyword);
      return list;
    }

    return list.filter(item => {
      const itemFieldValue = item[field].toLowerCase();
      return itemFieldValue.indexOf(keyword) >= 0;
    });
  }

}
