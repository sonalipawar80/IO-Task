import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Itask } from '../../const';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnChanges, AfterViewInit {

  @Input() taskData: Itask[] = [];

  displayedColumns: string[] = ['title', 'dueDate', 'priority', 'status'];
  dataSource = new MatTableDataSource<Itask>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['taskData'] && this.taskData) {
      this.dataSource.data = this.taskData;
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onPriorityChange(data:Event){
    let filterValue=(data.target as HTMLInputElement).value;
    if(filterValue==="All"){
      this.dataSource.data=this.taskData;
    }else{
      this.dataSource.data=this.taskData.filter(task=>task.priority===filterValue)
    }


  }

  onStatusChange(data:Event){
    let statusValue=(data.target as HTMLInputElement).value;
    if(statusValue==="All"){
      this.dataSource.data=this.taskData
    }else{
      this.dataSource.data=this.taskData.filter(task=>task.status===statusValue)
    }
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
