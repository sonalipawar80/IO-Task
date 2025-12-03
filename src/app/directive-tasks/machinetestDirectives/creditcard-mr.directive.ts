import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCreditcardMr]'
})
export class CreditcardMrDirective {

  constructor(
    private _eleRef:ElementRef
  ) { }

  @HostListener('keyup',['$event'])
  oncreditCard(eve:Event){
    let control=eve.target as HTMLInputElement;
    let val=control.value.replace(/\s+/g,"")
    
// lengh must be 16....
    if(val.length>16){
      val=val.substring(0,16)
    }
//notification.....
let test=/[^\d]/.test(val);
if(test){
  control?.nextElementSibling?.classList.remove('d-none')
}else{
control?.nextElementSibling?.classList.add('d-none')
}

// space
let storeArr=[]
for(let i=0;i<val.length;i=i+4){
  storeArr.push(val.slice(i,i+4))
  console.log(val.slice(i,i+4))
}
control.value=storeArr.join(" ")


  }
}
