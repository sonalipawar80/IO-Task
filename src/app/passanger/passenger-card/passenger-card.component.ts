import { Component, Input, OnInit } from '@angular/core';
import { Ipassenger } from '../passModule';

@Component({
  selector: 'app-passenger-card',
  templateUrl: './passenger-card.component.html',
  styleUrls: ['./passenger-card.component.scss']
})
export class PassengerCardComponent implements OnInit {

  @Input() passData!:Ipassenger[];
  constructor() { }

  ngOnInit(): void {
    
  }


}
