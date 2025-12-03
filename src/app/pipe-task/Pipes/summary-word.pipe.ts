import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summaryWord'
})
export class SummaryWordPipe implements PipeTransform {

  transform(value: string, count:number): string {
    return value.split(" ").slice(0, count).join(" ") + "....";;
  }

}
