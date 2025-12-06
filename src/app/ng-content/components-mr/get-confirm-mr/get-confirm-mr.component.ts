import { Component, Input, OnInit, Output } from '@angular/core';
import { BlobOptions } from 'buffer';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-get-confirm-mr',
  templateUrl: './get-confirm-mr.component.html',
  styleUrls: ['./get-confirm-mr.component.scss']
})
export class GetConfirmMrComponent implements OnInit {
@Input() showbackdrop!:boolean;
  @Output() emitshowflag: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit(): void {
  }

onclickres(val: boolean) {
  this.emitshowflag.emit(val)
  console.log('confirmvalu'+val)
  this.showbackdrop=false;
}


}
