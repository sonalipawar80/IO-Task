import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filesizeMr'
})
export class FilesizeMrPipe implements PipeTransform {

  transform(value: number): string {
    return (value/(1024*1014)).toFixed(2) + 'mb';
  }

}
