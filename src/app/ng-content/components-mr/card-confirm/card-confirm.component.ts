import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-confirm',
  templateUrl: './card-confirm.component.html',
  styleUrls: ['./card-confirm.component.scss']
})
export class CardConfirmComponent implements OnInit {
  show: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onremove() {
    this.show = true
  }

  onFlagChange(flag: boolean) {

    if (!flag) {
      this.show = false
    }
    this.show = true
        console.log(flag)
        console.log(this.show)

    // api-------
  }
}
