import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { log } from 'console';
import { Observable } from 'rxjs';
import { IStd } from 'src/app/io-task/const';
import { IStdServ } from 'src/app/service-task/const';

@Component({
  selector: 'app-pipe-mr-dashboard',
  templateUrl: './pipe-mr-dashboard.component.html',
  styleUrls: ['./pipe-mr-dashboard.component.scss']
})
export class PipeMrDashboardComponent implements OnInit{
  // --------task1---------------
  lorem = `lorem10This is the place where you can learn Angular, discover best practices, and stay updated with the latest news and trends`;
  // ---------task2----------------
    BASE_URL ='https://service-task-backend.onrender.com/students';
    std$!:Observable<IStdServ[]>;
    searchVal!:string;
    filterdVal:string='fname'
// ----------task3---------------
data=[
  {
    fileName:'Angular Notes',
    type:'word',
    size:74854694789
  },
    {
    fileName:'Javascripts',
    type:'excel',
    size:748535941
  },
    {
    fileName:'React js',
    type:'pdf',
    size:748896941
  }
]
// ------------------------------
  constructor(
    private _http:HttpClient
  ) { }

  ngOnInit(): void {
    this.getStudent()
  }

  getStudent(){
    this.std$=this._http.get<IStdServ[]>(this.BASE_URL)
  }

  FormReset(){
    this.searchVal=''
  }
 

}
