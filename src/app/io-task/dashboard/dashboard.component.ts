import { Component, OnInit } from '@angular/core';
import { log } from 'console';
import { IStd } from '../const';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  students:IStd[] = [
  {
    fname: "Sonali",
    lname: "Pawar",
    email: "sonalipawar8079@gmail.com",
    contact: 9185426345
  },
  {
    fname: "Nilesh",
    lname: "Patil",
    email: "nileshpatil@gmail.com",
    contact: 9185426345
  },
  {
    fname: "Priya",
    lname: "Sharma",
    email: "priyasharma@gmail.com",
    contact: 9185426345
  },
  {
    fname: "Rohan",
    lname: "Kumar",
    email: "rohan.kumar@gmail.com",
    contact: 9185426345
  },
  {
    fname: "Aditi",
    lname: "Deshmukh",
    email: "aditi.deshmukh@gmail.com",
    contact: 9185426345
  }
];

stdData!:IStd;
  constructor() { }

  ngOnInit(): void {
  }

  getnewstd(val:any){
    this.students.push(val)
    this.stdData=val
  }
}
