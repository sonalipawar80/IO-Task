import { Component, Input, OnInit } from '@angular/core';
import { Ipost } from '../../const';
import { IStdServ } from 'src/app/service-task/const';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
@Input() postObj!:Ipost;
  constructor() { }

  ngOnInit(): void {
  }

}
