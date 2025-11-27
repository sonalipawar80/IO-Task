import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{
@Input() byDefoultColor!: string;
@Input() hoverColor!: string;
@HostBinding('style.backgroundColor') bgColor!:string;
  constructor() { }

ngOnInit(): void {
  this.bgColor=this.byDefoultColor
}
@HostListener('mouseover')
onMouseOver(){
  this.bgColor=this.hoverColor
}

@HostListener('mouseout')
onMouseOut(){
  this.bgColor=this.byDefoultColor
}

}
