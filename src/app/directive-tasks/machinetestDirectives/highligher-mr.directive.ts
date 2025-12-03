import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighligherMr]'
})
export class HighligherMrDirective implements OnInit {
@Input() byDefoult: string='white'
@Input() byHover!: string;
@HostBinding('style.backgroundColor') bgColor!:string;
  constructor() { }

ngOnInit(): void {
  this.bgColor=this.byDefoult
}
@HostListener('mouseover')
onMouseOver(){
  this.bgColor=this.byHover
}

@HostListener('mouseout')
onMouseOut(){
  this.bgColor=this.byDefoult
}
}
