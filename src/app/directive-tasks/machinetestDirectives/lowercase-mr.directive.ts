import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appLowercaseMr]'
})
export class LowercaseMrDirective {

  constructor(private eleRef:ElementRef) { }

  @HostListener('keyup',['$event'])
  onSearch(eve:Event){
    let constrol=eve.target as HTMLInputElement;
    let val=constrol.value.toLowerCase()
    constrol.value=val;
  }

}
