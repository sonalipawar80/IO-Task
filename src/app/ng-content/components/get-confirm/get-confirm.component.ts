import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-get-confirm',
  templateUrl: './get-confirm.component.html',
  styleUrls: ['./get-confirm.component.scss']
})
export class GetConfirmComponent implements OnInit {
  @Input() show!: boolean;
  @Output() emitshowflag: EventEmitter<boolean> = new EventEmitter<boolean>()
  constructor() { }

  ngOnInit(): void {
  }


  closemodal(flag: boolean) {
    console.log(flag)
    this.show = false
    this.emitshowflag.emit(flag)

  }
}
