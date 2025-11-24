import { Component, OnInit } from '@angular/core';
import { log } from 'console';
import { IStd } from 'src/app/io-task/const';
import { ServiceTaskModule } from '../service-task.module';
import { ServTaskService } from '../serv-task.service';

@Component({
  selector: 'app-serv-dashboard',
  templateUrl: './serv-dashboard.component.html',
  styleUrls: ['./serv-dashboard.component.scss']
})
export class ServDashboardComponent implements OnInit {
studentsServ!:IStd[]
  constructor(
    private _servofserv:ServTaskService
  ) { }

  ngOnInit(): void {

  }


}
