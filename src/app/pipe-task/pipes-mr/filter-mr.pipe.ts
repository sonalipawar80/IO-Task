import { Pipe, PipeTransform } from '@angular/core';
import { IStdServ } from '../const';

@Pipe({
  name: 'filterMr'
})
export class FilterMrPipe implements PipeTransform {

    transform(arr: IStdServ[], searchdata?: string, filterbyVal?: string): IStdServ[] {
      if (!searchdata) return arr;
      if (!filterbyVal) return arr;
      let filterArr = arr.filter(p => {
        return p[filterbyVal]?.toString().toLowerCase().includes(searchdata.toString().toLowerCase()) 
      })
      return filterArr
    }

}
