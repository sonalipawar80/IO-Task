import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appToLowerCase]'
})
export class ToLowerCaseDirective {

  constructor( private _eleRef:ElementRef) { }

  @HostListener('keyup',['$event'])
  onSearch(eve:Event){
    let control=eve.target as HTMLInputElement
    // console.log(control.value)
    let val=control.value.toLocaleLowerCase()
    control.value=val
  }

}
