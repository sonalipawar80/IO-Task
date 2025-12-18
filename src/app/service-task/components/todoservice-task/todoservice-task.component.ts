import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoServiceService } from '../../services/todo-service.service';
import { Ipost } from 'src/app/pipe-task/const';
import { Itodo } from '../../const';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todoservice-task',
  templateUrl: './todoservice-task.component.html',
  styleUrls: ['./todoservice-task.component.scss']
})
export class TodoserviceTaskComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
  }

 

}
