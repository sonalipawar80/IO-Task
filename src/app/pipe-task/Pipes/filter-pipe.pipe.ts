import { Pipe, PipeTransform } from '@angular/core';
import { Iplay } from '../const';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(arr: Iplay[], searchdata?: string, filterbyVal?: string): Iplay[] {
    if (!searchdata) return arr;
    if (!filterbyVal) return arr;
    let filterArr = arr.filter(p => {
      return p[filterbyVal]?.toString().toLowerCase().includes(searchdata.toString().toLowerCase()) 
    })
    return filterArr
  }

}


// 
