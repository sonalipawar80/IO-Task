import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskFormComponent } from '../task-form/task-form.component';
import { log } from 'console';
import { ServTaskService } from '../../services/serv-task.service';
import { TaskManagerService } from '../task-manager.service';
import { Itask } from '../../const';

@Component({
  selector: 'app-task-dashboard',
  templateUrl: './task-dashboard.component.html',
  styleUrls: ['./task-dashboard.component.scss']
})
export class TaskDashboardComponent implements OnInit {
  totalTaskData!: Itask[];
  summaryData!:{ title: string; count: number }[];
  constructor(
    private _matDialog: MatDialog,
    private _taskserv: TaskManagerService
  ) { }

  ngOnInit(): void {
    // this.getData()
      this._taskserv.getAllTasks().subscribe(res => {
      this.totalTaskData = res;
      console.log(res);
      this.getSummary()
    })
  }
  getSummary() {
    this.summaryData=this._taskserv.getStatusSummary(this.totalTaskData);
    console.log(this.summaryData);
  }
  onAddTask() {
    let dialogConfig = {
      width: '400px',
      height: 'auto',
      disableClose: true
    }
    let dialogRef = this._matDialog.open(TaskFormComponent, dialogConfig).afterClosed().subscribe(res => {
      console.log(res)
      this._taskserv.postTask(res).subscribe(data => console.log(data))
    })
  }
}
