import { Component, Input, OnInit } from '@angular/core';
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
    contact: 9185426345,
    id:"1"
  },
  {
    fname: "Nilesh",
    lname: "Patil",
    email: "nileshpatil@gmail.com",
    contact: 9185426345,
    id:'2'
  },
  {
    fname: "Priya",
    lname: "Sharma",
    email: "priyasharma@gmail.com",
    contact: 9185426345,
    id:"3"
  },
  {
    fname: "Rohan",
    lname: "Kumar",
    email: "rohan.kumar@gmail.com",
    contact: 9185426345,
    id:"4"
  },
  {
    fname: "Aditi",
    lname: "Deshmukh",
    email: "aditi.deshmukh@gmail.com",
    contact: 9185426345,
    id:"5"
  }
];



stdData!:IStd;
editObj!:IStd | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  getnewstd(val:any){
    this.students.push(val)
    this.stdData=val
  }

  getEditId(edirId:string){
  this.editObj= this.students.find(std=>std.id==edirId);
  }

  updateValue(updatedVal:IStd){
    let index=this.students.findIndex(std=>std.id==updatedVal.id)
    this.students[index]=updatedVal;

     }

     onRemoved(remId:string){
      let index=this.students.findIndex(std=>std.id==remId)
      // console.log(index)
      this.students.splice(index,1)
     }
}
