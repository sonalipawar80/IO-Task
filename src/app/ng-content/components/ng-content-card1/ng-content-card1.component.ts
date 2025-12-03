import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-content-card1',
  templateUrl: './ng-content-card1.component.html',
  styleUrls: ['./ng-content-card1.component.scss']
})
export class NgContentCard1Component implements OnInit {
  showConfirmBox: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onPostRemove() {
    this.showConfirmBox = true;
  }

  getShowflag(eve: boolean) {
    this.showConfirmBox = eve
    if(eve){
      console.log('api call')
    }else{
      console.log('cancle....')
    }
  }


}
