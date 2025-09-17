import { Component, Input, OnInit } from '@angular/core';
import { IStd } from '../const';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
@Input() stdDataInput!:IStd[]
  constructor() { }

  ngOnInit(): void {
  }

}
