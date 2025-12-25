import { Component, Input, OnInit } from '@angular/core';
import { ServTaskService } from '../../services/serv-task.service';
import { TaskManagerService } from '../task-manager.service';
import { Observable } from 'rxjs';
import { log } from 'node:console';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.scss']
})
export class MiniCardComponent implements OnInit {
@Input() summary!:{ title: string; count: number }[];
  constructor(
    private _taskServ:TaskManagerService
  ) { }

  ngOnInit(): void {

    
  }

}
