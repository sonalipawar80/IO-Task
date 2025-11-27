import { Directive, HostListener } from '@angular/core';
import { log } from 'console';

@Directive({
  selector: '[appCraditCard]'
})
export class CraditCardDirective {

  constructor() { }
  @HostListener('keyup', ['$event'])
  CreditCard(eve: Event) {
    let control = eve.target as HTMLInputElement;
    let val = control.value.replace(/\s+/g, "")



    if (val.length > 16) {
      val = val.substring(0, 16)
    }
    // control.value = val
    // console.log(val)
    

    let test=/[^\d]/.test(val)
    if(test){
      control?.nextElementSibling?.classList.remove('d-none')
      console.log(test)
    }else{
       control?.nextElementSibling?.classList.add('d-none')
    }
    
    let bulkArr = []
    for (let i = 0; i < val.length; i=i+4) {
      bulkArr.push(val.slice(i,i+4))

    }
    console.log(bulkArr)
   control.value=bulkArr.join(" ")
   

  }




}
