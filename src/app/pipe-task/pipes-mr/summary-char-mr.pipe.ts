import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summaryCharMr'
})
export class SummaryCharMrPipe implements PipeTransform {

  transform(value: string, count:number): string {
    return value.substring(0,count)+'...';
  }

}
