import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filesize'
})
export class FilesizePipe implements PipeTransform {

  transform(value: number): any {
   return (value / (1024 * 1024)).toFixed(2) + ' Mb';

  }
}
